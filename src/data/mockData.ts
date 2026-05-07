// ═══════════════════════════════════════════════════════
// WAYFIND — Mock Data
// ═══════════════════════════════════════════════════════

// ── Upcoming Trips ───────────────────────────────────
export const upcomingTrips = [
  {
    id: 1,
    name: "Goa Getaway",
    destination: "North Goa, India",
    startDate: "2026-05-15",
    endDate: "2026-05-20",
    daysUntil: 14,
    cover: "linear-gradient(160deg, #7C3A00, #C4621A)",
    travelers: ["Neha Singh", "Priya", "Arjun"],
  },
  {
    id: 2,
    name: "Coorg Escape",
    destination: "Coorg, Karnataka",
    startDate: "2026-06-21",
    endDate: "2026-06-24",
    daysUntil: 45,
    cover: "linear-gradient(160deg, #0D2A0D, #1A5C1A)",
    travelers: ["Neha Singh"],
  },
  {
    id: 3,
    name: "Rajasthan Ride",
    destination: "Jaipur, Rajasthan",
    startDate: "2026-08-05",
    endDate: "2026-08-12",
    daysUntil: 90,
    cover: "linear-gradient(160deg, #3D2A00, #8C6A00)",
    travelers: ["Neha Singh", "Neha"],
  },
];

// ── Recommended Itineraries ──────────────────────────
export const recommendedItineraries = [
  {
    id: 1,
    traveler: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/40?img=1" },
    destination: "Goa",
    duration: "5 days",
    tags: ["Solo", "Budget", "Beach"],
    rating: 4.9,
    clones: 189,
    description: "North Goa beaches by day, Anjuna flea market, sunset at Vagator, and the best fish thali you'll ever eat.",
  },
  {
    id: 2,
    traveler: { name: "Arjun Mehta", avatar: "https://i.pravatar.cc/40?img=11" },
    destination: "Goa",
    duration: "7 days",
    tags: ["Couple", "Cultural", "Nature"],
    rating: 4.8,
    clones: 234,
    description: "South Goa hidden beaches, Dudhsagar falls day trip, spice plantation tour and Old Goa heritage walk.",
  },
  {
    id: 3,
    traveler: { name: "Sneha Kapoor", avatar: "https://i.pravatar.cc/40?img=5" },
    destination: "Goa",
    duration: "4 days",
    tags: ["Group", "Nightlife", "Adventure"],
    rating: 4.7,
    clones: 156,
    description: "Party circuit: Tito's Lane, Curlies, Club Cubana, Baga beach sunrise. Sleep late. Live fully.",
  },
];

