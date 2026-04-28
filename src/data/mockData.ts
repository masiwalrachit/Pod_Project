// ═══════════════════════════════════════════════════════
// WAYFIND — Mock Data
// ═══════════════════════════════════════════════════════

// ── Upcoming Trips ───────────────────────────────────
export const upcomingTrips = [
  {
    id: 1,
    name: "Roman Holiday",
    destination: "Rome, Italy",
    startDate: "2026-05-12",
    endDate: "2026-05-19",
    daysUntil: 21,
    cover: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop",
    travelers: ["Rahul", "Priya", "Arjun"],
  },
  {
    id: 2,
    name: "Bali Bliss",
    destination: "Bali, Indonesia",
    startDate: "2026-07-01",
    endDate: "2026-07-10",
    daysUntil: 71,
    cover: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
    travelers: ["Rahul", "Neha"],
  },
  {
    id: 3,
    name: "Tokyo Drift",
    destination: "Tokyo, Japan",
    startDate: "2026-09-15",
    endDate: "2026-09-22",
    daysUntil: 147,
    cover: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
    travelers: ["Rahul"],
  },
];

// ── Recommended Itineraries ──────────────────────────
export const recommendedItineraries = [
  {
    id: 1,
    traveler: { name: "Elena Rossi", avatar: "https://i.pravatar.cc/40?img=1" },
    destination: "Rome, Italy",
    duration: "7 days",
    tags: ["Solo", "Cultural", "Budget"],
    rating: 4.8,
    clones: 234,
    description: "Walk through ancient ruins, pasta-crawl Trastevere, and catch sunset at Pincio Hill.",
  },
  {
    id: 2,
    traveler: { name: "Kenji Tanaka", avatar: "https://i.pravatar.cc/40?img=3" },
    destination: "Tokyo, Japan",
    duration: "10 days",
    tags: ["Foodie", "Adventure", "Luxury"],
    rating: 4.9,
    clones: 189,
    description: "Tsukiji at dawn, Akihabara by day, Shinjuku Golden Gai by night. The ultimate Tokyo deep-dive.",
  },
  {
    id: 3,
    traveler: { name: "Maya Patel", avatar: "https://i.pravatar.cc/40?img=5" },
    destination: "Bali, Indonesia",
    duration: "8 days",
    tags: ["Wellness", "Solo", "Nature"],
    rating: 4.7,
    clones: 312,
    description: "Ubud rice terraces, sunrise at Mt. Batur, and healing ceremonies in Tirta Empul.",
  },
];

