import { FacilityItem, GalleryItem, InstagramPost, MembershipPlan, OwnerMediaConfig } from '../types';

export const GYM_DETAILS = {
  name: "MTS GYM",
  tagline: "Eat. Sleep. Lift. Repeat.",
  location: "Near Shagun Vatika, Shivpuri, Madhya Pradesh, India",
  fullAddress: "Near Shagun Vatika, Circular Road / Jhansi Road Area, Shivpuri, Madhya Pradesh 473551, India",
  phone: "7047767275",
  formattedPhone: "+91 70477 67275",
  owners: [
    { name: "Manish T. Sharma", role: "Co-Founder & Head Strength Coach" },
    { name: "Tamanna Ish1422", role: "Co-Founder & Fitness Director" }
  ],
  instagram: {
    handle: "@mts.gym",
    url: "https://www.instagram.com/mts.gym/",
    postsCount: "268+",
    followersCount: "600+",
  },
  googleMaps: {
    url: "https://maps.app.goo.gl/26Rd979a8sNcro6N7?g_st=ic",
    embedQuery: "MTS+GYM+Near+Shagun+Vatika+Shivpuri+Madhya+Pradesh",
  },
  whatsapp: {
    number: "917047767275",
    defaultMessage: "Hi MTS GYM, I’m interested in joining the gym. Could you please share the membership details?",
  }
};

export const DEFAULT_MEDIA_CONFIG: OwnerMediaConfig = {
  heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
  brandIntroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
  motivationImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1920&q=80",
  galleryImages: [
    {
      id: "gal-1",
      title: "Heavy Deadlift & Powerlifting Station",
      category: "strength",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-2",
      title: "Dumbbell & Free Weight Rack Range",
      category: "equipment",
      url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-3",
      title: "Community Group Workout & Energy",
      category: "community",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-4",
      title: "Bio-mechanical Pin-Loaded Cable Rows",
      category: "equipment",
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-5",
      title: "Core & Athletic Conditioning",
      category: "lifestyle",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "gal-6",
      title: "Gym Anniversary Celebration & Trophies",
      category: "community",
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
    },
  ],
  communityImages: [
    {
      id: "comm-1",
      title: "Annual Gym Power Challenge & Members Meet",
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "comm-2",
      title: "Daily Evening Brotherhood & Mentorship",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "comm-3",
      title: "Transformation Milestones & Personal PRs",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    }
  ],
  instagramImages: [
    {
      id: "ig-1",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      caption: "Eat. Sleep. Lift. Repeat. Another intense evening batch smashing leg day at MTS GYM! #MTSGym #ShivpuriFitness #Strength",
      likes: 184
    },
    {
      id: "ig-2",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      caption: "Heavy deadlifts require heavy discipline. Form, grit, and progressive overload. #DisciplineOverEverything #ShivpuriGym",
      likes: 219
    },
    {
      id: "ig-3",
      url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      caption: "Our premium free-weights section ready for the morning 5:30 AM grinders. #MTSStrength #MorningBatch",
      likes: 156
    },
    {
      id: "ig-4",
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
      caption: "Celebrating gym milestones with the MTS family. The bond we forge under the iron lasts for life. #MTSAnniversary",
      likes: 312
    },
    {
      id: "ig-5",
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      caption: "New equipment additions dialed in for maximum biomechanical muscle activation. Train smarter, train harder. #MTSGym",
      likes: 198
    },
    {
      id: "ig-6",
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
      caption: "Discipline is choosing between what you want now and what you want most. See you on the floor tonight! #Shivpuri",
      likes: 247
    }
  ]
};