// ── Plan Page — Day Itinerary ────────────────────────
export const tripItinerary = {
  tripName: "Goa Getaway",
  destination: "North Goa, India",
  dateRange: "May 15 – May 20, 2025",
  days: [
    {
      day: 1,
      date: "May 15",
      title: "Arrival & Beach Setup",
      blocks: {
        morning: [
          { time: "09:00", activity: "Land at Goa Airport (Dabolim / Mopa)", type: "transport", icon: "✈️" },
          { time: "11:00", activity: "Check-in at beachside shack hotel in Calangute", type: "accommodation", icon: "🏨" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Fisherman's Wharf, Cavelossim", type: "food", icon: "🐟" },
          { time: "15:30", activity: "Walk Calangute Beach", type: "leisure", icon: "🏖️" },
        ],
        evening: [
          { time: "18:00", activity: "Sunset at Baga Beach", type: "leisure", icon: "🌅" },
          { time: "20:00", activity: "Dinner at Infantaria Pastry Shop & Restaurant", type: "food", icon: "🍽️" },
        ],
      },
    },
    {
      day: 2,
      date: "May 16",
      title: "North Goa Deep Dive",
      blocks: {
        morning: [
          { time: "09:30", activity: "Anjuna Flea Market", type: "leisure", icon: "🛍️" },
          { time: "11:30", activity: "Fort Aguada", type: "sightseeing", icon: "🏰" },
        ],
        afternoon: [
          { time: "13:00", activity: "Fish Thali lunch at a local beach shack", type: "food", icon: "🍛" },
          { time: "15:00", activity: "Chapora Fort (Dil Chahta Hai viewpoint)", type: "sightseeing", icon: "📸" },
        ],
        evening: [
          { time: "18:00", activity: "Vagator Beach sunset", type: "leisure", icon: "🌅" },
          { time: "21:00", activity: "Night at Tito's Lane, Baga", type: "adventure", icon: "🎉" },
        ],
      },
    },
    {
      day: 3,
      date: "May 17",
      title: "Panjim & Old Goa Heritage",
      blocks: {
        morning: [
          { time: "09:30", activity: "Fontainhas Heritage Walk", type: "sightseeing", icon: "🏘️" },
          { time: "11:30", activity: "Basilica of Bom Jesus", type: "sightseeing", icon: "⛪" },
        ],
        afternoon: [
          { time: "13:30", activity: "Lunch at Mum's Kitchen, Panjim", type: "food", icon: "🍤" },
          { time: "15:30", activity: "Mandovi River Cruise", type: "leisure", icon: "🚢" },
        ],
        evening: [
          { time: "19:00", activity: "Dinner at a floating restaurant", type: "food", icon: "🍽️" },
          { time: "21:00", activity: "Casino Pride", type: "adventure", icon: "🎰" },
        ],
      },
    },
    {
      day: 4,
      date: "May 18",
      title: "South Goa Serenity",
      blocks: {
        morning: [
          { time: "09:00", activity: "Drive to South Goa", type: "transport", icon: "🚗" },
          { time: "10:30", activity: "Colva Beach relaxation", type: "leisure", icon: "🌴" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Dropadi, Palolem", type: "food", icon: "🍲" },
          { time: "15:00", activity: "Palolem Beach & Kayaking", type: "adventure", icon: "🛶" },
        ],
        evening: [
          { time: "17:30", activity: "Cabo de Rama Fort sunset", type: "sightseeing", icon: "🌅" },
          { time: "20:00", activity: "Quiet dinner at Agonda Beach", type: "food", icon: "🍷" },
        ],
      },
    },
  ],
};

// ── Clone-able Itineraries (for modal) ───────────────
export const cloneableItineraries = [
  {
    id: 1,
    traveler: { name: "Elena Rossi", avatar: "https://i.pravatar.cc/40?img=1" },
    destination: "Goa",
    duration: "7 days",
    style: "Cultural",
    highlights: ["Colosseum at sunrise", "Pasta-making class", "Trastevere food tour"],
    rating: 4.8,
  },
  {
    id: 2,
    traveler: { name: "Marco Bianchi", avatar: "https://i.pravatar.cc/40?img=7" },
    destination: "Goa",
    duration: "5 days",
    style: "Budget",
    highlights: ["Free walking tour", "Street food only", "Ostia Antica day trip"],
    rating: 4.5,
  },
  {
    id: 3,
    traveler: { name: "Sakura Yamamoto", avatar: "https://i.pravatar.cc/40?img=9" },
    destination: "Tokyo",
    duration: "10 days",
    style: "Foodie",
    highlights: ["Tsukiji outer market", "Ramen alley crawl", "Depachika basement tour"],
    rating: 4.9,
  },
  {
    id: 4,
    traveler: { name: "Aisha Khan", avatar: "https://i.pravatar.cc/40?img=10" },
    destination: "Bali",
    duration: "8 days",
    style: "Wellness",
    highlights: ["Yoga retreat in Ubud", "Water temple ceremony", "Rice terrace meditation"],
    rating: 4.7,
  },
];

// ── Miss Predictor ───────────────────────────────────
export const missedPlaces = [
  {
    name: "Dudhsagar Falls",
    percent: 87,
    reason: "Travelers like you regretted not booking this day trip",
    avatars: ["https://i.pravatar.cc/24?img=11", "https://i.pravatar.cc/24?img=12", "https://i.pravatar.cc/24?img=13"],
  },
  {
    name: "Spice Plantation Tour",
    percent: 74,
    reason: "A half-day that most beach-focused travelers skip and regret",
    avatars: ["https://i.pravatar.cc/24?img=14", "https://i.pravatar.cc/24?img=15", "https://i.pravatar.cc/24?img=16"],
  },
  {
    name: "Old Goa Heritage Churches",
    percent: 61,
    reason: "Basilica of Bom Jesus — UNESCO site most first-timers skip",
    avatars: ["https://i.pravatar.cc/24?img=17", "https://i.pravatar.cc/24?img=18", "https://i.pravatar.cc/24?img=19"],
  },
];

// ── Local Events ─────────────────────────────────────
export const localEvents = [
  {
    id: 1,
    name: "Goa Carnival",
    date: "May 16 - May 18",
    type: "Festival",
    location: "Panaji & Major Cities",
    description: "Four days of music, dance, and colorful parades led by King Momo.",
  },
  {
    id: 2,
    name: "Shigmo Festival",
    date: "May 19 - May 20",
    type: "Festival",
    location: "Across Goa",
    description: "Colorful street processions celebrating Goan Hindu traditions.",
  },
  {
    id: 3,
    name: "Saturday Night Market",
    date: "May 17",
    type: "Market",
    location: "Arpora",
    description: "Live music, global cuisine, and eclectic shopping under the stars.",
  },
];

// ── Navigate Page — Map Markers ──────────────────────
export const mapCenter: [number, number] = [15.4909, 73.8278]; // Goa (Panaji)

export const touristTraps = [
  {
    id: 1,
    position: [15.5553, 73.7517] as [number, number],
    name: "Overpriced Beach Shack",
    warning: "Tourist Trap — exorbitant drink prices and hidden service charges. 43 travelers warned.",
    reports: 43,
  },
  {
    id: 2,
    position: [15.3800, 73.8340] as [number, number],
    name: "Scam Taxi Stand",
    warning: "Scam — unmetered taxis charging 3x the normal rate. Use pre-paid counters. 67 travelers warned.",
    reports: 67,
  },
  {
    id: 3,
    position: [15.5833, 73.7417] as [number, number],
    name: "Fake Gem Stones",
    warning: "Scam — aggressive vendors selling colored glass as semi-precious stones. 91 travelers warned.",
    reports: 91,
  },
];

export const safetyZones = [
  { name: "Candolim Beach", daytime: "Safe", night: "Safe", soloWomen: "Generally safe", center: [15.5183, 73.7633] as [number, number] },
  { name: "Panjim (Fontainhas)", daytime: "Safe", night: "Moderate", soloWomen: "Safe", center: [15.4950, 73.8300] as [number, number] },
  { name: "Baga & Tito's Lane", daytime: "Moderate", night: "Caution", soloWomen: "Avoid late night alone due to rowdy crowds", center: [15.5553, 73.7517] as [number, number] },
  { name: "Anjuna / Vagator", daytime: "Safe", night: "Moderate", soloWomen: "Caution on isolated unlit roads", center: [15.5833, 73.7417] as [number, number] },
];

export const emergencyFacilities = [
  { id: 1, position: [15.4526, 73.8504] as [number, number], name: "Goa Medical College", type: "Hospital", phone: "0832 245 8700" },
  { id: 2, position: [15.4529, 73.8197] as [number, number], name: "Manipal Hospital", type: "Hospital", phone: "0832 245 1166" },
  { id: 3, position: [15.4909, 73.8278] as [number, number], name: "Panaji Police Station", type: "Police Station", phone: "100" },
  { id: 4, position: [15.5413, 73.7621] as [number, number], name: "Calangute Police", type: "Police Station", phone: "0832 227 8284" }
];

export const routeOptions = [
  {
    id: "A",
    label: "Route A — Faster",
    time: "18 min",
    type: "faster" as const,
    description: "CHOGM Road → Calangute Main Road. Heavy traffic but well-lit.",
    safety: "Moderate",
  },
  {
    id: "B",
    label: "Route B — Safer",
    time: "24 min",
    type: "safer" as const,
    description: "Saligao Village Route. Scenic, peaceful, lower traffic, local presence.",
    safety: "High",
  },
];

export const nearbyPlaces = [
  { name: "Vinayak Family Restaurant", type: "Restaurant", distance: "300m", rating: 4.6, icon: "🍛" },
  { name: "Fort Aguada", type: "Monument", distance: "2.5km", rating: 4.5, icon: "🏰" },
  { name: "Wellness Pharmacy", type: "Pharmacy", distance: "150m", rating: 4.1, icon: "💊" },
  { name: "Thivim Railway Station", type: "Transport", distance: "8km", rating: 3.9, icon: "🚂" },
  { name: "Cream Choc", type: "Dessert", distance: "600m", rating: 4.8, icon: "🍦" },
  { name: "Basilica of Bom Jesus", type: "Monument", distance: "4km", rating: 4.8, icon: "⛪" },
];

// ── Community Page — Questions ───────────────────────
export const communityQuestions = [
  {
    id: 1,
    destination: "Goa",
    question: "Is renting a scooter safe for a beginner? Or should I just use GoaMiles/taxis?",
    author: { name: "Ananya Sharma", avatar: "https://i.pravatar.cc/36?img=20" },
    timePosted: "2 hours ago",
    answers: 8,
    tags: ["Transport", "Safety"],
  },
  {
    id: 2,
    destination: "South Goa",
    question: "Best areas to stay in South Goa for a solo female traveler? Palolem vs Agonda?",
    author: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/36?img=21" },
    timePosted: "5 hours ago",
    answers: 12,
    tags: ["Solo", "Safety"],
  },
  {
    id: 3,
    destination: "North Goa",
    question: "Is Tito's Lane worth it for nightlife or are there better clubs around Vagator?",
    author: { name: "David Park", avatar: "https://i.pravatar.cc/36?img=22" },
    timePosted: "1 day ago",
    answers: 15,
    tags: ["Nightlife", "Tips"],
  },
  {
    id: 4,
    destination: "Goa",
    question: "Hidden gem authentic fish thali spots near Panjim? Tired of tourist trap restaurants.",
    author: { name: "Ravi Kumar", avatar: "https://i.pravatar.cc/36?img=23" },
    timePosted: "3 days ago",
    answers: 21,
    tags: ["Food", "Local"],
  },
];

// ── Community Page — Trip Capsules ───────────────────
export const tripCapsules = [
  {
    id: 1,
    traveler: { name: "Priya Mehta", avatar: "https://i.pravatar.cc/40?img=25" },
    destination: "North Goa",
    dates: "March 2026",
    bestMoment: "Stumbling upon a tiny beach shack in Morjim at golden hour. No tourists. Just me, some Kingfisher, and the waves.",
    oneRegret: "Skipping the spice plantation tour — heard great things later. Book it!",
    photo: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    traveler: { name: "James Liu", avatar: "https://i.pravatar.cc/40?img=26" },
    destination: "Panjim, Goa",
    dates: "January 2026",
    bestMoment: "Late afternoon walk through Fontainhas. The Portuguese architecture is incredible. Best photo walk of my life.",
    oneRegret: "Not renting a scooter earlier. Taxis are way too expensive everywhere in Goa.",
    photo: "https://images.unsplash.com/photo-1623880536486-068d184fc06f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    traveler: { name: "Aisha Patel", avatar: "https://i.pravatar.cc/40?img=27" },
    destination: "South Goa",
    dates: "February 2026",
    bestMoment: "Sunset kayaking near Palolem. The water was so calm and the sunset view from the ocean reduced me to tears.",
    oneRegret: "Spending too many days in crowded Baga. South Goa deserves much more time.",
    photo: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
  },
];

// ── Money Page — Budget Pulse ────────────────────────
export const budgetData = {
  destination: "Goa, India",
  currency: "₹",
  avgDailySpend: 4200,
  yourBudget: 3800,
  categories: [
    { category: "Food", listed: 1200, actual: 1500, icon: "🍝" },
    { category: "Transport", listed: 400, actual: 350, icon: "🚇" },
    { category: "Entry Fees", listed: 800, actual: 900, icon: "🎟️" },
    { category: "Accommodation", listed: 1400, actual: 1450, icon: "🏨" },
  ],
};

// ── Money Page — Group Expense Split ─────────────────
export const expenseData = {
  tripName: "Goa Getaway",
  members: ["Neha Singh", "Priya", "Arjun"],
  currentUser: "Neha Singh", // Added current user context
  expenses: [
    { id: 1, day: 1, date: "Today, 1:30 PM", category: "Food", paidBy: "Neha Singh", description: "Lunch at Fisherman's Wharf", amount: 3200, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
    { id: 2, day: 1, date: "Today, 8:45 PM", category: "Drinks", paidBy: "Priya", description: "Drinks at Tito's Lane", amount: 4500, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
    { id: 3, day: 2, date: "Yesterday, 10:00 AM", category: "Transport", paidBy: "Arjun", description: "Scooter Rentals (2 Activas)", amount: 1200, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
    { id: 4, day: 2, date: "Yesterday, 11:30 AM", category: "Transport", paidBy: "Neha Singh", description: "GoaMiles Airport Taxi", amount: 1800, splitAmong: ["Neha Singh", "Priya"] },
    { id: 5, day: 3, date: "2 days ago", category: "Entertainment", paidBy: "Priya", description: "Casino Pride Entry", amount: 7500, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
    { id: 6, day: 3, date: "2 days ago", category: "Food", paidBy: "Arjun", description: "Fish Thali at Vinayak", amount: 1500, splitAmong: ["Neha Singh", "Arjun"] },
    { id: 7, day: 4, date: "3 days ago", category: "Activity", paidBy: "Neha Singh", description: "Dudhsagar Jeep Safari", amount: 2400, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
    { id: 8, day: 4, date: "3 days ago", category: "Drinks", paidBy: "Priya", description: "Sunset beers at Palolem", amount: 1600, splitAmong: ["Neha Singh", "Priya", "Arjun"] },
  ],
  balances: [
    { name: "Neha Singh", owes: 1050, owedBy: "Priya" },
    { name: "Arjun", owes: 4850, owedBy: "Priya" },
  ],
};