// ── Plan Page — Day Itinerary ────────────────────────
export const tripItinerary = {
  tripName: "Roman Holiday",
  destination: "Rome, Italy",
  dateRange: "May 12 – May 19, 2026",
  days: [
    {
      day: 1,
      date: "May 12",
      title: "Arrival & First Impressions",
      blocks: {
        morning: [
          { time: "09:00", activity: "Land at Fiumicino Airport", type: "transport", icon: "✈️" },
          { time: "10:30", activity: "Check-in at Hotel Raphael", type: "accommodation", icon: "🏨" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Roscioli", type: "food", icon: "🍝" },
          { time: "15:00", activity: "Walk through Piazza Navona", type: "sightseeing", icon: "🏛️" },
        ],
        evening: [
          { time: "19:00", activity: "Dinner at Da Enzo al 29", type: "food", icon: "🍷" },
          { time: "21:00", activity: "Gelato walk along Tiber River", type: "leisure", icon: "🍦" },
        ],
      },
    },
    {
      day: 2,
      date: "May 13",
      title: "Ancient Rome",
      blocks: {
        morning: [
          { time: "08:30", activity: "Colosseum guided tour", type: "sightseeing", icon: "🏟️" },
          { time: "11:00", activity: "Roman Forum exploration", type: "sightseeing", icon: "🏛️" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Armando al Pantheon", type: "food", icon: "🍝" },
          { time: "14:30", activity: "Pantheon visit", type: "sightseeing", icon: "⛪" },
          { time: "16:00", activity: "Coffee at Sant'Eustachio Il Caffè", type: "food", icon: "☕" },
        ],
        evening: [
          { time: "19:30", activity: "Dinner in Trastevere", type: "food", icon: "🍕" },
        ],
      },
    },
    {
      day: 3,
      date: "May 14",
      title: "Vatican & Art",
      blocks: {
        morning: [
          { time: "08:00", activity: "Vatican Museums (early entry)", type: "sightseeing", icon: "🎨" },
          { time: "10:30", activity: "Sistine Chapel", type: "sightseeing", icon: "⛪" },
        ],
        afternoon: [
          { time: "12:30", activity: "St. Peter's Basilica", type: "sightseeing", icon: "⛪" },
          { time: "14:00", activity: "Lunch at Bonci Pizzarium", type: "food", icon: "🍕" },
          { time: "16:00", activity: "Castel Sant'Angelo visit", type: "sightseeing", icon: "🏰" },
        ],
        evening: [
          { time: "19:00", activity: "Sunset from Pincio Terrace", type: "leisure", icon: "🌅" },
          { time: "20:30", activity: "Dinner at Felice a Testaccio", type: "food", icon: "🍝" },
        ],
      },
    },
    {
      day: 4,
      date: "May 15",
      title: "Off the Beaten Path",
      blocks: {
        morning: [
          { time: "09:00", activity: "Appian Way bike ride", type: "adventure", icon: "🚲" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Mercato Testaccio", type: "food", icon: "🥗" },
          { time: "15:00", activity: "Aventine Hill & Keyhole", type: "sightseeing", icon: "🔑" },
        ],
        evening: [
          { time: "18:30", activity: "Aperitivo at Salotto 42", type: "food", icon: "🍸" },
          { time: "20:00", activity: "Night walk to Trevi Fountain", type: "leisure", icon: "⛲" },
        ],
      },
    },
    {
      day: 5,
      date: "May 16",
      title: "Day Trip — Tivoli",
      blocks: {
        morning: [
          { time: "08:00", activity: "Train to Tivoli", type: "transport", icon: "🚂" },
          { time: "09:30", activity: "Villa d'Este gardens", type: "sightseeing", icon: "🌿" },
        ],
        afternoon: [
          { time: "13:00", activity: "Lunch at Sibilla restaurant", type: "food", icon: "🍝" },
          { time: "15:00", activity: "Hadrian's Villa ruins", type: "sightseeing", icon: "🏛️" },
        ],
        evening: [
          { time: "18:00", activity: "Return to Rome", type: "transport", icon: "🚂" },
          { time: "20:00", activity: "Dinner at Pizzeria Da Remo", type: "food", icon: "🍕" },
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
    destination: "Rome",
    duration: "7 days",
    style: "Cultural",
    highlights: ["Colosseum at sunrise", "Pasta-making class", "Trastevere food tour"],
    rating: 4.8,
  },
  {
    id: 2,
    traveler: { name: "Marco Bianchi", avatar: "https://i.pravatar.cc/40?img=7" },
    destination: "Rome",
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
    name: "Borghese Gallery",
    percent: 84,
    reason: "Travelers like you regretted skipping this",
    avatars: ["https://i.pravatar.cc/24?img=11", "https://i.pravatar.cc/24?img=12", "https://i.pravatar.cc/24?img=13"],
  },
  {
    name: "Trastevere Food Tour",
    percent: 72,
    reason: "A must-do for food lovers visiting Rome",
    avatars: ["https://i.pravatar.cc/24?img=14", "https://i.pravatar.cc/24?img=15", "https://i.pravatar.cc/24?img=16"],
  },
  {
    name: "Ostia Antica",
    percent: 68,
    reason: "Less crowded than Pompeii, equally stunning",
    avatars: ["https://i.pravatar.cc/24?img=17", "https://i.pravatar.cc/24?img=18", "https://i.pravatar.cc/24?img=19"],
  },
];

// ── Local Events ─────────────────────────────────────
export const localEvents = [
  {
    id: 1,
    name: "Festa dei Fiori di Roma",
    date: "May 13–14, 2026",
    type: "Festival",
    location: "Spanish Steps area",
    description: "Annual flower festival with stunning floral displays cascading down the Steps.",
  },
  {
    id: 2,
    name: "Mercato Monti",
    date: "Every Sunday",
    type: "Market",
    location: "Via Leonina 46, Monti",
    description: "Indie vintage market with local designers, vinyl, and artisan crafts.",
  },
  {
    id: 3,
    name: "Open Air Cinema at Isola Tiberina",
    date: "May 15, 2026",
    type: "Cinema",
    location: "Tiber Island",
    description: "Classic Italian films screened under the stars on the Tiber Island.",
  },
];

// ── Navigate Page — Map Markers ──────────────────────
export const mapCenter: [number, number] = [41.9028, 12.4964]; // Rome

export const touristTraps = [
  {
    id: 1,
    position: [41.9009, 12.4833] as [number, number],
    name: "Overpriced Gelato Shop",
    warning: "Tourist Trap — overpriced gelato shop, 43 travelers warned. Avg price: €7 vs local avg €3.",
    reports: 43,
  },
  {
    id: 2,
    position: [41.8986, 12.4769] as [number, number],
    name: "Scam Restaurant near Vatican",
    warning: "Tourist Trap — hidden service charge + low quality. 67 travelers warned.",
    reports: 67,
  },
  {
    id: 3,
    position: [41.9029, 12.4963] as [number, number],
    name: "Fake Gladiator Photos",
    warning: "Scam — aggressive solicitors charge €20+ for photos with fake gladiators. 91 travelers warned.",
    reports: 91,
  },
];

export const safetyZones = [
  { name: "Trastevere", daytime: "Safe", night: "Moderate", soloWomen: "Caution after 11pm", center: [41.8893, 12.4700] as [number, number] },
  { name: "Monti", daytime: "Safe", night: "Safe", soloWomen: "Generally safe", center: [41.8951, 12.4942] as [number, number] },
  { name: "Termini Station", daytime: "Moderate", night: "Caution", soloWomen: "Avoid after 10pm", center: [41.9011, 12.5018] as [number, number] },
  { name: "Centro Storico", daytime: "Safe", night: "Safe", soloWomen: "Generally safe", center: [41.8992, 12.4731] as [number, number] },
];

export const routeOptions = [
  {
    id: "A",
    label: "Route A — Faster",
    time: "12 min",
    type: "faster" as const,
    description: "Via Nazionale → Via Cavour. Main roads, well-lit.",
    safety: "Moderate",
  },
  {
    id: "B",
    label: "Route B — Safer",
    time: "15 min",
    type: "safer" as const,
    description: "Via dei Fori Imperiali → Colosseo side streets. Tourist-friendly, police presence.",
    safety: "High",
  },
];

export const nearbyPlaces = [
  { name: "Trattoria Da Enzo", type: "Restaurant", distance: "350m", rating: 4.7, icon: "🍝" },
  { name: "Colosseum", type: "Monument", distance: "1.2km", rating: 4.9, icon: "🏟️" },
  { name: "Farmacia Santa Maria", type: "Pharmacy", distance: "200m", rating: 4.2, icon: "💊" },
  { name: "Termini Station", type: "Transport", distance: "800m", rating: 3.8, icon: "🚂" },
  { name: "Gelateria del Teatro", type: "Dessert", distance: "500m", rating: 4.8, icon: "🍦" },
  { name: "Pantheon", type: "Monument", distance: "600m", rating: 4.9, icon: "🏛️" },
];

// ── Community Page — Questions ───────────────────────
export const communityQuestions = [
  {
    id: 1,
    destination: "Rome",
    question: "Is the Roma Pass worth it for 3 days? Or should I buy individual tickets?",
    author: { name: "Ananya Sharma", avatar: "https://i.pravatar.cc/36?img=20" },
    timePosted: "2 hours ago",
    answers: 8,
    tags: ["Budget", "Tips"],
  },
  {
    id: 2,
    destination: "Bali",
    question: "Best areas to stay in Bali for a solo female traveler? Canggu vs Ubud?",
    author: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/36?img=21" },
    timePosted: "5 hours ago",
    answers: 12,
    tags: ["Solo", "Safety"],
  },
  {
    id: 3,
    destination: "Tokyo",
    question: "JR Pass or Suica card for a 7-day Tokyo-only trip? What saves more money?",
    author: { name: "David Park", avatar: "https://i.pravatar.cc/36?img=22" },
    timePosted: "1 day ago",
    answers: 15,
    tags: ["Transport", "Budget"],
  },
  {
    id: 4,
    destination: "Rome",
    question: "Hidden gem restaurants in Testaccio neighborhood? Tired of tourist traps.",
    author: { name: "Luca Moretti", avatar: "https://i.pravatar.cc/36?img=23" },
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
    destination: "Rome, Italy",
    dates: "March 2026",
    bestMoment: "Stumbling upon a tiny piazza at golden hour where a street musician played Vivaldi. No tourists. Just me and the music echoing off ancient walls.",
    oneRegret: "Skipping Borghese Gallery — couldn't get tickets. Book 2 weeks ahead!",
    photo: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    traveler: { name: "James Liu", avatar: "https://i.pravatar.cc/40?img=26" },
    destination: "Tokyo, Japan",
    dates: "January 2026",
    bestMoment: "3am ramen in Golden Gai. The chef served us his secret off-menu shoyu ramen. Best meal of my life, no exaggeration.",
    oneRegret: "Not buying a pocket WiFi earlier. Google Maps is essential for navigating Tokyo.",
    photo: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    traveler: { name: "Aisha Patel", avatar: "https://i.pravatar.cc/40?img=27" },
    destination: "Bali, Indonesia",
    dates: "February 2026",
    bestMoment: "Sunrise trek to Mount Batur. Above the clouds at 5am with hot chocolate in hand. The caldera view reduced me to tears.",
    oneRegret: "Spending too many days in Seminyak. Ubud and Sidemen deserve more time.",
    photo: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop",
  },
];

// ── Money Page — Budget Pulse ────────────────────────
export const budgetData = {
  destination: "Rome, Italy",
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
  tripName: "Roman Holiday",
  members: ["Rahul", "Priya", "Arjun"],
  expenses: [
    { id: 1, day: 1, description: "Lunch at Roscioli", amount: 4500, splitAmong: ["Rahul", "Priya", "Arjun"] },
    { id: 2, day: 1, description: "Dinner at Da Enzo", amount: 5400, splitAmong: ["Rahul", "Priya", "Arjun"] },
    { id: 3, day: 2, description: "Colosseum tickets", amount: 3600, splitAmong: ["Rahul", "Priya", "Arjun"] },
    { id: 4, day: 2, description: "Lunch at Armando al Pantheon", amount: 3900, splitAmong: ["Rahul", "Priya"] },
    { id: 5, day: 3, description: "Vatican Museums entry", amount: 5100, splitAmong: ["Rahul", "Priya", "Arjun"] },
    { id: 6, day: 3, description: "Pizza at Bonci Pizzarium", amount: 1800, splitAmong: ["Rahul", "Arjun"] },
    { id: 7, day: 4, description: "Bike rental — Appian Way", amount: 2400, splitAmong: ["Rahul", "Priya", "Arjun"] },
    { id: 8, day: 4, description: "Aperitivo at Salotto 42", amount: 2700, splitAmong: ["Rahul", "Priya", "Arjun"] },
  ],
  balances: [
    { name: "Rahul", owes: 1200, owedBy: "Priya" },
    { name: "Arjun", owes: 850, owedBy: "Rahul" },
  ],
};
