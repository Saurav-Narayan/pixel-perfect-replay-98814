-- SQL Migration for Krishi Setu Community

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT,
  state TEXT,
  district TEXT,
  role TEXT DEFAULT 'farmer' CHECK (role IN ('farmer', 'expert', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Questions Table
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  text TEXT NOT NULL CHECK (char_length(text) <= 500),
  category TEXT CHECK (category IN ('crop', 'livestock', 'practice', 'scheme')),
  crop TEXT,
  animal TEXT,
  topic TEXT,
  practice TEXT,
  state TEXT,
  district TEXT,
  language TEXT NOT NULL,
  is_hidden BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Answers Table
CREATE TABLE IF NOT EXISTS public.answers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  text TEXT NOT NULL CHECK (char_length(text) <= 1000),
  is_hidden BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Likes Table
CREATE TABLE IF NOT EXISTS public.likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  answer_id UUID REFERENCES public.answers(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  UNIQUE(answer_id, user_id)
);

-- 5. Reports Table
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  target_type TEXT CHECK (target_type IN ('question', 'answer')),
  target_id UUID NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Questions
CREATE POLICY "Questions are viewable by everyone." ON public.questions
  FOR SELECT USING (NOT is_hidden);

CREATE POLICY "Users can insert own questions." ON public.questions
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND 
    (SELECT count(*) FROM public.questions WHERE user_id = auth.uid() AND created_at > now() - interval '24 hours') < 5
  );

CREATE POLICY "Users can update/delete own questions." ON public.questions
  FOR ALL USING (auth.uid() = user_id);

-- Answers
CREATE POLICY "Answers are viewable by everyone." ON public.answers
  FOR SELECT USING (NOT is_hidden);

CREATE POLICY "Users can insert own answers." ON public.answers
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update/delete own answers." ON public.answers
  FOR ALL USING (auth.uid() = user_id);

-- Likes
CREATE POLICY "Likes are viewable by everyone." ON public.likes
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own likes." ON public.likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own likes." ON public.likes
  FOR DELETE USING (auth.uid() = user_id);

-- Reports
CREATE POLICY "Users can insert own reports." ON public.reports
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Functions & Triggers

-- Automatically create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, new.raw_user_meta_data->>'display_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
