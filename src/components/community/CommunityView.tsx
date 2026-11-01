import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  MessageSquare, 
  ThumbsUp, 
  Flag, 
  BadgeCheck, 
  ArrowLeft,
  Plus,
  AlertTriangle,
  Clock,
  User,
  MapPin
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import { AskQuestionDialog } from "./AskQuestionDialog";

interface Question {
  id: string;
  text: string;
  category: string;
  crop?: string;
  animal?: string;
  topic?: string;
  practice?: string;
  state?: string;
  language: string;
  created_at: string;
  user_id: string;
  profiles: {
    display_name: string;
    role: string;
  };
  answers_count?: number;
}

interface Answer {
  id: string;
  text: string;
  created_at: string;
  user_id: string;
  profiles: {
    display_name: string;
    role: string;
  };
  likes: { user_id: string }[];
  likes_count: number;
}

export function CommunityView() {
  const { t } = useTranslation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [askOpen, setAskOpen] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [postingAnswer, setPostingAnswer] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [filter]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("questions")
        .select(`
          *,
          profiles(display_name, role)
        `)
        .order("created_at", { ascending: false });

      if (filter !== "All") {
        query = query.eq("category", filter.toLowerCase());
      }

      const { data, error } = await query;
      if (error) throw error;
      setQuestions(data || []);
    } catch (err) {
      console.error("Failed to fetch questions", err);
      // Fallback to sample data if supabase fails
      setQuestions(SAMPLE_QUESTIONS);
    } finally {
      setLoading(false);
    }
  };

  const fetchAnswers = async (questionId: string) => {
    try {
      const { data, error } = await supabase
        .from("answers")
        .select(`
          *,
          profiles(display_name, role),
          likes(user_id)
        `)
        .eq("question_id", questionId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      const formatted = (data || []).map(ans => ({
        ...ans,
        likes_count: ans.likes.length
      })).sort((a, b) => b.likes_count - a.likes_count);
      
      setAnswers(formatted);
    } catch (err) {
      console.error("Failed to fetch answers", err);
      setAnswers(SAMPLE_ANSWERS.filter(a => a.question_id === questionId));
    }
  };

  const handleLike = async (answerId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("Please login to like answers");
      return;
    }

    try {
      const { error } = await supabase.from("likes").insert({
        answer_id: answerId,
        user_id: user.id
      });
      if (error) throw error;
      fetchAnswers(selectedQuestion!.id);
    } catch (err: any) {
      if (err.code === "23505") {
        // Already liked, so unlike
        await supabase.from("likes").delete().match({ answer_id: answerId, user_id: user.id });
        fetchAnswers(selectedQuestion!.id);
      } else {
        toast.error(err.message);
      }
    }
  };

  const handlePostAnswer = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("Please login to answer");
      return;
    }

    setPostingAnswer(true);
    try {
      const { error } = await supabase.from("answers").insert({
        question_id: selectedQuestion!.id,
        user_id: user.id,
        text: answerText
      });
      if (error) throw error;
      setAnswerText("");
      fetchAnswers(selectedQuestion!.id);
      toast.success("Answer posted!");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setPostingAnswer(false);
    }
  };

  const renderList = () => (
    <div className="space-y-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search questions..." className="pl-10 h-12 rounded-2xl" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {["All", "Crop", "Livestock", "Practice", "Scheme"].map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === c ? "bg-primary text-white" : "glass hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {questions.map((q, i) => (
          <Reveal key={q.id} delay={i * 0.05}>
            <Card 
              className="glass group cursor-pointer p-5 transition-all hover:border-primary/20"
              onClick={() => { setSelectedQuestion(q); fetchAnswers(q.id); }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-lime/10 text-lime-700 border-lime/20 text-[10px] uppercase">
                      {q.category}
                    </Badge>
                    {q.state && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {q.state}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {new Date(q.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">{q.text}</h3>
                <div className="flex items-center justify-between pt-2 border-t border-glass-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                      <User className="h-3 w-3" />
                    </div>
                    {q.profiles.display_name}
                    {q.profiles.role === "expert" && <BadgeCheck className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-widest">
                    <MessageSquare className="h-4 w-4" /> {q.answers_count || 0} Answers
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );

  const renderDetail = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-3xl space-y-8">
      <button 
        onClick={() => setSelectedQuestion(null)}
        className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to community
      </button>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-primary">{selectedQuestion?.category}</Badge>
            <span className="text-sm text-muted-foreground">{new Date(selectedQuestion?.created_at || "").toLocaleDateString()}</span>
          </div>
          <h2 className="text-2xl font-bold sm:text-4xl">{selectedQuestion?.text}</h2>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-bold">{selectedQuestion?.profiles.display_name}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{selectedQuestion?.profiles.role}</p>
            </div>
          </div>
        </div>

        {selectedQuestion?.category === "livestock" && (
          <Card className="p-4 border-red-200 bg-red-50 text-red-900 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="text-sm font-bold">For emergencies, contact a veterinarian immediately.</p>
          </Card>
        )}

        <div className="space-y-4 pt-8">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="h-5 w-5" /> Answers ({answers.length})
          </h3>
          
          <div className="grid gap-6">
            {answers.map((ans) => (
              <Card key={ans.id} className={`p-5 glass space-y-4 ${ans.profiles.role === "expert" ? "border-primary/30 bg-primary/5" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 font-bold">
                        {ans.profiles.display_name}
                        {ans.profiles.role === "expert" && (
                          <Badge className="h-5 gap-1 bg-primary px-2 text-[10px]">
                            <BadgeCheck className="h-3 w-3" /> Expert
                          </Badge>
                        )}
                      </div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{new Date(ans.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    Score: {ans.likes_count * 10}
                  </div>
                </div>
                
                <p className="text-base leading-relaxed">{ans.text}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <button 
                    onClick={() => handleLike(ans.id)}
                    className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                  >
                    <ThumbsUp className="h-4 w-4" /> {ans.likes_count}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors">
                    <Flag className="h-4 w-4" /> Report
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-4 pt-8">
            <h3 className="text-lg font-bold">Your Answer</h3>
            <Textarea 
              placeholder="Write your answer here..."
              className="min-h-[120px] rounded-2xl bg-white/50"
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              maxLength={1000}
            />
            <Button variant="pill" size="xl" className="w-full" onClick={handlePostAnswer} disabled={postingAnswer}>
              {postingAnswer ? "Posting..." : "Post Answer"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t("nav.community")}</h1>
          <p className="text-lg text-muted-foreground">{t("teasers.community.sub")}</p>
        </div>
        {!selectedQuestion && (
          <Button variant="pill" size="xl" className="gap-2" onClick={() => setAskOpen(true)}>
            <Plus className="h-5 w-5" /> {t("nav.ask")}
          </Button>
        )}
      </div>

      <div className="rounded-2xl bg-primary/5 border border-primary/10 p-4 text-center text-sm text-muted-foreground">
        {t("advisor.disclaimer.community")}
      </div>

      <AnimatePresence mode="wait">
        {selectedQuestion ? renderDetail() : renderList()}
      </AnimatePresence>

      <AskQuestionDialog open={askOpen} onOpenChange={setAskOpen} />
    </div>
  );
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "Why are my tomato leaves turning yellow from the bottom?",
    category: "crop",
    crop: "Tomato",
    state: "Maharashtra",
    language: "en",
    created_at: new Date().toISOString(),
    user_id: "u1",
    profiles: { display_name: "Rahul Patil", role: "farmer" },
    answers_count: 2
  },
  {
    id: "q2",
    text: "Best time to vaccinate goats for FMD in Bihar?",
    category: "livestock",
    animal: "Goats",
    state: "Bihar",
    language: "en",
    created_at: new Date().toISOString(),
    user_id: "u2",
    profiles: { display_name: "Suresh Kumar", role: "farmer" },
    answers_count: 1
  }
];

const SAMPLE_ANSWERS: (Answer & { question_id: string })[] = [
  {
    id: "a1",
    question_id: "q1",
    text: "This is often due to nitrogen deficiency or overwatering. Check if the soil is too wet. If it's nitrogen, try adding compost or organic fertilizer.",
    created_at: new Date().toISOString(),
    user_id: "e1",
    profiles: { display_name: "Dr. Sharma", role: "expert" },
    likes: [],
    likes_count: 5
  }
];
