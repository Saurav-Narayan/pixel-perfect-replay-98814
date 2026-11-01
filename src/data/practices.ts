import type { Loc, LocList } from "@/i18n/localize";

export type PracticeCategory = "community" | "soil-water" | "natural" | "livestock";
export type PracticeRegion = "india" | "nordic" | "other";

export interface Practice {
  id: string;
  title: Loc;
  category: PracticeCategory;
  regions: PracticeRegion[];
  summary: Loc;
  whereUsed: Loc;
  indianExample?: Loc;
  benefits: LocList;
  requirements: {
    land: Loc;
    money: Loc;
    groupSize: Loc;
    time: Loc;
  };
  limits: LocList;
  source: string;
  lastVerified: string;
  relatedSchemes: string[];
}

export const practices: Practice[] = [
  {
    id: "summer-pastures",
    title: {
      en: "Shared Summer Pastures (Seter/Fäbod)",
      hi: "साझा ग्रीष्मकालीन चरागाह (Seter/Fäbod)",
      mr: "सामायिक उन्हाळी कुरणे (Seter/Fäbod)",
      bn: "সাম্প্রদায়িক গ্রীষ্মকালীন চারণভূমি (Seter/Fäbod)",
    },
    category: "community",
    regions: ["nordic"],
    summary: {
      en: "A traditional Nordic practice where livestock are moved to mountain pastures during summer, allowing valley fields to grow winter fodder. This is a form of transhumance that utilizes natural resources efficiently.",
      hi: "एक पारंपरिक नॉर्डिक पद्धति जिसमें गर्मियों के दौरान पशुओं को पहाड़ी चरागाहों में ले जाया जाता है, जिससे घाटी के खेतों में सर्दियों का चारा उगाया जा सके। यह पशुचारण का एक रूप है जो प्राकृतिक संसाधनों का कुशलता से उपयोग करता है।",
      mr: "एक पारंपरिक नॉर्डिक पद्धती ज्यामध्ये उन्हाळ्यात पशुधनाला डोंगराळ कुरणांमध्ये हलवले जाते, ज्यामुळे दऱ्यातील शेतांमध्ये हिवाळ्याचे चारा पिकवता येते. हा हंगामी पशुचारणाचा एक प्रकार आहे जो नैसर्गिक संसाधनांचा कार्यक्षम वापर करतो.",
      bn: "একটি ঐতিহ্যবাহী নর্ডিক পদ্ধতি যেখানে গ্রীষ্মকালে গবাদি পশুকে পাহাড়ি চারণভূমিতে নিয়ে যাওয়া হয়, যাতে উপত্যকার ক্ষেতে শীতকালীন গোখাদ্য জন্মানো যায়। এটি ঋতুভিত্তিক পশুচারণের একটি রূপ যা প্রাকৃতিক সম্পদের দক্ষ ব্যবহার করে।",
    },
    whereUsed: {
      en: "Common in Norway (Seter) and Sweden (Fäbod) for centuries. Farmers share common grazing lands and sometimes management duties.",
      hi: "सदियों से नॉर्वे (Seter) और स्वीडन (Fäbod) में आम। किसान साझा चरागाह भूमि और कभी-कभी प्रबंधन के कार्य भी साझा करते हैं।",
      mr: "शतकानुशतके नॉर्वे (Seter) आणि स्वीडन (Fäbod) मध्ये सामान्य. शेतकरी सामायिक कुरण जमीन आणि काही वेळा व्यवस्थापनाची कामेही सामायिक करतात.",
      bn: "শতাব্দী ধরে নরওয়ে (Seter) এবং সুইডেনে (Fäbod) প্রচলিত। কৃষকরা সাধারণ চারণভূমি এবং কখনও কখনও ব্যবস্থাপনার দায়িত্বও ভাগ করে নেয়।",
    },
    benefits: {
      en: [
        "Saves valley land for winter crop production.",
        "Provides high-quality natural grazing for animals.",
        "Maintains mountain biodiversity."
      ],
      hi: [
        "सर्दियों की फसल उत्पादन के लिए घाटी की भूमि बचाता है।",
        "पशुओं को उच्च गुणवत्ता वाला प्राकृतिक चारा प्रदान करता है।",
        "पहाड़ी जैव विविधता को बनाए रखता है।"
      ],
      mr: [
        "हिवाळ्यातील पिक उत्पादनासाठी दऱ्यातील जमीन वाचवते.",
        "पशुधनाला उच्च दर्जाचे नैसर्गिक कुरण पुरवते.",
        "डोंगराळ जैवविविधता टिकवून ठेवते."
      ],
      bn: [
        "শীতকালীন ফসল উৎপাদনের জন্য উপত্যকার জমি সাশ্রয় করে।",
        "পশুদের জন্য উচ্চমানের প্রাকৃতিক চারণ সরবরাহ করে।",
        "পাহাড়ি জীববৈচিত্র্য বজায় রাখে।"
      ],
    },
    requirements: {
      land: {
        en: "Access to upland or mountain grazing areas.",
        hi: "ऊँची या पहाड़ी चरागाह क्षेत्रों तक पहुँच।",
        mr: "उंचावरील किंवा डोंगराळ कुरण क्षेत्रांपर्यंत प्रवेश.",
        bn: "উঁচু বা পাহাড়ি চারণভূমি অঞ্চলে প্রবেশাধিকার।",
      },
      money: {
        en: "Low - primarily labor-intensive.",
        hi: "कम - मुख्यतः श्रम-प्रधान।",
        mr: "कमी - प्रामुख्याने श्रमप्रधान.",
        bn: "কম - প্রধানত শ্রমনির্ভর।",
      },
      groupSize: {
        en: "Small groups of farmers or families.",
        hi: "किसानों या परिवारों के छोटे समूह।",
        mr: "शेतकरी किंवा कुटुंबांचे लहान गट.",
        bn: "কৃষক বা পরিবারের ছোট দল।",
      },
      time: {
        en: "Seasonal (3-4 months during summer).",
        hi: "मौसमी (गर्मियों के दौरान 3-4 महीने)।",
        mr: "हंगामी (उन्हाळ्यात 3-4 महिने).",
        bn: "ঋতুভিত্তিক (গ্রীষ্মকালে ৩-৪ মাস)।",
      },
    },
    limits: {
      en: [
        "Requires seasonal movement of animals.",
        "Vulnerable to changes in mountain climate.",
        "Requires knowledge of mountain terrain and predators."
      ],
      hi: [
        "पशुओं के मौसमी स्थानांतरण की आवश्यकता होती है।",
        "पहाड़ी जलवायु में बदलाव के प्रति संवेदनशील।",
        "पहाड़ी भूभाग और परभक्षियों का ज्ञान आवश्यक।"
      ],
      mr: [
        "पशुधनाच्या हंगामी स्थलांतराची आवश्यकता असते.",
        "डोंगराळ हवामानातील बदलांसाठी असंरक्षित.",
        "डोंगराळ भूभाग आणि भक्षकांचे ज्ञान आवश्यक."
      ],
      bn: [
        "পশুদের ঋতুভিত্তিক স্থানান্তর প্রয়োজন।",
        "পাহাড়ি জলবায়ুর পরিবর্তনের প্রতি সংবেদনশীল।",
        "পাহাড়ি ভূপ্রকৃতি ও শিকারি প্রাণীদের জ্ঞান প্রয়োজন।"
      ],
    },
    source: "NIBIO - Norwegian Institute of Bioeconomy Research",
    lastVerified: "2024-03-20",
    relatedSchemes: [],
  },
  {
    id: "village-commons",
    title: {
      en: "Village Grazing Commons (Gochar)",
      hi: "गाँव के सामुदायिक चरागाह (गोचर)",
      mr: "गावातील सामायिक कुरणे (गोचर)",
      bn: "গ্রামের সাম্প্রদায়িক চারণভূমি (গোচর)",
    },
    category: "community",
    regions: ["india"],
    summary: {
      en: "Traditional community-managed grazing lands reserved for the village's livestock. These are essential for landless or small-scale farmers to sustain their cattle.",
      hi: "गाँव के पशुओं के लिए आरक्षित पारंपरिक समुदाय-प्रबंधित चरागाह भूमि। ये भूमिहीन या लघु किसानों के लिए अपने मवेशियों को पालने हेतु आवश्यक हैं।",
      mr: "गावातील पशुधनासाठी राखीव पारंपरिक समुदाय-व्यवस्थापित कुरण जमीन. भूमिहीन किंवा अल्पभूधारक शेतकऱ्यांना त्यांची गुरे टिकवण्यासाठी ही आवश्यक आहेत.",
      bn: "গ্রামের গবাদি পশুর জন্য সংরক্ষিত ঐতিহ্যবাহী সমুদায়-পরিচালিত চারণভূমি। ভূমিহীন বা ক্ষুদ্র কৃষকদের তাদের গবাদি পশু টিকিয়ে রাখার জন্য এগুলি অপরিহার্য।",
    },
    whereUsed: {
      en: "Found across many Indian states, especially in Rajasthan, Gujarat, and Madhya Pradesh.",
      hi: "भारत के कई राज्यों में पाए जाते हैं, विशेषकर राजस्थान, गुजरात और मध्य प्रदेश में।",
      mr: "भारतातील अनेक राज्यांमध्ये आढळतात, विशेषतः राजस्थान, गुजरात आणि मध्य प्रदेशात.",
      bn: "ভারতের অনেক রাজ্যে পাওয়া যায়, বিশেষত রাজস্থান, গুজরাট ও মধ্যপ্রদেশে।",
    },
    indianExample: {
      en: "The 'Gochar' lands in Rajasthan, where local Panchayats manage grazing rights.",
      hi: "राजस्थान की 'गोचर' भूमि, जहाँ स्थानीय पंचायतें चराई अधिकारों का प्रबंधन करती हैं।",
      mr: "राजस्थानमधील 'गोचर' जमीन, जिथे स्थानिक पंचायती चराई हक्कांचे व्यवस्थापन करतात.",
      bn: "রাজস্থানের 'গোচর' ভূমি, যেখানে স্থানীয় পঞ্চায়েতগুলি চারণাধিকার পরিচালনা করে।",
    },
    benefits: {
      en: [
        "Reduces cost of feeding for small farmers.",
        "Supports local livestock breeds.",
        "Promotes community cooperation in resource management."
      ],
      hi: [
        "छोटे किसानों के लिए चारे की लागत कम करता है।",
        "स्थानीय पशु नस्लों का समर्थन करता है।",
        "संसाधन प्रबंधन में सामुदायिक सहयोग को बढ़ावा देता है।"
      ],
      mr: [
        "अल्पभूधारक शेतकऱ्यांची पशुखाद्याची किंमत कमी करते.",
        "स्थानिक पशु जातींना आधार देते.",
        "संसाधन व्यवस्थापनात सामायिक सहकार्याला प्रोत्साहन देते."
      ],
      bn: [
        "ক্ষুদ্র কৃষকদের গোখাদ্যের খরচ কমায়।",
        "স্থানীয় গবাদি পশুর জাতকে সহায়তা করে।",
        "সম্পদ ব্যবস্থাপনায় সাম্প্রদায়িক সহযোগিতা বাড়ায়।"
      ],
    },
    requirements: {
      land: {
        en: "Community-owned village land.",
        hi: "समुदाय के स्वामित्व वाली गाँव की भूमि।",
        mr: "समुदायाच्या मालकीची गावातील जमीन.",
        bn: "সমুদায়-মালিকানাধীন গ্রামের জমি।",
      },
      money: {
        en: "Nil - relies on community management.",
        hi: "शून्य - सामुदायिक प्रबंधन पर निर्भर।",
        mr: "शून्य - सामायिक व्यवस्थापनावर अवलंबून.",
        bn: "শূন্য - সাম্প্রদায়িক ব্যবস্থাপনার উপর নির্ভরশীল।",
      },
      groupSize: {
        en: "Entire village or neighborhood.",
        hi: "पूरा गाँव या मोहल्ला।",
        mr: "संपूर्ण गाव किंवा परिसर.",
        bn: "সমগ্র গ্রাম বা পাড়া।",
      },
      time: {
        en: "Year-round management.",
        hi: "वर्षभर प्रबंधन।",
        mr: "वर्षभर व्यवस्थापन.",
        bn: "সারা বছর ব্যবস্থাপনা।",
      },
    },
    limits: {
      en: [
        "Encroachment on common lands is a major risk.",
        "Overgrazing if not managed properly by the community.",
        "Declining quality of forage due to lack of investment."
      ],
      hi: [
        "सामूहिक भूमि पर अतिक्रमण एक बड़ा जोखिम है।",
        "समुदाय द्वारा उचित प्रबंधन न होने पर अत्यधिक चराई।",
        "निवेश की कमी से चारे की गुणवत्ता में गिरावट।"
      ],
      mr: [
        "सामायिक जमिनींवर अतिक्रमण हा मोठा धोका आहे.",
        "समुदायाकडून योग्य व्यवस्थापन न झाल्यास अतिचराई.",
        "गुंतवणुकीच्या अभावामुळे चाऱ्याच्या गुणवत्तेत घट."
      ],
      bn: [
        "সাধারণ জমিতে দখল একটি বড় ঝুঁকি।",
        "সমুদায় সঠিকভাবে পরিচালনা না করলে অতিরিক্ত চারণ।",
        "বিনিয়োগের অভাবজনিত কারণে গোখাদ্যের গুণমান হ্রাস।"
      ],
    },
    source: "Foundation for Ecological Security (FES)",
    lastVerified: "2024-03-15",
    relatedSchemes: ["nlm"],
  },
  {
    id: "dairy-cooperatives",
    title: {
      en: "Dairy Cooperatives",
      hi: "डेयरी सहकारी समितियाँ",
      mr: "दुग्ध सहकारी संस्था",
      bn: "দুগ্ধ সমবায়",
    },
    category: "community",
    regions: ["india", "nordic"],
    summary: {
      en: "A model where farmers pool their milk production to gain better bargaining power, access to processing, and fair prices. It connects small producers directly to large markets.",
      hi: "एक मॉडल जिसमें किसान बेहतर सौदेबाजी की शक्ति, प्रसंस्करण तक पहुँच और उचित मूल्य पाने के लिए अपने दूध उत्पादन को एकत्र करते हैं। यह छोटे उत्पादकों को सीधे बड़े बाजारों से जोड़ता है।",
      mr: "एक मॉडेल ज्यामध्ये शेतकरी चांगली सौदेबाजी शक्ती, प्रक्रिया सुविधा आणि योग्य भाव मिळवण्यासाठी त्यांचे दूध उत्पादन एकत्र करतात. हे लहान उत्पादकांना थेट मोठ्या बाजारांशी जोडते.",
      bn: "একটি মডেল যেখানে কৃষকরা ভালো দর-কষাকষির ক্ষমতা, প্রক্রিয়াকরণে প্রবেশাধিকার এবং ন্যায্য মূল্য পেতে তাদের দুধ উৎপাদন একত্রিত করে। এটি ক্ষুদ্র উৎপাদকদের সরাসরি বড় বাজারের সাথে যুক্ত করে।",
    },
    whereUsed: {
      en: "Global, but highly successful in Denmark, Sweden, and India.",
      hi: "वैश्विक, लेकिन डेनमार्क, स्वीडन और भारत में अत्यधिक सफल।",
      mr: "जागतिक, पण डेनमार्क, स्वीडन आणि भारतात अत्यंत यशस्वी.",
      bn: "বৈশ্বিক, তবে ডেনমার্ক, সুইডেন ও ভারতে অত্যন্ত সফল।",
    },
    indianExample: {
      en: "Amul (Gujarat Co-operative Milk Marketing Federation) is the world's largest farmer-owned cooperative.",
      hi: "Amul (गुजरात को-ऑपरेटिव मिल्क मार्केटिंग फेडरेशन) दुनिया की सबसे बड़ी किसान-स्वामित्व वाली सहकारी समिति है।",
      mr: "Amul (गुजरात को-ऑपरेटिव्ह मिल्क मार्केटिंग फेडरेशन) ही जगातील सर्वात मोठी शेतकरी-मालकीची सहकारी संस्था आहे.",
      bn: "Amul (গুজরাট কো-অপারেটিভ মিল্ক মার্কেটিং ফেডারেশন) বিশ্বের বৃহত্তম কৃষক-মালিকানাধীন সমবায়।",
    },
    benefits: {
      en: [
        "Guaranteed market for milk.",
        "Fair and transparent pricing for farmers.",
        "Access to veterinary services and quality feed through the cooperative."
      ],
      hi: [
        "दूध के लिए गारंटीकृत बाजार।",
        "किसानों के लिए उचित और पारदर्शी मूल्य निर्धारण।",
        "सहकारी समिति के माध्यम से पशु चिकित्सा सेवाओं और गुणवत्तापूर्ण चारे तक पहुँच।"
      ],
      mr: [
        "दुधासाठी हमी बाजार.",
        "शेतकऱ्यांसाठी योग्य आणि पारदर्शक भाव.",
        "सहकारी संस्थेद्वारे पशुवैद्यकीय सेवा आणि दर्जेदार चाऱ्याचा वापर."
      ],
      bn: [
        "দুধের জন্য নিশ্চিত বাজার।",
        "কৃষকদের জন্য ন্যায্য ও স্বচ্ছ মূল্য নির্ধারণ।",
        "সমবায়ের মাধ্যমে পশুচিকিৎসা সেবা ও মানসম্পন্ন গোখাদ্যে প্রবেশাধিকার।"
      ],
    },
    requirements: {
      land: {
        en: "Individual small holdings are sufficient.",
        hi: "व्यक्तिगत छोटी जोत पर्याप्त है।",
        mr: "वैयक्तिक लहान जमीन पुरेशी आहे.",
        bn: "ব্যক্তিগত ক্ষুদ্র জমি যথেষ্ট।",
      },
      money: {
        en: "Small membership fee.",
        hi: "छोटा सदस्यता शुल्क।",
        mr: "किरकोळ सदस्यता शुल्क.",
        bn: "সামান্য সদস্যতা ফি।",
      },
      groupSize: {
        en: "Large (hundreds to thousands of farmers).",
        hi: "बड़ा (सैकड़ों से हज़ारों किसान)।",
        mr: "मोठा (शेकडो ते हजारो शेतकरी).",
        bn: "বড় (শত থেকে হাজার কৃষক)।",
      },
      time: {
        en: "Long-term commitment.",
        hi: "दीर्घकालिक प्रतिबद्धता।",
        mr: "दीर्घकालीन बांधिलकी.",
        bn: "দীর্ঘমেয়াদি প্রতিশ্রুতি।",
      },
    },
    limits: {
      en: [
        "Requires strong local leadership and management.",
        "Needs reliable cold chain and transport infrastructure.",
        "Quality standards must be strictly followed by all members."
      ],
      hi: [
        "मजबूत स्थानीय नेतृत्व और प्रबंधन की आवश्यकता होती है।",
        "विश्वसनीय कोल्ड चेन और परिवहन अवसंरचना की आवश्यकता।",
        "गुणवत्ता मानकों का सभी सदस्यों द्वारा सख्ती से पालन किया जाना चाहिए।"
      ],
      mr: [
        "मजबूत स्थानिक नेतृत्व आणि व्यवस्थापन आवश्यक.",
        "विश्वासार्ह कोल्ड चेन आणि वाहतूक पायाभूत सुविधा आवश्यक.",
        "गुणवत्ता मानके सर्व सदस्यांनी काटेकोरपणे पाळली पाहिजेत."
      ],
      bn: [
        "শক্তিশালী স্থানীয় নেতৃত্ব ও ব্যবস্থাপনা প্রয়োজন।",
        "নির্ভরযোগ্য কোল্ড চেইন ও পরিবহন পরিকাঠামো প্রয়োজন।",
        "গুণমানের মানদণ্ড সব সদস্যকে কঠোরভাবে মেনে চলতে হবে।"
      ],
    },
    source: "National Dairy Development Board (NDDB)",
    lastVerified: "2024-03-10",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },
  {
    id: "rainwater-harvesting",
    title: {
      en: "Rainwater Harvesting",
      hi: "वर्षा जल संचयन",
      mr: "पावसाचे पाणी साठवण",
      bn: "বৃষ্টির জল সংরক্ষণ",
    },
    category: "soil-water",
    regions: ["india"],
    summary: {
      en: "Collecting and storing rainwater for later use, especially for irrigation during dry periods. This can be done through farm ponds, check dams, or rooftop collection.",
      hi: "बाद के उपयोग के लिए वर्षा जल एकत्र करना और संग्रहित करना, विशेषकर शुष्क अवधि के दौरान सिंचाई के लिए। यह खेत तालाबों, चेक डैम या छत संग्रह के माध्यम से किया जा सकता है।",
      mr: "नंतरच्या वापरासाठी, विशेषतः कोरड्या काळात सिंचनासाठी पावसाचे पाणी गोळा करून साठवणे. हे शेततळी, बंधारे किंवा छतावरील संकलनाद्वारे करता येते.",
      bn: "পরবর্তী ব্যবহারের জন্য, বিশেষত শুষ্ক সময়ে সেচের জন্য বৃষ্টির জল সংগ্রহ ও সংরক্ষণ। এটি খামার পুকুর, চেক ড্যাম বা ছাদ সংগ্রহ পদ্ধতিতে করা যায়।",
    },
    whereUsed: {
      en: "Arid and semi-arid regions of India.",
      hi: "भारत के शुष्क और अर्ध-शुष्क क्षेत्र।",
      mr: "भारतातील कोरडे आणि अर्ध-कोरडे प्रदेश.",
      bn: "ভারতের শুষ্ক ও আধা-শুষ্ক অঞ্চল।",
    },
    indianExample: {
      en: "The 'Johads' of Rajasthan or farm ponds (Shet Tale) in Maharashtra.",
      hi: "राजस्थान के 'जोहड़' या महाराष्ट्र के खेत तालाब (शेत तळे)।",
      mr: "राजस्थानमधील 'जोहड' किंवा महाराष्ट्रातील शेततळी (शेत तळे).",
      bn: "রাজস্থানের 'জোহাদ' বা মহারাষ্ট্রের খামার পুকুর (শেত তলে)।",
    },
    benefits: {
      en: [
        "Provides irrigation during dry spells.",
        "Recharges groundwater levels.",
        "Reduces soil erosion by slowing down runoff."
      ],
      hi: [
        "शुष्क दौरों के दौरान सिंचाई प्रदान करता है।",
        "भूजल स्तर को पुनर्भरण करता है।",
        "अपवाह को धीमा करके मृदा क्षरण कम करता है।"
      ],
      mr: [
        "कोरड्या काळात सिंचन पुरवते.",
        "भूजल पातळी पुनर्भरण करते.",
        "पाण्याचा प्रवाह मंदावून मातीची धूप कमी करते."
      ],
      bn: [
        "শুষ্ক সময়ে সেচ সরবরাহ করে।",
        "ভূগর্ভস্থ জলস্তর পুনর্ভরণ করে।",
        "প্রবাহ ধীর করে মাটিক্ষয় কমায়।"
      ],
    },
    requirements: {
      land: {
        en: "Part of the farm for pond or storage structure.",
        hi: "तालाब या भंडारण संरचना के लिए खेत का कुछ हिस्सा।",
        mr: "तळे किंवा साठवण संरचनेसाठी शेताचा काही भाग.",
        bn: "পুকুর বা সংরক্ষণ কাঠামোর জন্য খামারের অংশ।",
      },
      money: {
        en: "Moderate (for construction).",
        hi: "मध्यम (निर्माण के लिए)।",
        mr: "मध्यम (बांधकामासाठी).",
        bn: "মাঝারি (নির্মাণের জন্য)।",
      },
      groupSize: {
        en: "Individual or community.",
        hi: "व्यक्तिगत या सामुदायिक।",
        mr: "वैयक्तिक किंवा सामायिक.",
        bn: "ব্যক্তিগত বা সাম্প্রদায়িক।",
      },
      time: {
        en: "Preparation before monsoon.",
        hi: "मानसून से पहले तैयारी।",
        mr: "पावसाळ्यापूर्वी तयारी.",
        bn: "বর্ষার আগে প্রস্তুতি।",
      },
    },
    limits: {
      en: [
        "Depends on annual rainfall patterns.",
        "Storage structures require regular maintenance to prevent silting.",
        "Initial cost can be high for small farmers."
      ],
      hi: [
        "वार्षिक वर्षा पैटर्न पर निर्भर करता है।",
        "गाद रोकने के लिए भंडारण संरचनाओं को नियमित रखरखाव की आवश्यकता होती है।",
        "छोटे किसानों के लिए प्रारंभिक लागत अधिक हो सकती है।"
      ],
      mr: [
        "वार्षिक पर्जन्यमान पद्धतींवर अवलंबून असते.",
        "गाळ साचू नये म्हणून साठवण संरचनांची नियमित देखभाल आवश्यक.",
        "अल्पभूधारक शेतकऱ्यांसाठी प्रारंभिक खर्च जास्त असू शकतो."
      ],
      bn: [
        "বার্ষিক বৃষ্টিপাতের ধরণের উপর নির্ভর করে।",
        "পলি জমা রোধে সংরক্ষণ কাঠামোর নিয়মিত রক্ষণাবেক্ষণ প্রয়োজন।",
        "ক্ষুদ্র কৃষকদের জন্য প্রাথমিক খরচ বেশি হতে পারে।"
      ],
    },
    source: "Central Ground Water Board (CGWB)",
    lastVerified: "2024-03-05",
    relatedSchemes: ["pmksy"],
  },
  {
    id: "crop-rotation",
    title: {
      en: "Crop Rotation",
      hi: "फसल चक्रण",
      mr: "पीक फेरपालट",
      bn: "ফসল আবর্তন",
    },
    category: "natural",
    regions: ["india", "nordic", "other"],
    summary: {
      en: "Growing different types of crops in the same area in sequential seasons. This helps in maintaining soil fertility and breaking pest cycles.",
      hi: "क्रमिक मौसमों में एक ही क्षेत्र में विभिन्न प्रकार की फसलें उगाना। यह मृदा उर्वरता बनाए रखने और कीट चक्रों को तोड़ने में मदद करता है।",
      mr: "क्रमिक हंगामांमध्ये त्याच क्षेत्रात वेगवेगळ्या प्रकारची पिके घेणे. हे मातीची सुपीकता टिकवून ठेवण्यास आणि कीड चक्र तोडण्यास मदत करते.",
      bn: "ক্রমিক ঋতুতে একই এলাকায় বিভিন্ন ধরনের ফসল জন্মানো। এটি মাটির উর্বরতা বজায় রাখতে এবং পোকামাকড়ের চক্র ভাঙতে সাহায্য করে।",
    },
    whereUsed: {
      en: "Worldwide standard practice for sustainable agriculture.",
      hi: "टिकाऊ कृषि के लिए विश्वव्यापी मानक पद्धति।",
      mr: "शाश्वत शेतीसाठी जागतिक मानक पद्धत.",
      bn: "টেকসই কৃষির জন্য বিশ্বব্যাপী প্রমিত পদ্ধতি।",
    },
    indianExample: {
      en: "Rotating Paddy (Kharif) with Gram or Mustard (Rabi) in North India.",
      hi: "उत्तर भारत में धान (खरीफ) के साथ चना या सरसों (रबी) का चक्रण।",
      mr: "उत्तर भारतात भात (खरिप) सोबत हरभरा किंवा मोहरी (रब्बी) चे फेरपालट.",
      bn: "উত্তর ভারতে ধান (খরিফ) এর সাথে ছোলা বা সর্ষে (রবি) আবর্তন।",
    },
    benefits: {
      en: [
        "Improves soil structure and nutrient levels.",
        "Reduces pest and disease build-up.",
        "Provides diverse income sources for the farmer."
      ],
      hi: [
        "मृदा संरचना और पोषक तत्व स्तर में सुधार करता है।",
        "कीट और रोग संचय को कम करता है।",
        "किसान के लिए विविध आय स्रोत प्रदान करता है।"
      ],
      mr: [
        "मातीची रचना आणि पोषक घटक पातळी सुधारते.",
        "कीड आणि रोग वाढ कमी करते.",
        "शेतकऱ्यासाठी विविध उत्पन्न स्रोत पुरवते."
      ],
      bn: [
        "মাটির গঠন ও পুষ্টি উপাদানের মাত্রা উন্নত করে।",
        "পোকা ও রোগের বৃদ্ধি কমায়।",
        "কৃষকের জন্য বৈচিত্র্যময় আয়ের উৎস সরবরাহ করে।"
      ],
    },
    requirements: {
      land: {
        en: "No extra land needed.",
        hi: "किसी अतिरिक्त भूमि की आवश्यकता नहीं।",
        mr: "अतिरिक्त जमिनीची आवश्यकता नाही.",
        bn: "অতিরিক্ত জমির প্রয়োজন নেই।",
      },
      money: {
        en: "Low - involves changing seed types.",
        hi: "कम - इसमें बीज प्रकार बदलना शामिल है।",
        mr: "कमी - यात बियाणे प्रकार बदलणे समाविष्ट आहे.",
        bn: "কম - এতে বীজের ধরন পরিবর্তন জড়িত।",
      },
      groupSize: {
        en: "Individual.",
        hi: "व्यक्तिगत।",
        mr: "वैयक्तिक.",
        bn: "ব্যক্তিগত।",
      },
      time: {
        en: "Seasonal planning.",
        hi: "मौसमी योजना।",
        mr: "हंगामी नियोजन.",
        bn: "ঋতুভিত্তিক পরিকল্পনা।",
      },
    },
    limits: {
      en: [
        "Requires knowledge of compatible crop sequences.",
        "Market demand for secondary crops might be lower.",
        "Some rotations may require different equipment."
      ],
      hi: [
        "संगत फसल क्रमों का ज्ञान आवश्यक।",
        "द्वितीयक फसलों की बाजार मांग कम हो सकती है।",
        "कुछ चक्रणों के लिए अलग उपकरण की आवश्यकता हो सकती है।"
      ],
      mr: [
        "सुसंगत पीक क्रमांचे ज्ञान आवश्यक.",
        "दुय्यम पिकांची बाजार मागणी कमी असू शकते.",
        "काही फेरपालटांसाठी वेगळी अवजारे लागू शकतात."
      ],
      bn: [
        "সামঞ্জস্যপূর্ণ ফসল ক্রমের জ্ঞান প্রয়োজন।",
        "গৌণ ফসলের বাজার চাহিদা কম হতে পারে।",
        "কিছু আবর্তনের জন্য ভিন্ন সরঞ্জাম প্রয়োজন হতে পারে।"
      ],
    },
    source: "ICAR - Indian Agricultural Research Institute",
    lastVerified: "2024-03-01",
    relatedSchemes: ["soil-health-card"],
  }
];