export const WHY_MTS_ITEMS = [
  {
    number: "01",
    title: "STRENGTH",
    description: "Train with purpose and progressively build raw strength using Olympic-standard bars, power cages, and progressive overload protocols.",
    tag: "Progressive Overload"
  },
  {
    number: "02",
    title: "DISCIPLINE",
    description: "Consistency creates results. Show up and put in the work. A zero-distraction atmosphere dedicated to serious fitness goals.",
    tag: "Daily Consistency"
  },
  {
    number: "03",
    title: "COMMUNITY",
    description: "Train alongside people who motivate you to become better. A tight-knit brotherhood and sisterhood pushing past their limits together.",
    tag: "Iron Brotherhood"
  },
  {
    number: "04",
    title: "RESULTS",
    description: "Focus on tangible progress, physical performance and sustainable long-term transformation tailored to your personal biomechanics.",
    tag: "Measurable Impact"
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Built for serious lifters with Olympic barbells, heavy-duty squat racks, deadlift platforms, and competition bumper plates.",
    features: ["Olympic barbells & plates", "Reinforced drop platforms", "Heavy power cages & safeties", "Form mentoring"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cardio-zone",
    title: "Cardio",
    description: "High-performance cardiovascular conditioning zone to burn fat, build heart health, and build unbreakable athletic stamina.",
    features: ["Commercial treadmills", "Cross-trainers & ellipticals", "Spin bikes & interval rowers", "Target heart-rate tracking"],
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "free-weights",
    title: "Free Weights",
    description: "Comprehensive dumbbell ranges and multi-angle adjustable incline/decline benches engineered for unrestricted muscle hypertrophy.",
    features: ["Dumbbells up to 40+ kg", "Flat, incline & decline benches", "Preacher curl stations", "EZ-curl & Olympic bars"],
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "modern-equipment",
    title: "Modern Equipment",
    description: "Bio-mechanically sound selectorized and plate-loaded machines providing optimal resistance curves while safeguarding joints.",
    features: ["Dual cable crossovers", "Leg press & hack squat", "Lat pulldown & seated rows", "Pec dec & rear delt fly"],
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Dynamic agility, battle ropes, kettlebells, and bodyweight conditioning setups for explosive power and everyday athletic stamina.",
    features: ["Heavy battle ropes", "Cast iron kettlebell sets", "Plyometric boxes", "Suspension & core stations"],
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-guidance",
    title: "Personal Fitness Guidance",
    description: "Direct supervision from experienced founders and trainers, ensuring correct lifting technique, injury prevention, and diet coaching.",
    features: ["Custom workout schedules", "Diet & protein guidance", "Progressive form checks", "Target milestone tracking"],
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
  }
];

export const BATCH_SCHEDULES = [
  {
    name: "Morning Morning Grind",
    timeSlot: "05:30 AM – 10:30 AM",
    type: "All Batches Open",
    recommendedFor: "Early risers, students, business professionals"
  },
  {
    name: "Evening Power Session",
    timeSlot: "04:30 PM – 10:00 PM",
    type: "High Energy & Strength",
    recommendedFor: "Office goers, intense strength lifters, community workouts"
  },
  {
    name: "Sunday Recovery & Open Gym",
    timeSlot: "07:00 AM – 12:00 PM",
    type: "Mobility & Conditioning",
    recommendedFor: "Form corrections, mobility work, weekly review"
  }
];

export const MEMBERSHIP_TIERS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Starter",
    period: "1 Month",
    highlight: "Great for building your routine",
    features: [
      "Full gym equipment & weights access",
      "Morning & evening batch flexibility",
      "Initial fitness assessment & induction",
      "Locker & changing room facility",
    ]
  },
  {
    id: "quarterly",
    name: "3-Month Commitment",
    period: "3 Months",
    recommended: true,
    highlight: "Most popular for visible muscle & fat loss results",
    features: [
      "Complete access to all strength & cardio zones",
      "Customized workout split guideline",
      "Dietary & macro consultation",
      "Bi-weekly progress check-ins",
      "Discounted trainer orientation"
    ]
  },
  {
    id: "annual",
    name: "Annual Iron Elite",
    period: "12 Months",
    highlight: "Dedicated to the true lifestyle transformation",
    features: [
      "Maximum cost savings for serious lifters",
      "Priority equipment & training slots",
      "Dedicated diet & supplementation chart",
      "Free MTS GYM community training perks",
      "Guest passes for workout partners"
    ]
  }
];
