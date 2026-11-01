import type { Loc, LocList } from "@/i18n/localize";

export type AnimalGroup = "dairy" | "poultry" | "goats";
export type AnimalTopic =
  | "health"
  | "breeding"
  | "feeding"
  | "housing"
  | "productivity"
  | "schemes";

export interface AnimalGuidance {
  id: string;
  animal: AnimalGroup;
  topic: AnimalTopic;
  issue: Loc;
  signs: LocList;
  basicCare: LocList;
  redFlags: LocList;
  whenToCallVet: Loc;
  source: string;
  lastVerified: string;
  relatedSchemes: string[];
}

export const animals: AnimalGuidance[] = [
  // Dairy Cattle and Buffalo
  {
    id: "dairy-milk-yield",
    animal: "dairy",
    topic: "health",
    issue: {
      en: "Reduced milk yield",
      hi: "दूध उत्पादन में कमी",
      mr: "दूध उत्पादनात घट",
      bn: "দুধ উৎপাদন কমে যাওয়া",
    },
    signs: {
      en: ["Sudden drop in milk quantity", "Animal appearing dull", "Change in milk consistency"],
      hi: ["दूध की मात्रा में अचानक कमी", "पशु सुस्त दिखाई देना", "दूध की गाढ़ेपन में बदलाव"],
      mr: ["दुधाच्या प्रमाणात अचानक घट", "जनावर सुस्त दिसणे", "दुधाच्या सांद्रतेत बदल"],
      bn: ["দুধের পরিমাণে হঠাৎ হ্রাস", "পশুকে নিস্তেজ দেখানো", "দুধের ঘনত্বে পরিবর্তন"],
    },
    basicCare: {
      en: [
        "Ensure access to clean drinking water at all times.",
        "Check the quality of fodder for mold or dust.",
        "Maintain a regular milking schedule.",
        "Keep the animal in a clean, stress-free environment."
      ],
      hi: [
        "हर समय साफ पीने के पानी की उपलब्धता सुनिश्चित करें।",
        "चारे की गुणवत्ता जांचें कि उसमें फफूंद या धूल तो नहीं।",
        "दूध दुहने का नियमित समय-सारिणी बनाए रखें।",
        "पशु को साफ और तनाव-मुक्त वातावरण में रखें।"
      ],
      mr: [
        "सर्व वेळ स्वच्छ पिण्याच्या पाण्याची उपलब्धता सुनिश्चित करा.",
        "चाऱ्याची गुणवत्ता तपासा—त्यात बुरशी किंवा धूळ आहे का.",
        "दूध काढण्याचे नियमित वेळापत्रक ठेवा.",
        "जनावर स्वच्छ व तणावमुक्त वातावरणात ठेवा."
      ],
      bn: [
        "সর্বদা পরিষ্কার পানীয় জলের ব্যবস্থা নিশ্চিত করুন।",
        "খাদ্যের গুণমান পরীক্ষা করুন—এতে ছত্রাক বা ধুলো আছে কি না।",
        "দুধ দোয়ার নিয়মিত সময়সূচি বজায় রাখুন।",
        "পশুকে পরিষ্কার ও চাপমুক্ত পরিবেশে রাখুন।"
      ],
    },
    redFlags: {
      en: [
        "Milk contains blood or flakes",
        "Udder is hot, swollen, or painful to touch",
        "Animal has a high fever"
      ],
      hi: [
        "दूध में खून या थक्के होना",
        "अयन (थन) गर्म, सूजा हुआ या छूने पर दर्दभरा हो",
        "पशु को तेज बुखार हो"
      ],
      mr: [
        "दुधात रक्त किंवा गठ्ठे असणे",
        "कास गरम, सुजलेला किंवा स्पर्श केल्यास वेदनादायक असणे",
        "जनावराला तीव्र ताप असणे"
      ],
      bn: [
        "দুধে রক্ত বা দলা থাকা",
        "ওলান গরম, ফোলা বা স্পর্শে বেদনাদায়ক হওয়া",
        "পশুর তীব্র জ্বর থাকা"
      ],
    },
    whenToCallVet: {
      en: "If the milk yield doesn't improve in 24 hours or if any red flags are present.",
      hi: "यदि 24 घंटे में दूध उत्पादन में सुधार न हो या कोई चेतावनी संकेत दिखे।",
      mr: "24 तासांत दूध उत्पादनात सुधारणा न झाल्यास किंवा कोणतेही धोक्याचे लक्षण आढळल्यास.",
      bn: "যদি ২৪ ঘণ্টায় দুধ উৎপাদন না বাড়ে অথবা কোনো সতর্কতা-লক্ষণ দেখা যায়।",
    },
    source: "NDDB - National Dairy Development Board",
    lastVerified: "2024-03-15",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },
  {
    id: "dairy-mastitis",
    animal: "dairy",
    topic: "health",
    issue: {
      en: "Swollen udder",
      hi: "अयन में सूजन",
      mr: "कास सुजणे",
      bn: "ওলান ফুলে যাওয়া",
    },
    signs: {
      en: ["Hardness in one or more quarters of the udder", "Swelling and redness", "Milk is watery or contains clots"],
      hi: ["अयन के एक या अधिक हिस्सों में कड़ापन", "सूजन और लालिमा", "दूध पतला हो या उसमें थक्के हों"],
      mr: ["कासेच्या एक किंवा अधिक भागांत कडकपणा", "सूज व लालसरपणा", "दूध पातळ असणे किंवा त्यात गठ्ठे असणे"],
      bn: ["ওলানের এক বা একাধিক অংশে কাঠিন্য", "ফোলা ও লালচে ভাব", "দুধ পাতলা হওয়া বা তাতে দলা থাকা"],
    },
    basicCare: {
      en: [
        "Practice clean milking techniques.",
        "Wash the udder with clean water before and after milking.",
        "Milk the affected quarter last and discard that milk.",
        "Keep the floor dry and clean."
      ],
      hi: [
        "स्वच्छ दूध दुहने की तकनीक अपनाएं।",
        "दूध दुहने से पहले और बाद में अयन को साफ पानी से धोएं।",
        "प्रभावित हिस्से को सबसे अंत में दुहें और वह दूध फेंक दें।",
        "फर्श को सूखा और साफ रखें।"
      ],
      mr: [
        "स्वच्छ दूध काढण्याचे तंत्र वापरा.",
        "दूध काढण्यापूर्वी व नंतर कास स्वच्छ पाण्याने धुवा.",
        "प्रभावित भाग शेवटी काढा आणि ते दूध टाकून द्या.",
        "जमीन कोरडी व स्वच्छ ठेवा."
      ],
      bn: [
        "পরিষ্কার দুধ দোয়ার পদ্ধতি অনুসরণ করুন।",
        "দুধ দোয়ার আগে ও পরে ওলান পরিষ্কার জলে ধুয়ে নিন।",
        "আক্রান্ত অংশ সবশেষে দোয়ান এবং সেই দুধ ফেলে দিন।",
        "মেঝে শুকনো ও পরিষ্কার রাখুন।"
      ],
    },
    redFlags: {
      en: [
        "Animal refuses to let you touch the udder due to pain",
        "Pus or blood in milk",
        "High body temperature and loss of appetite"
      ],
      hi: [
        "दर्द के कारण पशु अयन छूने नहीं देता",
        "दूध में मवाद या खून",
        "शरीर का तापमान अधिक और भूख में कमी"
      ],
      mr: [
        "वेदनेमुळे जनावर कासाला स्पर्श करू देत नाही",
        "दुधात पू किंवा रक्त",
        "शरीराचे तापमान जास्त व भूक कमी"
      ],
      bn: [
        "ব্যথার কারণে পশু ওলান স্পর্শ করতে দেয় না",
        "দুধে পুঁজ বা রক্ত",
        "শরীরের তাপমাত্রা বেশি ও ক্ষুধা কমে যাওয়া"
      ],
    },
    whenToCallVet: {
      en: "Immediately. Mastitis can spread quickly and permanently damage the udder.",
      hi: "तुरंत। मास्टाइटिस तेजी से फैल सकता है और अयन को स्थायी नुकसान पहुंचा सकता है।",
      mr: "त्वरित. मास्टायटिस वेगाने पसरू शकतो आणि कासाला कायमचे नुकसान करू शकतो.",
      bn: "অবিলম্বে। ম্যাস্টাইটিস দ্রুত ছড়াতে পারে এবং ওলানের স্থায়ী ক্ষতি করতে পারে।",
    },
    source: "IVRI - Indian Veterinary Research Institute",
    lastVerified: "2024-03-10",
    relatedSchemes: ["nadcp"],
  },
  {
    id: "dairy-lameness",
    animal: "dairy",
    topic: "health",
    issue: {
      en: "Lameness",
      hi: "लंगड़ापन",
      mr: "लंगडेपण",
      bn: "খোঁড়া হওয়া",
    },
    signs: {
      en: ["Difficulty in walking or standing", "Resting one leg frequently", "Visible wounds or swelling in the hoof area"],
      hi: ["चलने या खड़े होने में कठिनाई", "बार-बार एक टांग को आराम देना", "खुर के क्षेत्र में दिखने वाले घाव या सूजन"],
      mr: ["चालण्यात किंवा उभे राहण्यात अडचण", "वारंवार एक पाय विश्रांतीसाठी ठेवणे", "खुराच्या भागात दिसणारे जखम किंवा सूज"],
      bn: ["হাঁটা বা দাঁড়াতে অসুবিধা", "বারবার একটি পা বিশ্রামে রাখা", "খুরের এলাকায় দৃশ্যমান ক্ষত বা ফোলা"],
    },
    basicCare: {
      en: [
        "Keep the animal on a dry, non-slippery floor.",
        "Clean the hoof area with clean water.",
        "Check for stones or sharp objects stuck in the hoof.",
        "Avoid making the animal walk long distances."
      ],
      hi: [
        "पशु को सूखे, फिसलन रहित फर्श पर रखें।",
        "खुर के क्षेत्र को साफ पानी से धोएं।",
        "खुर में फंसे पत्थर या नुकीली वस्तुएं जांचें।",
        "पशु को लंबी दूरी चलाने से बचें।"
      ],
      mr: [
        "जनावर कोरड्या, न घसरणाऱ्या जमिनीवर ठेवा.",
        "खुराचा भाग स्वच्छ पाण्याने धुवा.",
        "खुरात अडकलेले दगड किंवा टोकदार वस्तू तपासा.",
        "जनावराला लांब अंतर चालवणे टाळा."
      ],
      bn: [
        "পশুকে শুকনো, পিছল নয় এমন মেঝেতে রাখুন।",
        "খুরের অংশ পরিষ্কার জলে ধুয়ে নিন।",
        "খুরে আটকে থাকা পাথর বা ধারালো বস্তু পরীক্ষা করুন।",
        "পশুকে দীর্ঘ দূরত্ব হাঁটাতে এড়িয়ে চলুন।"
      ],
    },
    redFlags: {
      en: [
        "Animal is unable to stand up",
        "Deep wounds with foul smell",
        "Severe swelling reaching above the hoof"
      ],
      hi: [
        "पशु खड़ा नहीं हो पाता",
        "बदबूदार गहरे घाव",
        "खुर के ऊपर तक फैली गंभीर सूजन"
      ],
      mr: [
        "जनावर उभे राहू शकत नाही",
        "दुर्गंधीयुक्त खोल जखम",
        "खुराच्या वरपर्यंत पोहोचलेली तीव्र सूज"
      ],
      bn: [
        "পশু দাঁড়াতে অক্ষম",
        "দুর্গন্ধযুক্ত গভীর ক্ষত",
        "খুরের উপরে পর্যন্ত ছড়ানো তীব্র ফোলা"
      ],
    },
    whenToCallVet: {
      en: "If the animal is unable to stand or if the wound looks deep and infected.",
      hi: "यदि पशु खड़ा न हो पाए या घाव गहरा और संक्रमित लगे।",
      mr: "जनावर उभे राहू शकत नसेल किंवा जखम खोल व संसर्गित वाटल्यास.",
      bn: "যদি পশু দাঁড়াতে না পারে অথবা ক্ষত গভীর ও সংক্রমিত মনে হয়।",
    },
    source: "TANUVAS - Tamil Nadu Veterinary and Animal Sciences University",
    lastVerified: "2024-03-05",
    relatedSchemes: ["livestock-insurance"],
  },
  {
    id: "dairy-calving",
    animal: "dairy",
    topic: "breeding",
    issue: {
      en: "Difficult calving",
      hi: "कठिन प्रसव",
      mr: "अवघड व्यायण",
      bn: "কঠিন প্রসব",
    },
    signs: {
      en: ["Prolonged labor (more than 2-3 hours)", "Animal appearing extremely exhausted", "Part of the calf is visible but not progressing"],
      hi: ["लंबा प्रसव (2-3 घंटे से अधिक)", "पशु अत्यधिक थका हुआ दिखाई देना", "बछड़े का हिस्सा दिखाई देना पर आगे न बढ़ना"],
      mr: ["दीर्घ प्रसव (2-3 तासांपेक्षा जास्त)", "जनावर अत्यंत थकलेले दिसणे", "वासराचा भाग दिसतो पण पुढे सरकत नाही"],
      bn: ["দীর্ঘ প্রসব (২-৩ ঘণ্টার বেশি)", "পশুকে অত্যন্ত ক্লান্ত দেখানো", "বাছুরের অংশ দেখা যাচ্ছে কিন্তু এগোচ্ছে না"],
    },
    basicCare: {
      en: [
        "Provide a clean, quiet, and well-bedded area for calving.",
        "Monitor from a distance to avoid stressing the animal.",
        "Ensure the mother has access to water after delivery."
      ],
      hi: [
        "प्रसव के लिए साफ, शांत और अच्छी बिछावट वाला स्थान दें।",
        "पशु को तनाव से बचाने के लिए दूर से निगरानी रखें।",
        "प्रसव के बाद मां को पानी उपलब्ध कराएं।"
      ],
      mr: [
        "व्यायणासाठी स्वच्छ, शांत व उत्तम अंथरुण असलेली जागा द्या.",
        "जनावरावर ताण येऊ नये म्हणून दूरून लक्ष ठेवा.",
        "व्यायणानंतर आईला पाणी उपलब्ध करून द्या."
      ],
      bn: [
        "প্রসবের জন্য পরিষ্কার, শান্ত ও ভালো বিছানা-বিশিষ্ট স্থান দিন।",
        "পশুর চাপ এড়াতে দূর থেকে নজর রাখুন।",
        "প্রসবের পরে মাকে জল সরবরাহ নিশ্চিত করুন।"
      ],
    },
    redFlags: {
      en: [
        "Water bag has burst but no calf appears within 2 hours",
        "Only the tail or one leg is visible",
        "Severe bleeding from the birth canal"
      ],
      hi: [
        "पानी की थैली फट गई पर 2 घंटे में बछड़ा नहीं निकला",
        "केवल पूंछ या एक टांग दिखाई देना",
        "जन्म नाल से अत्यधिक रक्तस्राव"
      ],
      mr: [
        "पाण्याची पिशवी फुटली पण 2 तासांत वासरू निघाले नाही",
        "फक्त शेपूट किंवा एक पाय दिसतो",
        "जन्ममार्गातून तीव्र रक्तस्राव"
      ],
      bn: [
        "জলের থলি ফেটে গেছে কিন্তু ২ ঘণ্টায় বাছুর বেরোয়নি",
        "শুধু লেজ বা একটি পা দেখা যায়",
        "জন্মনালী থেকে তীব্র রক্তক্ষরণ"
      ],
    },
    whenToCallVet: {
      en: "Immediately if labor is prolonged or if the calf's position seems abnormal.",
      hi: "यदि प्रसव लंबा चले या बछड़े की स्थिति असामान्य लगे तो तुरंत।",
      mr: "प्रसव लांबल्यास किंवा वासराची स्थिती असामान्य वाटल्यास त्वरित.",
      bn: "প্রসব দীর্ঘ হলে অথবা বাছুরের অবস্থান অস্বাভাবিক মনে হলে অবিলম্বে।",
    },
    source: "GADVASU - Guru Angad Dev Veterinary and Animal Sciences University",
    lastVerified: "2024-03-01",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },

  // Poultry
  {
    id: "poultry-sudden-death",
    animal: "poultry",
    topic: "health",
    issue: {
      en: "Sudden deaths",
      hi: "अचानक मृत्यु",
      mr: "अचानक मृत्यू",
      bn: "হঠাৎ মৃত্যু",
    },
    signs: {
      en: ["Multiple birds dying within a short period", "Birds appearing sleepy or lethargic before death", "Blue discoloration of combs and wattles"],
      hi: ["थोड़े समय में कई पक्षियों की मृत्यु", "मृत्यु से पहले पक्षी सुस्त या नींद जैसे दिखना", "कलगी और गलकम्बल का नीला पड़ जाना"],
      mr: ["थोड्या काळात अनेक पक्ष्यांचा मृत्यू", "मृत्यूपूर्वी पक्षी झोपेसारखे व सुस्त दिसणे", "तुरा व गळकंबळ निळे पडणे"],
      bn: ["অল্প সময়ে অনেক পাখির মৃত্যু", "মৃত্যুর আগে পাখিকে ঘুমন্ত বা নিস্তেজ দেখানো", "ঝুঁটি ও লটকনের নীল হয়ে যাওয়া"],
    },
    basicCare: {
      en: [
        "Isolate the healthy birds from the sick ones immediately.",
        "Clean and disinfect the entire poultry shed.",
        "Change the water and feed immediately.",
        "Restrict entry of outsiders into the farm."
      ],
      hi: [
        "स्वस्थ पक्षियों को बीमार पक्षियों से तुरंत अलग करें।",
        "पूरे पोल्ट्री शेड को साफ करें और कीटाणुरहित करें।",
        "पानी और चारा तुरंत बदलें।",
        "फार्म में बाहरी लोगों के प्रवेश पर रोक लगाएं।"
      ],
      mr: [
        "निरोगी पक्ष्यांना आजारी पक्ष्यांपासून त्वरित वेगळे करा.",
        "संपूर्ण पोल्ट्री शेड स्वच्छ करून निर्जंतुक करा.",
        "पाणी व चारा त्वरित बदला.",
        "फार्ममध्ये बाहेरील व्यक्तींच्या प्रवेशावर बंदी घाला."
      ],
      bn: [
        "সুস্থ পাখিদের অসুস্থ পাখি থেকে অবিলম্বে আলাদা করুন।",
        "সম্পূর্ণ পোল্ট্রি শেড পরিষ্কার ও জীবাণুমুক্ত করুন।",
        "জল ও খাদ্য অবিলম্বে বদলান।",
        "খামারে বাইরের লোকের প্রবেশে নিষেধাজ্ঞা দিন।"
      ],
    },
    redFlags: {
      en: [
        "High mortality rate (more than 5% in a day)",
        "Swelling of the head and neck",
        "Greenish-yellow diarrhea"
      ],
      hi: [
        "उच्च मृत्यु दर (एक दिन में 5% से अधिक)",
        "सिर और गर्दन में सूजन",
        "हरे-पीले रंग का दस्त"
      ],
      mr: [
        "उच्च मृत्यूदर (एका दिवसात 5% पेक्षा जास्त)",
        "डोके व मानेत सूज",
        "हिरवट-पिवळ्या रंगाचे जुलाब"
      ],
      bn: [
        "উচ্চ মৃত্যুহার (একদিনে ৫%-এর বেশি)",
        "মাথা ও গলায় ফোলা",
        "সবুজাভ-হলুদ ডায়রিয়া"
      ],
    },
    whenToCallVet: {
      en: "Immediately. This could be a sign of a highly contagious disease like Bird Flu or Ranikhet.",
      hi: "तुरंत। यह Bird Flu या Ranikhet जैसी अत्यधिक संक्रामक बीमारी का संकेत हो सकता है।",
      mr: "त्वरित. हे Bird Flu किंवा Ranikhet सारख्या अत्यंत संसर्गजन्य रोगाचे लक्षण असू शकते.",
      bn: "অবিলম্বে। এটি Bird Flu বা Ranikhet-এর মতো অত্যন্ত সংক্রামক রোগের লক্ষণ হতে পারে।",
    },
    source: "CPDO - Central Poultry Development Organization",
    lastVerified: "2024-02-25",
    relatedSchemes: ["nlm"],
  },
  {
    id: "poultry-egg-drop",
    animal: "poultry",
    topic: "productivity",
    issue: {
      en: "Drop in egg laying",
      hi: "अंडे देने में गिरावट",
      mr: "अंडी घालण्यात घट",
      bn: "ডিম পাড়ায় হ্রাস",
    },
    signs: {
      en: ["Significant reduction in daily egg count", "Thin-shelled or misshapen eggs", "Birds losing feathers excessively"],
      hi: ["दैनिक अंडों की संख्या में उल्लेखनीय कमी", "पतले छिलके वाले या विकृत आकार के अंडे", "पक्षियों के पंख अत्यधिक झड़ना"],
      mr: ["दैनिक अंड्यांच्या संख्येत लक्षणीय घट", "पातळ कवचाची किंवा विसंगत आकाराची अंडी", "पक्ष्यांची पिसे अति प्रमाणात गळणे"],
      bn: ["দৈনিক ডিমের সংখ্যায় উল্লেখযোগ্য হ্রাস", "পাতলা খোসাযুক্ত বা বিকৃত আকারের ডিম", "পাখির পালক অতিরিক্ত ঝরে পড়া"],
    },
    basicCare: {
      en: [
        "Ensure the feed has adequate calcium and protein.",
        "Provide 14-16 hours of light (natural + artificial).",
        "Reduce stress by avoiding overcrowding.",
        "Check for external parasites like mites."
      ],
      hi: [
        "सुनिश्चित करें कि चारे में पर्याप्त कैल्शियम और प्रोटीन हो।",
        "14-16 घंटे प्रकाश दें (प्राकृतिक + कृत्रिम)।",
        "भीड़भाड़ से बचकर तनाव कम करें।",
        "माइट जैसे बाहरी परजीवियों की जांच करें।"
      ],
      mr: [
        "चाऱ्यात पुरेसे कॅल्शियम व प्रथिने असल्याची खात्री करा.",
        "14-16 तास प्रकाश द्या (नैसर्गिक + कृत्रिम).",
        "गर्दी टाळून ताण कमी करा.",
        "माइटसारख्या बाह्य परजीवांची तपासणी करा."
      ],
      bn: [
        "খাদ্যে পর্যাপ্ত ক্যালসিয়াম ও প্রোটিন আছে কি না নিশ্চিত করুন।",
        "১৪-১৬ ঘণ্টা আলো দিন (প্রাকৃতিক + কৃত্রিম)।",
        "ভিড় এড়িয়ে চাপ কমান।",
        "মাইট-এর মতো বাহ্য পরজীবী পরীক্ষা করুন।"
      ],
    },
    redFlags: {
      en: [
        "Total stop in egg production",
        "Birds showing respiratory distress (gaping or sneezing)",
        "Paralysis of legs or wings"
      ],
      hi: [
        "अंडा उत्पादन पूरी तरह बंद हो जाना",
        "पक्षियों में श्वसन संकट (मुँह खोलकर सांस लेना या छींकना)",
        "टांगों या पंखों का पक्षाघात"
      ],
      mr: [
        "अंडी उत्पादन पूर्णपणे थांबणे",
        "पक्ष्यांत श्वसनाचा त्रास (तोंड उघडून श्वास घेणे किंवा शिंकणे)",
        "पाय किंवा पंखांचा पक्षाघात"
      ],
      bn: [
        "ডিম উৎপাদন সম্পূর্ণ বন্ধ হয়ে যাওয়া",
        "পাখির শ্বাসকষ্ট (মুখ খুলে শ্বাস নেওয়া বা হাঁচি)",
        "পা বা ডানার পক্ষাঘাত"
      ],
    },
    whenToCallVet: {
      en: "If production drops by more than 20% over 3 days or if respiratory signs appear.",
      hi: "यदि 3 दिनों में उत्पादन 20% से अधिक गिरे या श्वसन संकेत दिखें।",
      mr: "3 दिवसांत उत्पादन 20% पेक्षा जास्त घटल्यास किंवा श्वसनाची लक्षणे दिसल्यास.",
      bn: "যদি ৩ দিনে উৎপাদন ২০%-এর বেশি কমে বা শ্বাস-সংক্রান্ত লক্ষণ দেখা যায়।",
    },
    source: "ICAR-Directorate of Poultry Research",
    lastVerified: "2024-02-20",
    relatedSchemes: ["kcc-ah"],
  },

  // Goats
  {
    id: "goat-diarrhoea",
    animal: "goats",
    topic: "health",
    issue: {
      en: "Diarrhoea in kids",
      hi: "मेमनों में दस्त",
      mr: "करड्यांमध्ये जुलाब",
      bn: "ছাগলছানায় ডায়রিয়া",
    },
    signs: {
      en: ["Watery or loose stools", "Kid appearing weak and dehydrated", "Sunken eyes"],
      hi: ["पानी जैसा या ढीला मल", "मेमना कमजोर और निर्जलित दिखना", "आंखें धँसी हुई"],
      mr: ["पाण्यासारखी किंवा सैल संडास", "करडू कमजोर व निर्जलीत दिसणे", "डोळे खोल गेलेले"],
      bn: ["জলের মতো বা পাতলা পায়খানা", "ছাগলছানাকে দুর্বল ও পানিশূন্য দেখানো", "চোখ ভেতরে ঢুকে যাওয়া"],
    },
    basicCare: {
      en: [
        "Keep the kid warm and dry.",
        "Ensure the kid continues to drink milk or ORS (Oral Rehydration Solution).",
        "Keep the mother's udder clean.",
        "Clean the bedding area frequently."
      ],
      hi: [
        "मेमने को गर्म और सूखा रखें।",
        "सुनिश्चित करें कि मेमना दूध या ORS (ओरल रिहाइड्रेशन सॉल्यूशन) पीता रहे।",
        "मां का अयन साफ रखें।",
        "बिछावट वाले स्थान को बार-बार साफ करें।"
      ],
      mr: [
        "करड्याला उबदार व कोरडे ठेवा.",
        "करडू दूध किंवा ORS (मुखाद्वारे जलसंजीवनी द्रावण) पीत राहील याची खात्री करा.",
        "आईचे कास स्वच्छ ठेवा.",
        "अंथरुणाची जागा वारंवार स्वच्छ करा."
      ],
      bn: [
        "ছাগলছানাকে উষ্ণ ও শুকনো রাখুন।",
        "ছাগলছানা যেন দুধ বা ORS (ওরাল রিহাইড্রেশন সলিউশন) পান করতে থাকে তা নিশ্চিত করুন।",
        "মায়ের ওলান পরিষ্কার রাখুন।",
        "বিছানার জায়গা বারবার পরিষ্কার করুন।"
      ],
    },
    redFlags: {
      en: [
        "Blood in stools",
        "Kid is too weak to stand or suckle",
        "Very cold body temperature"
      ],
      hi: [
        "मल में खून",
        "मेमना खड़े होने या दूध पीने में अत्यधिक कमजोर",
        "शरीर का तापमान बहुत कम"
      ],
      mr: [
        "संडासात रक्त",
        "करडू उभे राहण्यास किंवा दूध पिण्यास खूप कमजोर",
        "शरीराचे तापमान खूप कमी"
      ],
      bn: [
        "পায়খানায় রক্ত",
        "ছাগলছানা দাঁড়াতে বা দুধ খেতে অত্যন্ত দুর্বল",
        "শরীরের তাপমাত্রা খুব কম"
      ],
    },
    whenToCallVet: {
      en: "If the kid is unable to suckle or if the diarrhoea persists for more than 12 hours.",
      hi: "यदि मेमना दूध न पी पाए या दस्त 12 घंटे से अधिक बना रहे।",
      mr: "करडू दूध पिऊ शकत नसेल किंवा जुलाब 12 तासांपेक्षा जास्त राहिल्यास.",
      bn: "যদি ছাগলছানা দুধ খেতে না পারে অথবা ডায়রিয়া ১২ ঘণ্টার বেশি থাকে।",
    },
    source: "CIRG - Central Institute for Research on Goats",
    lastVerified: "2024-02-15",
    relatedSchemes: ["nlm"],
  },
  {
    id: "goat-bloat",
    animal: "goats",
    topic: "health",
    issue: {
      en: "Bloating",
      hi: "पेट फूलना (अफारा)",
      mr: "पोट फुगणे (आफरा)",
      bn: "পেট ফুলে যাওয়া",
    },
    signs: {
      en: ["Left side of the abdomen is swollen and tight like a drum", "Animal is restless and kicking at its belly", "Difficulty in breathing"],
      hi: ["पेट का बायां हिस्सा ढोल की तरह फूला और तना हुआ", "पशु बेचैन है और अपने पेट पर लात मार रहा है", "सांस लेने में कठिनाई"],
      mr: ["पोटाची डावी बाजू ढोलासारखी फुगलेली व ताणलेली", "जनावर अस्वस्थ आहे आणि पोटावर लाथ मारत आहे", "श्वास घेण्यात अडचण"],
      bn: ["পেটের বাঁ দিক ঢোলের মতো ফোলা ও টানটান", "পশু অস্থির এবং নিজের পেটে লাথি মারছে", "শ্বাস নিতে অসুবিধা"],
    },
    basicCare: {
      en: [
        "Stop feeding green fodder or grains immediately.",
        "Make the animal walk slowly.",
        "Keep the animal's head at a higher level than the body."
      ],
      hi: [
        "हरा चारा या दाना देना तुरंत बंद करें।",
        "पशु को धीरे-धीरे चलाएं।",
        "पशु का सिर शरीर की तुलना में ऊँचाई पर रखें।"
      ],
      mr: [
        "हिरवा चारा किंवा धान्य देणे त्वरित बंद करा.",
        "जनावराला हळूहळू चालवा.",
        "जनावराचे डोके शरीरापेक्षा उंच ठेवा."
      ],
      bn: [
        "সবুজ খাদ্য বা দানা দেওয়া অবিলম্বে বন্ধ করুন।",
        "পশুকে ধীরে ধীরে হাঁটান।",
        "পশুর মাথা শরীরের চেয়ে উঁচুতে রাখুন।"
      ],
    },
    redFlags: {
      en: [
        "Severe respiratory distress",
        "Animal collapses or is unable to walk",
        "Abdomen is extremely distended and hard"
      ],
      hi: [
        "गंभीर श्वसन संकट",
        "पशु गिर जाए या चल न पाए",
        "पेट अत्यधिक फूला और कड़ा है"
      ],
      mr: [
        "तीव्र श्वसन त्रास",
        "जनावर कोसळते किंवा चालू शकत नाही",
        "पोट अत्यंत फुगलेले व कडक आहे"
      ],
      bn: [
        "তীব্র শ্বাসকষ্ট",
        "পশু লুটিয়ে পড়ে বা হাঁটতে অক্ষম",
        "পেট অত্যন্ত ফোলা ও শক্ত"
      ],
    },
    whenToCallVet: {
      en: "Immediately. Bloat can be fatal within a few hours if not treated.",
      hi: "तुरंत। उपचार न मिलने पर अफारा कुछ घंटों में घातक हो सकता है।",
      mr: "त्वरित. उपचार न झाल्यास आफरा काही तासांत प्राणघातक ठरू शकतो.",
      bn: "অবিলম্বে। চিকিৎসা না হলে পেট ফুলে যাওয়া কয়েক ঘণ্টার মধ্যে মারাত্মক হতে পারে।",
    },
    source: "ICAR-Central Institute for Research on Goats",
    lastVerified: "2024-02-10",
    relatedSchemes: ["livestock-insurance"],
  }
];
