import type { LangCode } from "@/i18n";
import type { Loc, LocList } from "@/i18n/localize";
import { cropDiseasesHi } from "./cropDiseases.hi";
import { cropDiseasesMr } from "./cropDiseases.mr";
import { cropDiseasesBn } from "./cropDiseases.bn";

export type DiseaseType = "fungal" | "bacterial" | "viral" | "pest" | "nematode" | "nutrient";

/** The user-facing text of one disease, in a single language. */
export interface DiseaseText {
  crop: string;
  disease: string;
  symptoms: string[];
  cause: string;
  spread: string;
  conditions: string;
  organic: string[];
  chemical: string[];
  prevention: string[];
}

/** English source record, kept flat so the guide stays easy to edit. */
interface BaseDisease extends DiseaseText {
  id: string;
  cropId: string;
  type: DiseaseType;
  source: string;
  lastVerified: string;
}

/** A disease with every user-facing string available in all four languages. */
export interface CropDisease {
  id: string;
  cropId: string;
  type: DiseaseType;
  crop: Loc;
  disease: Loc;
  symptoms: LocList;
  cause: Loc;
  spread: Loc;
  conditions: Loc;
  organic: LocList;
  chemical: LocList;
  prevention: LocList;
  source: string;
  lastVerified: string;
}

type TextKey = keyof DiseaseText;

