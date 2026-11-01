import type { Loc } from "@/i18n/localize";

export type SchemeNeed = "pest" | "money" | "insure" | "irrigate" | "soil" | "price" | "animal";

export interface Scheme {
  id: string;
  name: Loc;
  level: "Central" | "State";
  states: string[];
  crops?: string[];
  animals?: string[];
  minLand?: number; // in acres
  maxLand?: number; // in acres
  needs: SchemeNeed[];
  benefit: Loc;
  howToApply: Loc;
  officialUrl: string;
  source: string;
  lastVerified: string;
}

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: {
      en: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
      hi: "PM-KISAN (प्रधानमंत्री किसान सम्मान निधि)",
      mr: "PM-KISAN (प्रधानमंत्री किसान सन्मान निधी)",
      bn: "PM-KISAN (প্রধানমন্ত্রী কিষান সম্মান নিধি)",
    },
    level: "Central",
    states: ["All"],
    needs: ["money"],
    benefit: {
      en: "Direct income support of ₹6,000 per year in three equal installments.",
      hi: "प्रति वर्ष ₹6,000 की प्रत्यक्ष आय सहायता, तीन समान किस्तों में।",
      mr: "दरवर्षी ₹6,000 चे थेट उत्पन्न सहाय्य, तीन समान हप्त्यांमध्ये.",
      bn: "বছরে ₹6,000 টাকা সরাসরি আয় সহায়তা, তিনটি সমান কিস্তিতে।",
    },
    howToApply: {
      en: "Register on the PM-KISAN portal or via local CSC (Common Service Centres).",
      hi: "PM-KISAN पोर्टल पर या स्थानीय CSC (सामान्य सेवा केंद्र) के माध्यम से पंजीकरण करें।",
      mr: "PM-KISAN पोर्टलवर किंवा स्थानिक CSC (सामान्य सेवा केंद्रे) द्वारे नोंदणी करा.",
      bn: "PM-KISAN পোর্টালে বা স্থানীয় CSC (সাধারণ সেবা কেন্দ্র)-এর মাধ্যমে নিবন্ধন করুন।",
    },
    officialUrl: "https://pmkisan.gov.in/",
    source: "Ministry of Agriculture & Farmers Welfare",
    lastVerified: "2024-03-15",
  },
  {
    id: "pmfby",
    name: {
      en: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
      hi: "PMFBY (प्रधानमंत्री फसल बीमा योजना)",
      mr: "PMFBY (प्रधानमंत्री पीक विमा योजना)",
      bn: "PMFBY (প্রধানমন্ত্রী ফসল বিমা যোজনা)",
    },
    level: "Central",
    states: ["All"],
    needs: ["insure"],
    benefit: {
      en: "Comprehensive insurance cover against failure of crops due to non-preventable natural risks.",
      hi: "अपरिहार्य प्राकृतिक जोखिमों के कारण फसल नष्ट होने पर व्यापक बीमा कवर।",
      mr: "अटळ नैसर्गिक धोक्यांमुळे पिकांचे नुकसान झाल्यास सर्वसमावेशक विमा संरक्षण.",
      bn: "অনিবার্য প্রাকৃতিক ঝুঁকির কারণে ফসল নষ্ট হলে ব্যাপক বিমা সুরক্ষা।",
    },
    howToApply: {
      en: "Apply through the National Crop Insurance Portal, banks, or insurance agents.",
      hi: "राष्ट्रीय फसल बीमा पोर्टल, बैंकों या बीमा एजेंटों के माध्यम से आवेदन करें।",
      mr: "राष्ट्रीय पीक विमा पोर्टल, बँका किंवा विमा एजंटमार्फत अर्ज करा.",
      bn: "জাতীয় ফসল বিমা পোর্টাল, ব্যাংক বা বিমা এজেন্টের মাধ্যমে আবেদন করুন।",
    },
    officialUrl: "https://pmfby.gov.in/",
    source: "Ministry of Agriculture & Farmers Welfare",
    lastVerified: "2024-03-10",
  },
  {
    id: "kcc",
    name: {
      en: "Kisan Credit Card (KCC)",
      hi: "किसान क्रेडिट कार्ड (KCC)",
      mr: "किसान क्रेडिट कार्ड (KCC)",
      bn: "কিষান ক্রেডিট কার্ড (KCC)",
    },
    level: "Central",
    states: ["All"],
    needs: ["money"],
    benefit: {
      en: "Access to timely credit for agriculture and allied activities at subsidized interest rates.",
      hi: "रियायती ब्याज दरों पर कृषि एवं संबद्ध गतिविधियों के लिए समय पर ऋण की उपलब्धता।",
      mr: "अनुदानित व्याजदरात शेती व संलग्न क्रियाकलापांसाठी वेळेवर कर्जाची उपलब्धता.",
      bn: "ভর্তুকি সুদের হারে কৃষি ও সংশ্লিষ্ট কার্যক্রমের জন্য সময়মতো ঋণের সুবিধা।",
    },
    howToApply: {
      en: "Apply at any commercial bank, RRB, or cooperative bank.",
      hi: "किसी भी वाणिज्यिक बैंक, RRB या सहकारी बैंक में आवेदन करें।",
      mr: "कोणत्याही व्यापारी बँक, RRB किंवा सहकारी बँकेत अर्ज करा.",
      bn: "যেকোনো বাণিজ্যিক ব্যাংক, RRB বা সমবায় ব্যাংকে আবেদন করুন।",
    },
    officialUrl: "https://www.myscheme.gov.in/schemes/kcc",
    source: "RBI / NABARD",
    lastVerified: "2024-03-05",
  },
  {
    id: "soil-health-card",
    name: {
      en: "Soil Health Card Scheme",
      hi: "मृदा स्वास्थ्य कार्ड योजना",
      mr: "मृदा आरोग्य कार्ड योजना",
      bn: "মৃত্তিকা স্বাস্থ্য কার্ড যোজনা",
    },
    level: "Central",
    states: ["All"],
    needs: ["soil"],
    benefit: {
      en: "Provides information to farmers on nutrient status of their soil and recommendations on appropriate dosage of nutrients.",
      hi: "किसानों को उनकी मिट्टी की पोषक तत्व स्थिति की जानकारी और उपयुक्त पोषक तत्व मात्रा की सिफारिशें प्रदान करता है।",
      mr: "शेतकऱ्यांना त्यांच्या मातीच्या पोषक तत्त्व स्थितीची माहिती व योग्य पोषक तत्त्व मात्रेच्या शिफारसी देते.",
      bn: "কৃষকদের তাদের মাটির পুষ্টি উপাদানের অবস্থা সম্পর্কে তথ্য এবং উপযুক্ত পুষ্টি উপাদানের মাত্রার সুপারিশ প্রদান করে।",
    },
    howToApply: {
      en: "Contact local agriculture department for soil sample collection and testing.",
      hi: "मिट्टी के नमूने संग्रहण और परीक्षण के लिए स्थानीय कृषि विभाग से संपर्क करें।",
      mr: "मातीच्या नमुन्यांच्या संकलन व परीक्षणासाठी स्थानिक कृषी विभागाशी संपर्क साधा.",
      bn: "মাটির নমুনা সংগ্রহ ও পরীক্ষার জন্য স্থানীয় কৃষি বিভাগের সাথে যোগাযোগ করুন।",
    },
    officialUrl: "https://soilhealth.dac.gov.in/",
    source: "Department of Agriculture and Farmers Welfare",
    lastVerified: "2024-03-01",
  },
  {
    id: "pm-kusum",
    name: {
      en: "PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan)",
      hi: "PM-KUSUM (प्रधानमंत्री किसान ऊर्जा सुरक्षा एवं उत्थान महाभियान)",
      mr: "PM-KUSUM (प्रधानमंत्री किसान ऊर्जा सुरक्षा एवं उत्थान महाअभियान)",
      bn: "PM-KUSUM (প্রধানমন্ত্রী কিষান ঊর্জা সুরক্ষা এবং উত্থান মহাঅভিযান)",
    },
    level: "Central",
    states: ["All"],
    needs: ["irrigate"],
    benefit: {
      en: "Subsidies for setting up solar pumps and solar power plants on barren land.",
      hi: "बंजर भूमि पर सौर पंप और सौर ऊर्जा संयंत्र लगाने के लिए सब्सिडी।",
      mr: "पडीक जमिनीवर सौर पंप व सौर ऊर्जा प्रकल्प उभारण्यासाठी अनुदान.",
      bn: "অনুর্বর জমিতে সৌর পাম্প ও সৌর বিদ্যুৎ কেন্দ্র স্থাপনের জন্য ভর্তুকি।",
    },
    howToApply: {
      en: "Apply through state-level implementing agencies (SNA).",
      hi: "राज्य-स्तरीय कार्यान्वयन एजेंसियों (SNA) के माध्यम से आवेदन करें।",
      mr: "राज्यस्तरीय अंमलबजावणी संस्थांमार्फत (SNA) अर्ज करा.",
      bn: "রাজ্য-স্তরের বাস্তবায়নকারী সংস্থার (SNA) মাধ্যমে আবেদন করুন।",
    },
    officialUrl: "https://pmkusum.mnre.gov.in/",
    source: "Ministry of New and Renewable Energy",
    lastVerified: "2024-02-25",
  },
  {
    id: "pmksy",
    name: {
      en: "PMKSY (Pradhan Mantri Krishi Sinchayee Yojana)",
      hi: "PMKSY (प्रधानमंत्री कृषि सिंचाई योजना)",
      mr: "PMKSY (प्रधानमंत्री कृषी सिंचन योजना)",
      bn: "PMKSY (প্রধানমন্ত্রী কৃষি সিঞ্চন যোজনা)",
    },
    level: "Central",
    states: ["All"],
    needs: ["irrigate"],
    benefit: {
      en: "Focuses on 'Per Drop More Crop' through micro-irrigation (Drip and Sprinkler).",
      hi: "सूक्ष्म सिंचाई (ड्रिप और स्प्रिंकलर) के माध्यम से 'प्रति बूंद अधिक फसल' पर केंद्रित।",
      mr: "सूक्ष्म सिंचन (ठिबक व तुषार) द्वारे 'प्रत्येक थेंब अधिक पीक' वर भर.",
      bn: "অণু-সেচ (ড্রিপ ও স্প্রিংকলার)-এর মাধ্যমে 'প্রতি বিন্দু বেশি ফসল'-এর উপর গুরুত্ব।",
    },
    howToApply: {
      en: "Apply through state agriculture/horticulture departments.",
      hi: "राज्य कृषि/बागवानी विभागों के माध्यम से आवेदन करें।",
      mr: "राज्य कृषी/फलोत्पादन विभागांमार्फत अर्ज करा.",
      bn: "রাজ্য কৃষি/উদ্যানপালন বিভাগের মাধ্যমে আবেদন করুন।",
    },
    officialUrl: "https://pmksy.gov.in/",
    source: "Department of Agriculture and Farmers Welfare",
    lastVerified: "2024-02-20",
  },
  {
    id: "e-nam",
    name: {
      en: "e-NAM (National Agriculture Market)",
      hi: "e-NAM (राष्ट्रीय कृषि बाजार)",
      mr: "e-NAM (राष्ट्रीय कृषी बाजार)",
      bn: "e-NAM (জাতীয় কৃষি বাজার)",
    },
    level: "Central",
    states: ["All"],
    needs: ["price"],
    benefit: {
      en: "Online trading platform for agricultural commodities to ensure better price discovery.",
      hi: "बेहतर मूल्य खोज सुनिश्चित करने के लिए कृषि जिंसों हेतु ऑनलाइन व्यापार मंच।",
      mr: "अधिक चांगले मूल्य निर्धारण सुनिश्चित करण्यासाठी कृषी मालासाठी ऑनलाइन व्यापार मंच.",
      bn: "উন্নত মূল্য নির্ধারণ নিশ্চিত করতে কৃষি পণ্যের জন্য অনলাইন বাণিজ্য প্ল্যাটফর্ম।",
    },
    howToApply: {
      en: "Register as a farmer on the e-NAM portal or at designated mandis.",
      hi: "e-NAM पोर्टल पर या निर्धारित मंडियों में किसान के रूप में पंजीकरण करें।",
      mr: "e-NAM पोर्टलवर किंवा निर्धारित बाजार समित्यांमध्ये शेतकरी म्हणून नोंदणी करा.",
      bn: "e-NAM পোর্টালে বা নির্ধারিত মান্ডিতে কৃষক হিসেবে নিবন্ধন করুন।",
    },
    officialUrl: "https://enam.gov.in/",
    source: "Small Farmers Agribusiness Consortium (SFAC)",
    lastVerified: "2024-02-15",
  },
  {
    id: "nlm",
    name: {
      en: "National Livestock Mission (NLM)",
      hi: "राष्ट्रीय पशुधन मिशन (NLM)",
      mr: "राष्ट्रीय पशुधन मिशन (NLM)",
      bn: "জাতীয় পশুসম্পদ মিশন (NLM)",
    },
    level: "Central",
    states: ["All"],
    animals: ["Dairy cattle and buffalo", "Poultry", "Goats"],
    needs: ["animal"],
    benefit: {
      en: "Subsidies for breed improvement, poultry development, and fodder production.",
      hi: "नस्ल सुधार, मुर्गीपालन विकास और चारा उत्पादन के लिए सब्सिडी।",
      mr: "वंश सुधारणा, कुक्कुट विकास व चारा उत्पादनासाठी अनुदान.",
      bn: "জাত উন্নয়ন, পোল্ট্রি উন্নয়ন ও গো-খাদ্য উৎপাদনের জন্য ভর্তুকি।",
    },
    howToApply: {
      en: "Apply online through the NLM portal or via District Animal Husbandry Office.",
      hi: "NLM पोर्टल के माध्यम से ऑनलाइन या जिला पशुपालन कार्यालय के माध्यम से आवेदन करें।",
      mr: "NLM पोर्टलद्वारे ऑनलाइन किंवा जिल्हा पशुसंवर्धन कार्यालयामार्फत अर्ज करा.",
      bn: "NLM পোর্টালের মাধ্যমে অনলাইনে বা জেলা পশুপালন কার্যালয়ের মাধ্যমে আবেদন করুন।",
    },
    officialUrl: "https://nlm.udyamimitra.in/",
    source: "Department of Animal Husbandry & Dairying",
    lastVerified: "2024-02-10",
  },
  {
    id: "rashtriya-gokul-mission",
    name: {
      en: "Rashtriya Gokul Mission",
      hi: "राष्ट्रीय गोकुल मिशन",
      mr: "राष्ट्रीय गोकुळ मिशन",
      bn: "রাষ্ট্রীয় গোকুল মিশন",
    },
    level: "Central",
    states: ["All"],
    animals: ["Dairy cattle and buffalo"],
    needs: ["animal"],
    benefit: {
      en: "Promotion of indigenous breeds and enhance milk productivity.",
      hi: "देशी नस्लों को बढ़ावा और दूध उत्पादकता में वृद्धि।",
      mr: "देशी जातींचा प्रचार व दूध उत्पादकता वाढवणे.",
      bn: "দেশীয় প্রজাতির প্রসার এবং দুধ উৎপাদনশীলতা বৃদ্ধি।",
    },
    howToApply: {
      en: "Contact local veterinary center or state animal husbandry department.",
      hi: "स्थानीय पशु चिकित्सा केंद्र या राज्य पशुपालन विभाग से संपर्क करें।",
      mr: "स्थानिक पशुवैद्यकीय केंद्र किंवा राज्य पशुसंवर्धन विभागाशी संपर्क साधा.",
      bn: "স্থানীয় পশু চিকিৎসা কেন্দ্র বা রাজ্য পশুপালন বিভাগের সাথে যোগাযোগ করুন।",
    },
    officialUrl: "https://dahd.nic.in/schemes/programmes/rashtriya-gokul-mission",
    source: "Department of Animal Husbandry & Dairying",
    lastVerified: "2024-02-05",
  },
  {
    id: "nadcp",
    name: {
      en: "National Animal Disease Control Programme (NADCP)",
      hi: "राष्ट्रीय पशु रोग नियंत्रण कार्यक्रम (NADCP)",
      mr: "राष्ट्रीय पशुरोग नियंत्रण कार्यक्रम (NADCP)",
      bn: "জাতীয় পশু রোগ নিয়ন্ত্রণ কার্যক্রম (NADCP)",
    },
    level: "Central",
    states: ["All"],
    animals: ["Dairy cattle and buffalo", "Goats"],
    needs: ["animal"],
    benefit: {
      en: "Free vaccination for Foot and Mouth Disease (FMD) and Brucellosis.",
      hi: "खुरपका-मुंहपका रोग (FMD) और ब्रुसेलोसिस के लिए मुफ्त टीकाकरण।",
      mr: "तोंड व पायांचा रोग (FMD) व ब्रुसेलोसिससाठी मोफत लसीकरण.",
      bn: "ফুট অ্যান্ড মাউথ ডিজিজ (FMD) এবং ব্রুসেলোসিসের জন্য বিনামূল্যে টিকাদান।",
    },
    howToApply: {
      en: "Contact local government veterinary hospital during vaccination drives.",
      hi: "टीकाकरण अभियानों के दौरान स्थानीय सरकारी पशु चिकित्सालय से संपर्क करें।",
      mr: "लसीकरण मोहिमांदरम्यान स्थानिक शासकीय पशुवैद्यकीय रुग्णालयाशी संपर्क साधा.",
      bn: "টিকাদান অভিযানের সময় স্থানীয় সরকারি পশু চিকিৎসা হাসপাতালের সাথে যোগাযোগ করুন।",
    },
    officialUrl: "https://dahd.nic.in/schemes/programmes/nadcp",
    source: "Department of Animal Husbandry & Dairying",
    lastVerified: "2024-01-30",
  },
  {
    id: "kcc-ah",
    name: {
      en: "KCC for Animal Husbandry",
      hi: "पशुपालन के लिए KCC",
      mr: "पशुसंवर्धनासाठी KCC",
      bn: "পশুপালনের জন্য KCC",
    },
    level: "Central",
    states: ["All"],
    animals: ["Dairy cattle and buffalo", "Poultry", "Goats"],
    needs: ["money", "animal"],
    benefit: {
      en: "Working capital credit for livestock farmers at subsidized rates.",
      hi: "रियायती दरों पर पशुधन किसानों के लिए कार्यशील पूंजी ऋण।",
      mr: "अनुदानित दरात पशुधन शेतकऱ्यांसाठी खेळते भांडवल कर्ज.",
      bn: "ভর্তুকি হারে পশুসম্পদ কৃষকদের জন্য কার্যকরী মূলধন ঋণ।",
    },
    howToApply: {
      en: "Submit application to local commercial or cooperative banks.",
      hi: "स्थानीय वाणिज्यिक या सहकारी बैंकों में आवेदन जमा करें।",
      mr: "स्थानिक व्यापारी किंवा सहकारी बँकांमध्ये अर्ज सादर करा.",
      bn: "স্থানীয় বাণিজ্যিক বা সমবায় ব্যাংকে আবেদন জমা দিন।",
    },
    officialUrl: "https://dahd.nic.in/kcc-livestock",
    source: "Department of Animal Husbandry & Dairying",
    lastVerified: "2024-01-25",
  },
  {
    id: "livestock-insurance",
    name: {
      en: "Livestock Insurance Scheme",
      hi: "पशुधन बीमा योजना",
      mr: "पशुधन विमा योजना",
      bn: "পশুসম্পদ বিমা যোজনা",
    },
    level: "Central",
    states: ["All"],
    animals: ["Dairy cattle and buffalo", "Goats"],
    needs: ["insure", "animal"],
    benefit: {
      en: "Protection against loss of animals due to death, with subsidized premium rates.",
      hi: "मृत्यु के कारण पशुओं के नुकसान से सुरक्षा, रियायती प्रीमियम दरों के साथ।",
      mr: "मृत्यूमुळे पशुधनाच्या नुकसानीपासून संरक्षण, अनुदानित प्रीमियम दरांसह.",
      bn: "মৃত্যুর কারণে পশুর ক্ষতি থেকে সুরক্ষা, ভর্তুকিযুক্ত প্রিমিয়াম হারে।",
    },
    howToApply: {
      en: "Contact District Animal Husbandry Office or empanelled insurance companies.",
      hi: "जिला पशुपालन कार्यालय या सूचीबद्ध बीमा कंपनियों से संपर्क करें।",
      mr: "जिल्हा पशुसंवर्धन कार्यालय किंवा सूचीबद्ध विमा कंपन्यांशी संपर्क साधा.",
      bn: "জেলা পশুপালন কার্যালয় বা তালিকাভুক্ত বিমা কোম্পানির সাথে যোগাযোগ করুন।",
    },
    officialUrl: "https://dahd.nic.in/schemes/programmes/livestock-insurance-scheme",
    source: "Department of Animal Husbandry & Dairying",
    lastVerified: "2024-01-20",
  }
];
