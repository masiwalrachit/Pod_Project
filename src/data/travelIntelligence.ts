export const activityFlagsData: Record<string, any> = {
  "Vatican Museums": {
    operatingHours: { close: "14:00", daysClosed: ["Sun"] },
    realTimeActual: 4,
    realTimeBlocked: 2.5,
    dressCode: true,
  },
  "Colosseum": {
    operatingHours: { close: "19:00" },
    realTimeActual: 3.5,
    realTimeBlocked: 2.5,
  },
  "Borghese Gallery": {
    operatingHours: { daysClosed: ["Mon"] },
    realTimeActual: 2.5,
    realTimeBlocked: 1.5,
    advanceBooking: true,
  },
  "Da Enzo": {
    cashOnly: true,
    advanceBooking: true,
  },
  "Trattoria Da Enzo": {
    cashOnly: true,
  },
  "Roscioli": {
    cashOnly: true,
  },
  "Sistine Chapel": {
    dressCode: true,
    noPhoto: true,
  },
  "St. Peter's Basilica": {
    dressCode: true,
  },
};

export const destinationSuggestions: Record<string, string[]> = {
  "Rome": ["Pantheon walk", "Caffe Sant'Eustachio", "Campo de' Fiori market"],
  "Tokyo": ["Yoyogi Park stroll", "Local Depachika", "Arcade gaming"],
  "Bali": ["Beach walk", "Local Warung", "Spa/Massage"],
};

export function getPairDistance(act1: string, act2: string): number {
  const distances: Record<string, number> = {
    "Colosseum guided tour|Roman Forum exploration": 1.2,
    "Roman Forum exploration|Lunch at Armando al Pantheon": 3.5,
    "Lunch at Armando al Pantheon|Pantheon visit": 0.3,
    "Pantheon visit|Coffee at Sant'Eustachio Il Caffè": 0.2,
    "Coffee at Sant'Eustachio Il Caffè|Dinner in Trastevere": 4.5,
    "Appian Way bike ride|Lunch at Mercato Testaccio": 6.2,
    "Lunch at Mercato Testaccio|Aventine Hill & Keyhole": 2.1,
    "Aventine Hill & Keyhole|Aperitivo at Salotto 42": 3.8,
  };
  const key1 = `${act1}|${act2}`;
  const key2 = `${act2}|${act1}`;
  return distances[key1] || distances[key2] || 1.2; // default 1.2km
}

export const transportAlerts = [
  {
    id: "taxi-termini",
    type: "taxi",
    title: "Taxi Scams at Termini",
    description: "Ignore drivers approaching you inside the station. Only use the official white taxis at the rank outside.",
    severity: "high"
  },
  {
    id: "metro-pickpockets",
    type: "metro",
    title: "Pickpockets on Line A",
    description: "Extra caution on Metro Line A, especially near Termini and Trevi Fountain stops. Keep bags in front.",
    severity: "medium"
  }
];

export const waterFountains = [
  { position: [41.8986, 12.4768], name: "Piazza Navona Nasoni" },
  { position: [41.8902, 12.4922], name: "Colosseum Nasoni" },
  { position: [41.9009, 12.4833], name: "Trevi Nasoni" },
  { position: [41.9029, 12.4534], name: "St. Peter's Nasoni" }
];
