export const activityFlagsData: Record<string, any> = {
  "Land at Goa Airport (Dabolim / Mopa)": {
    cashOnly: true,
    scamZone: true,
  },
  "Lunch at Fisherman's Wharf, Cavelossim": {
    advanceBooking: true,
    realTimeActual: 1.5,
    realTimeBlocked: 0.5,
  },
  "Dinner at Infantaria Pastry Shop & Restaurant": {
    cashOnly: true,
    advanceBooking: true,
  },
  "Anjuna Flea Market": {
    onlyWed: true,
    bargain: true,
  },
  "Fish Thali lunch at a local beach shack": {
    cashOnly: true,
    realTimeActual: 1.0,
    realTimeBlocked: 0.25,
  },
  "Vagator Beach sunset": {
    noPhoto: true, // actually "no photography of locals without permission", close enough
  },
  "Night at Tito's Lane, Baga": {
    coverCharge: true,
    keepSafe: true,
  },
};

export const destinationSuggestions: Record<string, string[]> = {
  "Goa": ["Rent a scooter", "Visit spice plantation", "Beach hopping"],
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
    id: "taxi-scams",
    type: "taxi",
    title: "Taxi Scams at Airport/Stations",
    description: "Ignore unauthorized drivers approaching you. Only use the prepaid taxi counters inside or the official GoaMiles app.",
    severity: "high"
  },
  {
    id: "scooter-checks",
    type: "scooter",
    title: "Strict Helmet Checks",
    description: "Traffic police actively check for helmets (both riders) and valid international driving permits near Panjim and major beaches.",
    severity: "medium"
  }
];

export const waterFountains = [
  { position: [15.4950, 73.8300], name: "Panjim Bus Stand RO Kiosk" },
  { position: [15.5413, 73.7621], name: "Calangute Beach Water Station" },
  { position: [15.5925, 73.8156], name: "Mapusa Market Water Point" },
  { position: [15.5553, 73.7517], name: "Baga Beach Free RO Point" }
];
