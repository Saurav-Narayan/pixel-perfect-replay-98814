export interface AnimalGuidance {
  id: string;
  animal: "Dairy cattle and buffalo" | "Poultry" | "Goats";
  topic: "Health problem" | "Breeding and delivery" | "Feeding" | "Housing and care" | "Productivity and income" | "Schemes and subsidies";
  issue: string;
  signs: string[];
  basicCare: string[];
  redFlags: string[];
  whenToCallVet: string;
  source: string;
  lastVerified: string;
  relatedSchemes: string[];
}

export const animals: AnimalGuidance[] = [
  // Dairy Cattle and Buffalo
  {
    id: "dairy-milk-yield",
    animal: "Dairy cattle and buffalo",
    topic: "Health problem",
    issue: "Reduced milk yield",
    signs: ["Sudden drop in milk quantity", "Animal appearing dull", "Change in milk consistency"],
    basicCare: [
      "Ensure access to clean drinking water at all times.",
      "Check the quality of fodder for mold or dust.",
      "Maintain a regular milking schedule.",
      "Keep the animal in a clean, stress-free environment."
    ],
    redFlags: [
      "Milk contains blood or flakes",
      "Udder is hot, swollen, or painful to touch",
      "Animal has a high fever"
    ],
    whenToCallVet: "If the milk yield doesn't improve in 24 hours or if any red flags are present.",
    source: "NDDB - National Dairy Development Board",
    lastVerified: "2024-03-15",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },
  {
    id: "dairy-mastitis",
    animal: "Dairy cattle and buffalo",
    topic: "Health problem",
    issue: "Swollen udder",
    signs: ["Hardness in one or more quarters of the udder", "Swelling and redness", "Milk is watery or contains clots"],
    basicCare: [
      "Practice clean milking techniques.",
      "Wash the udder with clean water before and after milking.",
      "Milk the affected quarter last and discard that milk.",
      "Keep the floor dry and clean."
    ],
    redFlags: [
      "Animal refuses to let you touch the udder due to pain",
      "Pus or blood in milk",
      "High body temperature and loss of appetite"
    ],
    whenToCallVet: "Immediately. Mastitis can spread quickly and permanently damage the udder.",
    source: "IVRI - Indian Veterinary Research Institute",
    lastVerified: "2024-03-10",
    relatedSchemes: ["nadcp"],
  },
  {
    id: "dairy-lameness",
    animal: "Dairy cattle and buffalo",
    topic: "Health problem",
    issue: "Lameness",
    signs: ["Difficulty in walking or standing", "Resting one leg frequently", "Visible wounds or swelling in the hoof area"],
    basicCare: [
      "Keep the animal on a dry, non-slippery floor.",
      "Clean the hoof area with clean water.",
      "Check for stones or sharp objects stuck in the hoof.",
      "Avoid making the animal walk long distances."
    ],
    redFlags: [
      "Animal is unable to stand up",
      "Deep wounds with foul smell",
      "Severe swelling reaching above the hoof"
    ],
    whenToCallVet: "If the animal is unable to stand or if the wound looks deep and infected.",
    source: "TANUVAS - Tamil Nadu Veterinary and Animal Sciences University",
    lastVerified: "2024-03-05",
    relatedSchemes: ["livestock-insurance"],
  },
  {
    id: "dairy-calving",
    animal: "Dairy cattle and buffalo",
    topic: "Breeding and delivery",
    issue: "Difficult calving",
    signs: ["Prolonged labor (more than 2-3 hours)", "Animal appearing extremely exhausted", "Part of the calf is visible but not progressing"],
    basicCare: [
      "Provide a clean, quiet, and well-bedded area for calving.",
      "Monitor from a distance to avoid stressing the animal.",
      "Ensure the mother has access to water after delivery."
    ],
    redFlags: [
      "Water bag has burst but no calf appears within 2 hours",
      "Only the tail or one leg is visible",
      "Severe bleeding from the birth canal"
    ],
    whenToCallVet: "Immediately if labor is prolonged or if the calf's position seems abnormal.",
    source: "GADVASU - Guru Angad Dev Veterinary and Animal Sciences University",
    lastVerified: "2024-03-01",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },

  // Poultry
  {
    id: "poultry-sudden-death",
    animal: "Poultry",
    topic: "Health problem",
    issue: "Sudden deaths",
    signs: ["Multiple birds dying within a short period", "Birds appearing sleepy or lethargic before death", "Blue discoloration of combs and wattles"],
    basicCare: [
      "Isolate the healthy birds from the sick ones immediately.",
      "Clean and disinfect the entire poultry shed.",
      "Change the water and feed immediately.",
      "Restrict entry of outsiders into the farm."
    ],
    redFlags: [
      "High mortality rate (more than 5% in a day)",
      "Swelling of the head and neck",
      "Greenish-yellow diarrhea"
    ],
    whenToCallVet: "Immediately. This could be a sign of a highly contagious disease like Bird Flu or Ranikhet.",
    source: "CPDO - Central Poultry Development Organization",
    lastVerified: "2024-02-25",
    relatedSchemes: ["nlm"],
  },
  {
    id: "poultry-egg-drop",
    animal: "Poultry",
    topic: "Productivity and income",
    issue: "Drop in egg laying",
    signs: ["Significant reduction in daily egg count", "Thin-shelled or misshapen eggs", "Birds losing feathers excessively"],
    basicCare: [
      "Ensure the feed has adequate calcium and protein.",
      "Provide 14-16 hours of light (natural + artificial).",
      "Reduce stress by avoiding overcrowding.",
      "Check for external parasites like mites."
    ],
    redFlags: [
      "Total stop in egg production",
      "Birds showing respiratory distress (gaping or sneezing)",
      "Paralysis of legs or wings"
    ],
    whenToCallVet: "If production drops by more than 20% over 3 days or if respiratory signs appear.",
    source: "ICAR-Directorate of Poultry Research",
    lastVerified: "2024-02-20",
    relatedSchemes: ["kcc-ah"],
  },

  // Goats
  {
    id: "goat-diarrhoea",
    animal: "Goats",
    topic: "Health problem",
    issue: "Diarrhoea in kids",
    signs: ["Watery or loose stools", "Kid appearing weak and dehydrated", "Sunken eyes"],
    basicCare: [
      "Keep the kid warm and dry.",
      "Ensure the kid continues to drink milk or ORS (Oral Rehydration Solution).",
      "Keep the mother's udder clean.",
      "Clean the bedding area frequently."
    ],
    redFlags: [
      "Blood in stools",
      "Kid is too weak to stand or suckle",
      "Very cold body temperature"
    ],
    whenToCallVet: "If the kid is unable to suckle or if the diarrhoea persists for more than 12 hours.",
    source: "CIRG - Central Institute for Research on Goats",
    lastVerified: "2024-02-15",
    relatedSchemes: ["nlm"],
  },
  {
    id: "goat-bloat",
    animal: "Goats",
    topic: "Health problem",
    issue: "Bloating",
    signs: ["Left side of the abdomen is swollen and tight like a drum", "Animal is restless and kicking at its belly", "Difficulty in breathing"],
    basicCare: [
      "Stop feeding green fodder or grains immediately.",
      "Make the animal walk slowly.",
      "Keep the animal's head at a higher level than the body."
    ],
    redFlags: [
      "Severe respiratory distress",
      "Animal collapses or is unable to walk",
      "Abdomen is extremely distended and hard"
    ],
    whenToCallVet: "Immediately. Bloat can be fatal within a few hours if not treated.",
    source: "ICAR-Central Institute for Research on Goats",
    lastVerified: "2024-02-10",
    relatedSchemes: ["livestock-insurance"],
  }
];
