export interface Practice {
  id: string;
  title: string;
  category: "Community and cooperative models" | "Soil and water" | "Natural farming" | "Livestock practices";
  regions: ("India" | "Nordic" | "Other")[];
  summary: string;
  whereUsed: string;
  indianExample?: string;
  benefits: string[];
  requirements: {
    land: string;
    money: string;
    groupSize: string;
    time: string;
  };
  limits: string[];
  source: string;
  lastVerified: string;
  relatedSchemes: string[];
}

export const practices: Practice[] = [
  {
    id: "summer-pastures",
    title: "Shared Summer Pastures (Seter/Fäbod)",
    category: "Community and cooperative models",
    regions: ["Nordic"],
    summary: "A traditional Nordic practice where livestock are moved to mountain pastures during summer, allowing valley fields to grow winter fodder. This is a form of transhumance that utilizes natural resources efficiently.",
    whereUsed: "Common in Norway (Seter) and Sweden (Fäbod) for centuries. Farmers share common grazing lands and sometimes management duties.",
    benefits: [
      "Saves valley land for winter crop production.",
      "Provides high-quality natural grazing for animals.",
      "Maintains mountain biodiversity."
    ],
    requirements: {
      land: "Access to upland or mountain grazing areas.",
      money: "Low - primarily labor-intensive.",
      groupSize: "Small groups of farmers or families.",
      time: "Seasonal (3-4 months during summer)."
    },
    limits: [
      "Requires seasonal movement of animals.",
      "Vulnerable to changes in mountain climate.",
      "Requires knowledge of mountain terrain and predators."
    ],
    source: "NIBIO - Norwegian Institute of Bioeconomy Research",
    lastVerified: "2024-03-20",
    relatedSchemes: [],
  },
  {
    id: "village-commons",
    title: "Village Grazing Commons (Gochar)",
    category: "Community and cooperative models",
    regions: ["India"],
    summary: "Traditional community-managed grazing lands reserved for the village's livestock. These are essential for landless or small-scale farmers to sustain their cattle.",
    whereUsed: "Found across many Indian states, especially in Rajasthan, Gujarat, and Madhya Pradesh.",
    indianExample: "The 'Gochar' lands in Rajasthan, where local Panchayats manage grazing rights.",
    benefits: [
      "Reduces cost of feeding for small farmers.",
      "Supports local livestock breeds.",
      "Promotes community cooperation in resource management."
    ],
    requirements: {
      land: "Community-owned village land.",
      money: "Nil - relies on community management.",
      groupSize: "Entire village or neighborhood.",
      time: "Year-round management."
    },
    limits: [
      "Encroachment on common lands is a major risk.",
      "Overgrazing if not managed properly by the community.",
      "Declining quality of forage due to lack of investment."
    ],
    source: "Foundation for Ecological Security (FES)",
    lastVerified: "2024-03-15",
    relatedSchemes: ["nlm"],
  },
  {
    id: "dairy-cooperatives",
    title: "Dairy Cooperatives",
    category: "Community and cooperative models",
    regions: ["India", "Nordic"],
    summary: "A model where farmers pool their milk production to gain better bargaining power, access to processing, and fair prices. It connects small producers directly to large markets.",
    whereUsed: "Global, but highly successful in Denmark, Sweden, and India.",
    indianExample: "Amul (Gujarat Co-operative Milk Marketing Federation) is the world's largest farmer-owned cooperative.",
    benefits: [
      "Guaranteed market for milk.",
      "Fair and transparent pricing for farmers.",
      "Access to veterinary services and quality feed through the cooperative."
    ],
    requirements: {
      land: "Individual small holdings are sufficient.",
      money: "Small membership fee.",
      groupSize: "Large (hundreds to thousands of farmers).",
      time: "Long-term commitment."
    },
    limits: [
      "Requires strong local leadership and management.",
      "Needs reliable cold chain and transport infrastructure.",
      "Quality standards must be strictly followed by all members."
    ],
    source: "National Dairy Development Board (NDDB)",
    lastVerified: "2024-03-10",
    relatedSchemes: ["rashtriya-gokul-mission"],
  },
  {
    id: "rainwater-harvesting",
    title: "Rainwater Harvesting",
    category: "Soil and water",
    regions: ["India"],
    summary: "Collecting and storing rainwater for later use, especially for irrigation during dry periods. This can be done through farm ponds, check dams, or rooftop collection.",
    whereUsed: "Arid and semi-arid regions of India.",
    indianExample: "The 'Johads' of Rajasthan or farm ponds (Shet Tale) in Maharashtra.",
    benefits: [
      "Provides irrigation during dry spells.",
      "Recharges groundwater levels.",
      "Reduces soil erosion by slowing down runoff."
    ],
    requirements: {
      land: "Part of the farm for pond or storage structure.",
      money: "Moderate (for construction).",
      groupSize: "Individual or community.",
      time: "Preparation before monsoon."
    },
    limits: [
      "Depends on annual rainfall patterns.",
      "Storage structures require regular maintenance to prevent silting.",
      "Initial cost can be high for small farmers."
    ],
    source: "Central Ground Water Board (CGWB)",
    lastVerified: "2024-03-05",
    relatedSchemes: ["pmksy"],
  },
  {
    id: "crop-rotation",
    title: "Crop Rotation",
    category: "Natural farming",
    regions: ["India", "Nordic", "Other"],
    summary: "Growing different types of crops in the same area in sequential seasons. This helps in maintaining soil fertility and breaking pest cycles.",
    whereUsed: "Worldwide standard practice for sustainable agriculture.",
    indianExample: "Rotating Paddy (Kharif) with Gram or Mustard (Rabi) in North India.",
    benefits: [
      "Improves soil structure and nutrient levels.",
      "Reduces pest and disease build-up.",
      "Provides diverse income sources for the farmer."
    ],
    requirements: {
      land: "No extra land needed.",
      money: "Low - involves changing seed types.",
      groupSize: "Individual.",
      time: "Seasonal planning."
    },
    limits: [
      "Requires knowledge of compatible crop sequences.",
      "Market demand for secondary crops might be lower.",
      "Some rotations may require different equipment."
    ],
    source: "ICAR - Indian Agricultural Research Institute",
    lastVerified: "2024-03-01",
    relatedSchemes: ["soil-health-card"],
  }
];