const baseDiseases: BaseDisease[] = [
  {
    id: "rice-blast",
    cropId: "rice-paddy",
    crop: "Rice (Paddy)",
    disease: "Rice Blast",
    type: "fungal",
    symptoms: [
      "Spindle or diamond-shaped spots on leaves with grey-white centre and brown margin",
      "Lesions on leaf collar and nodes that turn black",
      "Neck rot — the panicle base blackens and the ear head bends and falls over",
      "Empty or partially filled grains",
    ],
    cause: "Fungus Pyricularia oryzae. It survives in infected straw, stubble and seed.",
    spread: "Air-borne spores carried by wind, infected seed and leftover crop residue in the field.",
    conditions: "Humidity above 90%, temperature 24-28°C, frequent drizzle and high nitrogen use.",
    organic: [
      "Grow tolerant varieties such as Pusa Basmati 1121 and CO 51",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Apply balanced nitrogen and add silicon (silicate) to strengthen leaf tissue",
      "Burn or compost infected stubble away from the field",
    ],
    chemical: [
      "Seed treatment with Carbendazim 50 WP @ 2 g/kg seed",
      "Spray Tricyclazole 75 WP @ 0.6 g/litre at boot leaf stage",
      "Or spray Isoprothiolane 40 EC @ 1.5 ml/litre, repeat after 15 days if disease persists",
    ],
    prevention: [
      "Sow resistant or tolerant varieties",
      "Avoid excess nitrogen and late evening irrigation",
      "Destroy infected straw and stubble after harvest",
      "Keep field bunds clean of volunteer paddy",
    ],
    source: "ICAR-National Rice Research Institute, Cuttack",
    lastVerified: "2024-03-20",
  },
  {
    id: "rice-bacterial-leaf-blight",
    cropId: "rice-paddy",
    crop: "Rice (Paddy)",
    disease: "Bacterial Leaf Blight",
    type: "bacterial",
    symptoms: [
      "Water-soaked stripes starting from leaf tip or margin",
      "Stripes turn yellow and then straw-white as leaves dry",
      "Milky bacterial ooze visible on cut leaves early in the morning",
      "Seedling wilting (kresek) with yellowing and drying of young plants",
    ],
    cause: "Bacterium Xanthomonas oryzae. It survives in seed, straw and irrigation water.",
    spread: "Irrigation water, rain splash, strong winds and contaminated seed.",
    conditions: "Temperature 25-30°C, heavy rain and flooding, high humidity and high nitrogen.",
    organic: [
      "Use resistant varieties such as Improved Samba Mahsuri and IR 64",
      "Drain the field and let it dry for a few days",
      "Avoid clipping seedling tips at transplanting",
      "Add balanced potash to improve plant tolerance",
    ],
    chemical: [
      "Seed treatment with Streptocycline 100 ppm for 2 hours",
      "Spray Streptocycline 100 ppm with Copper oxychloride 0.3%",
      "Repeat the spray after 10 days if symptoms continue to spread",
    ],
    prevention: [
      "Use certified clean seed and resistant varieties",
      "Avoid excess nitrogen and over-irrigation",
      "Drain fields after heavy rain",
      "Remove infected stubble after harvest",
    ],
    source: "ICAR-National Rice Research Institute, Cuttack",
    lastVerified: "2024-03-18",
  },
  {
    id: "wheat-yellow-rust",
    cropId: "wheat",
    crop: "Wheat",
    disease: "Yellow (Stripe) Rust",
    type: "fungal",
    symptoms: [
      "Bright yellow powdery pustules in stripes along the veins of leaves",
      "Yellow powder rubs off on the hand when a leaf is touched",
      "Leaves turn pale, dry and lose green colour",
      "Shrivelled, light-weight grain at harvest",
    ],
    cause: "Fungus Puccinia striiformis. It survives on self-sown wheat and on hills in cooler areas.",
    spread: "Wind-borne spores spread across long distances and then field to field.",
    conditions: "Cool temperature 2-15°C, high humidity, dew and cloudy weather.",
    organic: [
      "Sow resistant varieties such as HD 3086 and PBW 725",
      "Do not delay sowing beyond mid-November",
      "Avoid excess nitrogen and dense sowing",
      "Remove volunteer wheat plants that carry the disease between seasons",
    ],
    chemical: [
      "Spray Propiconazole 25 EC @ 1 ml/litre at first sign of pustules",
      "Or spray Tebuconazole 25.9 EC @ 1 ml/litre",
      "Repeat after 15 days if the disease spreads further",
    ],
    prevention: [
      "Sow resistant and early-maturing varieties",
      "Follow timely sowing and avoid late crops",
      "Destroy volunteer wheat and infected stubble",
      "Keep a check on the field from January onwards",
    ],
    source: "ICAR-Indian Institute of Wheat and Barley Research, Karnal",
    lastVerified: "2024-03-15",
  },
  {
    id: "wheat-karnal-bunt",
    cropId: "wheat",
    crop: "Wheat",
    disease: "Karnal Bunt",
    type: "fungal",
    symptoms: [
      "Only part of the grain turns into black powdery mass",
      "A strong fishy or rotten smell from affected grains",
      "Spikes look normal from outside, damage is seen only in grain",
      "Affected grain is rejected or downgraded at the market",
    ],
    cause: "Fungus Tilletia indica. Spores survive in the soil for several years.",
    spread: "Infected seed, soil and air-borne spores released around ear emergence.",
    conditions: "Cool wet weather 18-22°C with rain or dew at the flowering stage.",
    organic: [
      "Use certified disease-free seed",
      "Avoid late sowing so that flowering does not meet wet weather",
      "Rotate with non-host crops such as pulses and oilseeds",
      "Collect and destroy ear heads showing bunted grains",
    ],
    chemical: [
      "Treat seed with Carboxin 37.5% + Thiram 37.5% @ 2 g/kg seed",
      "In known infected areas, spray Propiconazole 25 EC @ 1 ml/litre at ear emergence",
    ],
    prevention: [
      "Finish sowing by the end of November",
      "Use certified seed from a trusted source",
      "Follow crop rotation and avoid excess irrigation at flowering",
      "Clean and disinfect threshing floor and machinery",
    ],
    source: "ICAR-Indian Institute of Wheat and Barley Research, Karnal",
    lastVerified: "2024-03-12",
  },
  {
    id: "sugarcane-red-rot",
    cropId: "sugarcane",
    crop: "Sugarcane",
    disease: "Red Rot",
    type: "fungal",
    symptoms: [
      "Internal cane tissue turns red with white patches",
      "Cross-wise black dots visible inside the split cane",
      "Sour or alcoholic smell from the cane",
      "Leaves dry from the tip and the clump dries out",
    ],
    cause: "Fungus Colletotrichum falcatum. It survives in infected setts and in the soil.",
    spread: "Infected setts used for planting, soil, irrigation water and rain splash.",
    conditions: "High humidity, waterlogging, 25-30°C and heavy soils with susceptible varieties.",
    organic: [
      "Plant disease-free seed cane from a healthy plot",
      "Treat setts with Trichoderma viride @ 5 g/litre",
      "Avoid ratooning an infected crop",
      "Grow tolerant varieties such as Co 86032 and Co 0238",
    ],
    chemical: [
      "Dip setts in Carbendazim 50 WP @ 1 g/litre for 15 minutes before planting",
      "Drench heavily infected patches with Carbendazim 0.1%",
      "Avoid waterlogging and improve field drainage",
    ],
    prevention: [
      "Use healthy seed material every 2-3 years",
      "Rotate sugarcane with a legume or paddy",
      "Remove and destroy infected clumps",
      "Do not irrigate infested fields and then pass water to healthy fields",
    ],
    source: "ICAR-Sugarcane Breeding Institute, Coimbatore",
    lastVerified: "2024-03-10",
  },
  {
    id: "sugarcane-early-shoot-borer",
    cropId: "sugarcane",
    crop: "Sugarcane",
    disease: "Early Shoot Borer",
    type: "pest",
    symptoms: [
      "Dead heart in 1-3 month old crop where the central shoot dries",
      "Bored hole at the base of the shoot with frass (waste) sticking out",
      "Affected shoots can be pulled out easily",
      "Hollow stem with a larva inside the base",
    ],
    cause: "Larvae of the moth Chilo infuscatellus bore into the base of young shoots.",
    spread: "Adult moths fly to neighbouring fields; continuous sugarcane cropping increases the pest.",
    conditions: "Dry weather, high temperature 30-35°C, light soils and ratoon crop.",
    organic: [
      "Trash mulch the inter-row space after planting",
      "Release Trichogramma chilonis @ 50,000 per hectare",
      "Collect and destroy dead hearts regularly",
      "Install light traps @ 1 per hectare to catch moths",
    ],
    chemical: [
      "Soil application of Chlorantraniliprole 0.4 GR @ 10 kg/hectare at planting",
      "Or apply Carbofuran 3G @ 33 kg/hectare in the furrow",
      "Need-based spray only if 10% of shoots show damage",
    ],
    prevention: [
      "Deep ploughing to expose larvae and pupae",
      "Timely planting with adequate irrigation",
      "Avoid ratooning of an infested crop",
      "Use tolerant varieties and keep the field free of trash piles",
    ],
    source: "ICAR-Sugarcane Breeding Institute, Coimbatore",
    lastVerified: "2024-03-08",
  },
  {
    id: "cotton-pink-bollworm",
    cropId: "cotton",
    crop: "Cotton",
    disease: "Pink Bollworm",
    type: "pest",
    symptoms: [
      "Rosette flowers where petals are wrapped and do not open",
      "Small round holes on green bolls with pink larvae inside",
      "Damaged and stained lint with exit holes on the boll",
      "Premature boll opening with poor lint quality",
    ],
    cause: "Larvae of the moth Pectinophora gossypiella bore into squares, flowers and bolls.",
    spread: "Moths spread within and between fields; the pest survives on crop residue and in stored seed.",
    conditions: "Warm humid weather, continuous cotton and an extended crop season.",
    organic: [
      "Install pheromone traps @ 8-10 per hectare",
      "Remove and destroy rosette flowers and infested bolls",
      "Release Trichogramma bactrae @ 1.5 lakh per hectare",
      "Terminate the crop at the right time and do not extend it",
    ],
    chemical: [
      "Spray Profenophos 50 EC @ 2 ml/litre based on trap catch",
      "Or spray Thiodicarb 75 WP @ 1 g/litre",
      "Rotate insecticide groups and avoid repeating the same molecule",
    ],
    prevention: [
      "Sow in the recommended window and avoid staggered sowing",
      "Destroy cotton stubble after the last picking",
      "Do not keep un-ginned seed beyond the season",
      "Follow the refuge planting recommendation",
    ],
    source: "Central Institute for Cotton Research, Nagpur",
    lastVerified: "2024-03-05",
  },
  {
    id: "cotton-leaf-curl-virus",
    cropId: "cotton",
    crop: "Cotton",
    disease: "Cotton Leaf Curl Virus",
    type: "viral",
    symptoms: [
      "Upward curling and cupping of leaves",
      "Thickening of veins with leaf-like growths (enations) on the underside",
      "Stunted plants with very few bolls",
      "Severe reduction in yield and fibre quality",
    ],
    cause: "Begomovirus, carried and spread by the whitefly Bemisia tabaci.",
    spread: "Whitefly vector moving from infected plants to healthy plants.",
    conditions: "High whitefly population, warm dry weather and susceptible varieties.",
    organic: [
      "Grow tolerant varieties recommended for your region",
      "Install yellow sticky traps @ 10 per hectare to catch whitefly",
      "Spray neem oil 0.5% or azadirachtin 0.15% to reduce the vector",
      "Uproot and destroy infected plants as soon as they are seen",
    ],
    chemical: [
      "Control the whitefly vector with Diafenthiuron 50 WP @ 1 g/litre",
      "Or spray Flonicamid 50 WG @ 0.3 g/litre",
      "There is no direct cure for the virus, so vector control is essential",
    ],
    prevention: [
      "Use tolerant varieties and clean seed",
      "Avoid late sowing when whitefly builds up",
      "Remove infected plants early in the season",
      "Do not grow cotton next to infected alternate hosts",
    ],
    source: "Central Institute for Cotton Research, Nagpur",
    lastVerified: "2024-03-04",
  },
  {
    id: "jute-stem-rot",
    cropId: "jute",
    crop: "Jute",
    disease: "Stem Rot",
    type: "fungal",
    symptoms: [
      "Dark brown to black lesions on the stem near the base",
      "Bark shreds and peels off, exposing fibrous stem",
      "Sudden wilting and drying of plants in patches",
      "White mycelium and black sclerotia may be seen on the stem",
    ],
    cause: "Soil-borne fungus Macrophomina phaseolina, which survives as sclerotia in soil.",
    spread: "Soil, infected seed, crop debris and irrigation water.",
    conditions: "High temperature 30-35°C with alternating moisture stress and waterlogging.",
    organic: [
      "Rotate jute with paddy to reduce soil inoculum",
      "Grow resistant varieties such as JRO 204 and JRO 8432",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Apply balanced potash to strengthen stems",
    ],
    chemical: [
      "Seed treatment with Carbendazim 50 WP @ 2 g/kg seed",
      "Soil drench with Carbendazim 0.1% in affected patches",
    ],
    prevention: [
      "Follow crop rotation with non-host cereals",
      "Avoid waterlogging and moisture stress",
      "Remove and destroy infected plants",
      "Use certified seed from a healthy crop",
    ],
    source: "ICAR-Central Research Institute for Jute and Allied Fibres, Barrackpore",
    lastVerified: "2024-02-28",
  },
  {
    id: "jute-semilooper",
    cropId: "jute",
    crop: "Jute",
    disease: "Jute Semilooper",
    type: "pest",
    symptoms: [
      "Leaves with irregular holes and eaten margins",
      "Green larvae moving in a looping manner on leaves",
      "Severe defoliation in patches, leaving only mid-ribs",
      "Reduced plant height and poor fibre yield",
    ],
    cause: "Larvae of the moth Anomis sabulifera feed on the leaves.",
    spread: "Moths spread to nearby jute fields; high humidity favours rapid build-up.",
    conditions: "Warm humid weather 25-30°C with a dense crop canopy.",
    organic: [
      "Collect and destroy larvae by hand in the early stage",
      "Install light traps @ 1 per hectare",
      "Spray azadirachtin 0.15% @ 3-5 ml/litre",
      "Conserve natural enemies such as spiders and predatory bugs",
    ],
    chemical: [
      "Spray Quinalphos 25 EC @ 2 ml/litre",
      "Or spray Chlorantraniliprole 18.5 SC @ 0.3 ml/litre",
    ],
    prevention: [
      "Sow at the recommended time and avoid dense sowing",
      "Destroy crop residue after harvest",
      "Monitor the field regularly from the seedling stage",
      "Avoid excess nitrogen which promotes tender leaf growth",
    ],
    source: "ICAR-Central Research Institute for Jute and Allied Fibres, Barrackpore",
    lastVerified: "2024-02-26",
  },
  {
    id: "maize-fall-armyworm",
    cropId: "maize",
    crop: "Maize",
    disease: "Fall Armyworm",
    type: "pest",
    symptoms: [
      "Ragged holes and torn leaves",
      "Window-pane effect on young leaves where only the membrane is left",
      "Moist sawdust-like frass (waste) inside the whorl",
      "Damaged tassels and cobs with larvae inside",
    ],
    cause: "Larvae of the moth Spodoptera frugiperda feed inside the leaf whorl.",
    spread: "Strong-flying moths travel long distances and wind helps dispersal; several generations per season.",
    conditions: "Warm weather 25-30°C, continuous maize and a dry spell after rain.",
    organic: [
      "Hand pick larvae and destroy egg masses",
      "Put dry sand or ash in the whorl of young plants",
      "Install pheromone traps @ 5 per hectare",
      "Release Trichogramma pretiosum @ 50,000 per hectare",
    ],
    chemical: [
      "Whorl application of Chlorantraniliprole 18.5 SC @ 0.4 ml/litre",
      "Or Emamectin benzoate 5 SG @ 0.4 g/litre",
      "Or Spinetoram 11.7 SC @ 0.5 ml/litre directed into the whorl",
    ],
    prevention: [
      "Sow early and avoid staggered planting",
      "Rotate maize with pulses or other crops",
      "Destroy crop residue and volunteer plants",
      "Monitor with pheromone traps from emergence",
    ],
    source: "ICAR-Indian Institute of Maize Research, Ludhiana",
    lastVerified: "2024-02-22",
  },
  {
    id: "maize-turcicum-leaf-blight",
    cropId: "maize",
    crop: "Maize",
    disease: "Turcicum Leaf Blight",
    type: "fungal",
    symptoms: [
      "Long elliptical greyish-green to tan lesions 2-15 cm long on leaves",
      "Lesions join together and blight large parts of the leaf",
      "Premature drying of leaves and reduced photosynthesis",
      "Light and poorly filled cobs",
    ],
    cause: "Fungus Exserohilum turcicum, which survives in crop residue and seed.",
    spread: "Wind-borne spores, infected residue and rain splash.",
    conditions: "Moderate temperature 18-27°C with high humidity and long leaf wetness.",
    organic: [
      "Grow resistant hybrids recommended for your area",
      "Rotate maize with a non-host crop",
      "Deep plough to bury infected residue",
      "Follow balanced fertiliser and avoid excess nitrogen",
    ],
    chemical: [
      "Foliar spray of Mancozeb 75 WP @ 2.5 g/litre at disease onset",
      "Or spray Propiconazole 25 EC @ 1 ml/litre",
      "Repeat after 15 days if the disease continues",
    ],
    prevention: [
      "Use resistant hybrids and certified seed",
      "Follow crop rotation and residue management",
      "Avoid dense plant population",
      "Correct the field drainage to reduce leaf wetness",
    ],
    source: "ICAR-Indian Institute of Maize Research, Ludhiana",
    lastVerified: "2024-02-20",
  },
  {
    id: "soybean-yellow-mosaic-virus",
    cropId: "soybean",
    crop: "Soybean",
    disease: "Yellow Mosaic Virus",
    type: "viral",
    symptoms: [
      "Bright yellow and green mosaic patches on leaves",
      "Puckering and crinkling of leaves",
      "Stunted plants with very few pods",
      "Pods remain small with shrivelled grain",
    ],
    cause: "Mungbean yellow mosaic virus, spread by the whitefly Bemisia tabaci.",
    spread: "Whitefly vector moving from infected plants; the virus is also seed-borne in pulses.",
    conditions: "High whitefly population with warm dry weather.",
    organic: [
      "Sow resistant varieties such as JS 2069 and NRC 142",
      "Install yellow sticky traps to catch whitefly",
      "Spray neem oil 0.5% to reduce the vector",
      "Rogue out infected plants as soon as symptoms appear",
    ],
    chemical: [
      "Control whitefly with Thiamethoxam 25 WG @ 0.25 g/litre",
      "Or spray Imidacloprid 17.8 SL @ 0.3 ml/litre",
      "Repeat at 10-15 day interval if whitefly persists",
    ],
    prevention: [
      "Use resistant varieties and certified seed",
      "Sow at the recommended time",
      "Do not grow soybean near infected mungbean or urdbean",
      "Remove infected plants and keep the field weed-free",
    ],
    source: "ICAR-Indian Institute of Soybean Research, Indore",
    lastVerified: "2024-02-18",
  },
  {
    id: "soybean-charcoal-rot",
    cropId: "soybean",
    crop: "Soybean",
    disease: "Charcoal Rot",
    type: "fungal",
    symptoms: [
      "Grey-black discolouration of the taproot and lower stem",
      "Bark shreds and peels from the lower stem",
      "Sudden wilting of plants while leaves are still green",
      "Tiny black sclerotia visible inside the split stem",
    ],
    cause: "Soil-borne fungus Macrophomina phaseolina, which survives as sclerotia in soil.",
    spread: "Soil, infected seed and crop residue.",
    conditions: "High temperature 35-40°C with moisture stress, especially at pod filling.",
    organic: [
      "Grow resistant varieties suited to your region",
      "Rotate soybean with cereals",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Give protective irrigation to avoid moisture stress",
    ],
    chemical: [
      "Seed treatment with Carbendazim + Thiram (1:1) @ 3 g/kg seed",
      "Maintain soil moisture through the pod filling stage",
    ],
    prevention: [
      "Follow crop rotation with non-host cereals",
      "Avoid moisture stress at flowering and pod filling",
      "Maintain balanced nutrition with adequate potash",
      "Destroy infected crop residue",
    ],
    source: "ICAR-Indian Institute of Soybean Research, Indore",
    lastVerified: "2024-02-15",
  },
  {
    id: "mustard-alternaria-blight",
    cropId: "mustard",
    crop: "Mustard",
    disease: "Alternaria Blight",
    type: "fungal",
    symptoms: [
      "Dark brown spots with concentric rings on leaves",
      "Elongated lesions on stems and pods",
      "Premature leaf drop and shrivelled seed",
      "Poor oil content in the harvested seed",
    ],
    cause: "Fungus Alternaria brassicae, which survives in seed and crop residue.",
    spread: "Wind-borne spores, rain splash and infected seed.",
    conditions: "Humidity above 70% with temperature 15-25°C and cloudy weather.",
    organic: [
      "Grow resistant varieties such as Pusa Mustard 30",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Follow crop rotation with non-host crops",
      "Avoid dense sowing to improve air movement",
    ],
    chemical: [
      "Seed treatment with Carbendazim 50 WP @ 2 g/kg seed",
      "Spray Mancozeb 75 WP @ 2.5 g/litre at 30 and 45 days after sowing",
      "Or spray Iprodione 50 WP @ 2 g/litre",
    ],
    prevention: [
      "Use certified seed of resistant varieties",
      "Follow crop rotation and remove infected residue",
      "Sow at the recommended time",
      "Avoid excess nitrogen and dense plant population",
    ],
    source: "ICAR-Directorate of Rapeseed-Mustard Research, Bharatpur",
    lastVerified: "2024-02-10",
  },
  {
    id: "mustard-aphid",
    cropId: "mustard",
    crop: "Mustard",
    disease: "Mustard Aphid",
    type: "pest",
    symptoms: [
      "Dense colonies of grey-green aphids on shoots, flowers and pods",
      "Curling and yellowing of leaves",
      "Sooty mould on honeydew-covered plant parts",
      "Poor pod formation and shrivelled grain",
    ],
    cause: "Aphids (Lipaphis erysimi) suck sap from tender shoots and pods.",
    spread: "Winged aphids migrate into the crop; cool moist weather allows very fast multiplication.",
    conditions: "Temperature 10-20°C with cloudy, humid weather and high nitrogen use.",
    organic: [
      "Install yellow sticky traps to monitor winged aphids",
      "Spray neem oil 0.5% or azadirachtin 0.15%",
      "Conserve ladybird beetles and syrphid flies that feed on aphids",
      "Avoid excess nitrogen which produces tender growth",
    ],
    chemical: [
      "Spray Imidacloprid 17.8 SL @ 0.3 ml/litre",
      "Or Thiamethoxam 25 WG @ 0.2 g/litre",
      "Or Dimethoate 30 EC @ 1.7 ml/litre when the economic threshold is crossed",
    ],
    prevention: [
      "Sow at the recommended time",
      "Monitor the crop from the flowering stage",
      "Conserve natural enemies and avoid unnecessary sprays",
      "Keep brassica weeds like wild mustard under control",
    ],
    source: "ICAR-Directorate of Rapeseed-Mustard Research, Bharatpur",
    lastVerified: "2024-02-08",
  },
  {
    id: "gram-wilt",
    cropId: "gram-chickpea",
    crop: "Gram (Chickpea)",
    disease: "Fusarium Wilt",
    type: "fungal",
    symptoms: [
      "Drooping of leaves and petioles while they are still green",
      "Internal blackening of the stem when split open",
      "Plants dry in patches across the field",
      "Dark discolouration of the root and collar region",
    ],
    cause: "Fungus Fusarium oxysporum f. sp. ciceris, which survives in soil and seed for years.",
    spread: "Soil, infected seed, crop residue and farm machinery.",
    conditions: "Temperature 20-25°C with high soil moisture and continuous chickpea cropping.",
    organic: [
      "Grow resistant varieties such as JG 11 and KAK 2",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Rotate chickpea with cereals like sorghum or maize",
      "Avoid excess irrigation and waterlogging",
    ],
    chemical: [
      "Seed treatment with Carbendazim + Thiram (1:1) @ 2 g/kg seed",
      "Spot drench affected patches with Carbendazim 0.1%",
    ],
    prevention: [
      "Use resistant varieties and certified seed",
      "Follow rotation with non-host cereals",
      "Avoid waterlogging in the field",
      "Remove and destroy wilted plants with their roots",
    ],
    source: "ICAR-Indian Institute of Pulses Research, Kanpur",
    lastVerified: "2024-02-05",
  },
  {
    id: "gram-pod-borer",
    cropId: "gram-chickpea",
    crop: "Gram (Chickpea)",
    disease: "Gram Pod Borer (Helicoverpa)",
    type: "pest",
    symptoms: [
      "Round holes on pods with larvae feeding inside",
      "Developing grain eaten away, leaving damaged seed",
      "Shedding of flowers and buds",
      "Green-brown larvae with dark stripes seen on the plant",
    ],
    cause: "Larvae of the moth Helicoverpa armigera bore into pods and eat the grain.",
    spread: "Moths migrate over long distances and complete several generations on the crop.",
    conditions: "Warm weather during flowering and podding stage with continuous pulses nearby.",
    organic: [
      "Hand pick larvae in the early stage",
      "Install pheromone traps @ 5 per hectare",
      "Release Trichogramma chilonis @ 1 lakh per hectare",
      "Spray HaNPV @ 250 LE per hectare in the evening",
    ],
    chemical: [
      "Spray Chlorantraniliprole 18.5 SC @ 0.3 ml/litre",
      "Or Emamectin benzoate 5 SG @ 0.4 g/litre",
      "Or Indoxacarb 14.5 SC @ 1 ml/litre at pod formation",
    ],
    prevention: [
      "Sow at the recommended time and avoid late crops",
      "Grow marigold as a trap crop on the field border",
      "Monitor with pheromone traps and act on trap catch",
      "Conserve natural enemies such as spiders and predatory bugs",
    ],
    source: "ICAR-Indian Institute of Pulses Research, Kanpur",
    lastVerified: "2024-02-02",
  },
  {
    id: "groundnut-tikka",
    cropId: "groundnut",
    crop: "Groundnut",
    disease: "Tikka (Leaf Spot)",
    type: "fungal",
    symptoms: [
      "Circular dark brown spots with a yellow halo on the upper leaf surface",
      "Black spots on the lower leaf surface in late leaf spot",
      "Heavy defoliation leaving only the stem",
      "Poor pod filling and light seed",
    ],
    cause: "Fungi Cercospora arachidicola and Cercosporidium personatum, which survive in residue.",
    spread: "Wind-borne spores, rain splash and infected crop residue.",
    conditions: "High humidity with temperature 20-30°C and continuous groundnut cropping.",
    organic: [
      "Grow resistant varieties such as GPBD 4 and GJG 9",
      "Rotate groundnut with cereals",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Remove and destroy infected leaves and residue",
    ],
    chemical: [
      "Spray Chlorothalonil 75 WP @ 2 g/litre",
      "Or Hexaconazole 5 EC @ 2 ml/litre",
      "Or Mancozeb 75 WP @ 2.5 g/litre, repeating at 15-day intervals",
    ],
    prevention: [
      "Use resistant varieties and certified seed",
      "Follow crop rotation with cereals",
      "Destroy crop residue after harvest",
      "Avoid excessive irrigation and dense plant stand",
    ],
    source: "ICAR-Directorate of Groundnut Research, Junagadh",
    lastVerified: "2024-01-30",
  },
  {
    id: "groundnut-white-grub",
    cropId: "groundnut",
    crop: "Groundnut",
    disease: "White Grub",
    type: "pest",
    symptoms: [
      "Wilting and drying of plants in patches",
      "Roots completely eaten so plants can be pulled out easily",
      "C-shaped white larvae with a brown head found in the soil near roots",
      "Large bare patches in the field",
    ],
    cause: "Larvae of scarab beetles (Holotrichia species) feed on the roots.",
    spread: "Adult beetles fly to light after the first monsoon showers and lay eggs in the soil.",
    conditions: "Light sandy soils with high organic matter at the onset of the monsoon.",
    organic: [
      "Install light traps @ 1 per hectare to catch adult beetles",
      "Apply neem cake @ 250 kg per hectare",
      "Hand collect grubs while preparing the field",
      "Use trash mulching to encourage natural enemies",
    ],
    chemical: [
      "Seed treatment with Imidacloprid 48 FS @ 12.5 ml/kg seed",
      "Or soil application of Chlorantraniliprole 0.4 GR @ 10 kg/hectare",
      "Or Chlorpyriphos 20 EC @ 12.5 ml/kg seed as seed treatment",
    ],
    prevention: [
      "Follow crop rotation with non-host crops",
      "Use light traps to control adults before egg laying",
      "Apply neem cake regularly",
      "Carry out community-wide adult control at the first rains",
    ],
    source: "ICAR-Directorate of Groundnut Research, Junagadh",
    lastVerified: "2024-01-28",
  },
  {
    id: "potato-late-blight",
    cropId: "potato",
    crop: "Potato",
    disease: "Late Blight",
    type: "fungal",
    symptoms: [
      "Water-soaked pale green patches on leaves that turn brown to black",
      "White fungal growth on the lower surface of leaves in wet weather",
      "Rapid collapse of the whole plant within days",
      "Brown rot of tubers with a reddish-brown dry rot inside",
    ],
    cause: "Oomycete Phytophthora infestans, which survives in infected tubers and soil.",
    spread: "Wind-borne sporangia, rain splash and infected seed tubers.",
    conditions: "Cool temperature 10-20°C with humidity above 85%, cloud and dew.",
    organic: [
      "Grow tolerant varieties such as Kufri Girdhari",
      "Use healthy certified seed tubers",
      "Earth up (hill) the soil to protect tubers",
      "Remove and destroy infected plants immediately",
    ],
    chemical: [
      "Spray Mancozeb 75 WP @ 2.5 g/litre as a protectant",
      "Or Cymoxanil + Mancozeb @ 2.5 g/litre during cloudy weather",
      "Or Metalaxyl + Mancozeb @ 2.5 g/litre, repeating every 7-10 days in wet weather",
    ],
    prevention: [
      "Plant certified disease-free seed tubers",
      "Earth up properly and avoid overhead irrigation",
      "Destroy cull piles and infected residue",
      "Avoid excess nitrogen which makes leaves soft",
    ],
    source: "ICAR-Central Potato Research Institute, Shimla",
    lastVerified: "2024-01-25",
  },
  {
    id: "potato-bacterial-wilt",
    cropId: "potato",
    crop: "Potato",
    disease: "Bacterial Wilt",
    type: "bacterial",
    symptoms: [
      "Sudden wilting of leaves while they are still green",
      "Brown discolouration of the vascular tissue",
      "Milky bacterial ooze from a cut stem placed in water",
      "Browning and rotting of the tuber with a dark ring",
    ],
    cause: "Soil-borne bacterium Ralstonia solanacearum, which survives in soil and tubers.",
    spread: "Infected seed tubers, soil, irrigation water and farm implements.",
    conditions: "High soil temperature 30-35°C with high soil moisture and continuous potato cropping.",
    organic: [
      "Rotate potato with cereals for at least 2-3 years",
      "Use certified disease-free seed tubers",
      "Grow tolerant varieties recommended for your region",
      "Remove infected plants along with the tuber",
    ],
    chemical: [
      "Treat seed tubers with Streptocycline 100 ppm before planting",
      "Apply bleaching powder in infected patches to reduce soil bacteria",
    ],
    prevention: [
      "Follow crop rotation with non-host crops",
      "Use certified seed and avoid own saved seed from infected fields",
      "Improve drainage to avoid waterlogging",
      "Clean and disinfect implements between fields",
    ],
    source: "ICAR-Central Potato Research Institute, Shimla",
    lastVerified: "2024-01-22",
  },
  {
    id: "moong-yellow-mosaic-virus",
    cropId: "moong-bean",
    crop: "Moong Bean",
    disease: "Yellow Mosaic Virus",
    type: "viral",
    symptoms: [
      "Bright yellow mosaic patches on leaves",
      "Puckering and distortion of leaves",
      "Stunted plants with reduced branching",
      "Very few pods with small, shrivelled grain",
    ],
    cause: "Mungbean yellow mosaic virus, spread by the whitefly Bemisia tabaci.",
    spread: "Whitefly vector and, to some extent, infected seed.",
    conditions: "High whitefly population with warm dry weather.",
    organic: [
      "Grow resistant varieties such as SML 668 and Virat",
      "Install yellow sticky traps to monitor whitefly",
      "Spray neem oil 0.5% to reduce the vector",
      "Remove infected plants early",
    ],
    chemical: [
      "Control whitefly with Thiamethoxam 25 WG @ 0.25 g/litre",
      "Or spray Imidacloprid 17.8 SL @ 0.3 ml/litre",
    ],
    prevention: [
      "Use resistant varieties and certified seed",
      "Sow at the recommended time",
      "Remove infected plants and keep the field weed-free",
      "Avoid growing moong near infected pulse crops",
    ],
    source: "ICAR-Indian Institute of Pulses Research, Kanpur",
    lastVerified: "2024-01-20",
  },
  {
    id: "moong-cercospora-leaf-spot",
    cropId: "moong-bean",
    crop: "Moong Bean",
    disease: "Cercospora Leaf Spot",
    type: "fungal",
    symptoms: [
      "Small brown spots with a greyish centre and dark border on leaves",
      "Spots join together to cover large leaf areas",
      "Premature defoliation",
      "Reduced pod number and light grain",
    ],
    cause: "Fungus Cercospora canescens, which survives in seed and crop residue.",
    spread: "Wind, rain splash and infected seed.",
    conditions: "High humidity with temperature 25-30°C during rainy weather.",
    organic: [
      "Grow resistant varieties recommended for your area",
      "Rotate moong with cereals",
      "Treat seed with Trichoderma viride @ 5 g/kg seed",
      "Remove and destroy infected leaves and residue",
    ],
    chemical: [
      "Seed treatment with Carbendazim 50 WP @ 2 g/kg seed",
      "Spray Mancozeb 75 WP @ 2.5 g/litre",
      "Or Carbendazim 50 WP @ 1 g/litre at first sign of spots",
    ],
    prevention: [
      "Use resistant varieties and certified seed",
      "Follow crop rotation and destroy residue",
      "Avoid dense sowing to improve air movement",
      "Avoid overhead irrigation in the evening",
    ],
    source: "ICAR-Indian Institute of Pulses Research, Kanpur",
    lastVerified: "2024-01-18",
  },
];

const translations: Record<Exclude<LangCode, "en">, Record<string, DiseaseText>> = {
  hi: cropDiseasesHi,
  mr: cropDiseasesMr,
  bn: cropDiseasesBn,
};

/** Every disease with its text resolved into all four languages. */
export const cropDiseases: CropDisease[] = baseDiseases.map((disease) => {
  const localize = <K extends TextKey>(key: K) => {
    const en = disease[key];
    return {
      en,
      hi: translations.hi[disease.id]?.[key] ?? en,
      mr: translations.mr[disease.id]?.[key] ?? en,
      bn: translations.bn[disease.id]?.[key] ?? en,
    } as unknown as Loc & LocList;
  };

  return {
    id: disease.id,
    cropId: disease.cropId,
    type: disease.type,
    source: disease.source,
    lastVerified: disease.lastVerified,
    crop: localize("crop"),
    disease: localize("disease"),
    symptoms: localize("symptoms"),
    cause: localize("cause"),
    spread: localize("spread"),
    conditions: localize("conditions"),
    organic: localize("organic"),
    chemical: localize("chemical"),
    prevention: localize("prevention"),
  };
});
