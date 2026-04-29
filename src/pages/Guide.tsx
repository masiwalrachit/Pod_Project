import { useEffect, useState } from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Guide() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // For fixed height scroll or document scroll
      // Because layout has a main container with h-screen overflow-auto, we might need to listen to the main element.
      // But let's attach to document just in case, and also try to find the scrollable container.
      const scrollable = document.getElementById('main-scroll-container') || document.documentElement;
      const scrollPx = scrollable.scrollTop;
      const winHeightPx = scrollable.scrollHeight - scrollable.clientHeight;
      if (winHeightPx > 0) {
        setScrollProgress(scrollPx / winHeightPx);
      }
    };

    const container = document.getElementById('main-scroll-container') || window;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll as any);
  }, []);

  const totalFeatures = 25;
  const featuresExplored = Math.min(totalFeatures, Math.ceil(scrollProgress * totalFeatures) || 1);

  return (
    <div className="min-h-full bg-slate-50 text-slate-900 pb-24 relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 lg:left-[240px] right-0 h-1.5 bg-slate-200 z-50">
        <div 
          className="h-full bg-slate-800 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto pt-20 px-6">
        {/* HEADER SECTION */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Your journey through Wayfind
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Every feature exists because a real traveler had a real problem. Here's the full story.
          </p>
          <div className="mt-6 text-sm font-bold text-slate-400">
            {featuresExplored} of {totalFeatures} features explored
          </div>
        </div>

        {/* JOURNEY STRUCTURE */}
        <div className="space-y-24">

          {/* CHAPTER 1 */}
          <section>
            <div className="w-full bg-amber-50 rounded-2xl p-8 mb-8 border-l-8 border-amber-500">
              <h2 className="text-3xl font-black text-amber-900 mb-2 uppercase tracking-wide">Chapter 1 — Plan</h2>
              <p className="text-amber-800 text-lg font-medium">Before you leave home — building your trip the smart way</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="amber"
                name="Itinerary Inheritance"
                summary="Clone a real traveler's day-by-day plan instead of starting from zero."
                problem="I spent three weekends researching Tokyo. Blogs, Reddit threads, YouTube vlogs. I still felt like I was guessing. I had no idea if my schedule made geographical sense or if I was going to spend half my trip on the metro backtracking across the city."
                solution="You browse real itineraries from past travelers who match your travel style — solo, budget, cultural, foodie. You clone the one that fits. You only edit what you want to change. You go from zero to a complete plan in under 30 minutes."
                story="Rohan from Pune was planning his first solo trip to Tokyo. After 3 weekends of research he found a Wayfind itinerary by Kenji — 10 days, Shinjuku to Kyoto day trip to Akihabara. He cloned it, swapped one day for Studio Ghibli Museum, and had a complete plan in 22 minutes. He said it was the best trip of his life."
                without="3 weekends of scattered research, still unsure if the plan is good."
                withText="22 minutes. Built on someone's lived experience."
              />

              <FeatureCard 
                color="amber"
                name="What You'll Actually Miss Predictor"
                summary="See what travelers like you regretted skipping — before you finalise your plan."
                problem="You only discover what you missed after you're home. You see someone's photo on Instagram from a place you walked past but never entered. There's no way to know what your type of traveler cares about — until it's too late."
                solution="The app matches you to past travelers with the same profile and shows you the specific places they wished they'd added — with the percentage of people who felt that regret. You see this while you're still building your plan."
                story="Divya was planning 5 days in Rome focused on food and history. She hadn't added Borghese Gallery — she'd never heard of it. Wayfind showed: '84% of travelers with your profile regretted skipping this. It also requires booking 2 weeks in advance.' She booked it that night. It became the best day of her trip."
                without="Finds out about Borghese Gallery on Instagram. Books a return trip."
                withText="Books it during planning. Best day of the trip."
              />

              <FeatureCard 
                color="amber"
                name="Local Event Sync"
                summary="Auto-detects festivals, markets and local events during your travel dates and drops them into your planner."
                problem="The best moments of any trip are the accidental ones — a street festival, a weekly market, a ceremony you stumbled into. But they are impossible to find in advance unless you already know to look. I've walked past shuttered streets and found out from a local I missed a 200-year-old festival by one day."
                solution="Wayfind scans your destination and dates for local events and surfaces them inside your itinerary builder with a one-tap Add to Day button. Events you never would have found appear in your plan automatically."
                story="Ankit was visiting Bali in July. He had no idea Galungan — a major Balinese Hindu festival with bamboo decorations on every road — was happening during his trip. Wayfind flagged it 3 weeks before departure. He restructured Day 4 around it. In his Trip Capsule he wrote: 'It was the most memorable day of my life.'"
                without="Spends Day 4 at a beach club. Sees the festival on Instagram afterward."
                withText="Restructures his day. Experiences a once-in-a-year cultural event."
              />

              <FeatureCard 
                color="amber"
                name="Activity Flags"
                summary="Six smart micro-warnings appear on every activity — cash only, dress code, opening hours conflict, real visit time, advance booking required, no photography."
                problem="This information exists. It is in a TripAdvisor comment from 2021, a Google Maps review, a travel blog footnote. Nobody puts it in front of you at the moment you need it — which is when you add a place to your itinerary, not after you've already arrived."
                solution="Six intelligent badges appear directly on each activity card. Sourced from community reports. Only the relevant flags show. You see them at the planning stage, not at the door."
                story="Sneha added Da Enzo al 29 to her Rome itinerary. No flags, old version of the app. She showed up with 4 people on a Tuesday evening, no reservation, no cash. The waiter turned them away. With Activity Flags she would have seen 'Book in advance' and 'Cash only' the moment she added it to Day 1."
                without="Turned away at the door. Scrambles for a backup at 8pm."
                withText="Books ahead, brings cash. Dinner goes perfectly."
              />

              <FeatureCard 
                color="amber"
                name="Dead Time Detector"
                summary="Finds gaps in your day and fills them with nearby suggestions from past travelers."
                problem="I plan morning and evening and leave a 2-hour gap in the middle. I end up wandering and paying €9 for a coffee near a monument when the best espresso in the city was a 4-minute walk away. I never know what to do with unplanned time."
                solution="The app scans each day for 90-minute+ gaps and surfaces 2-3 nearby suggestions from community travelers — specific, walkable, matched to your location on that day."
                story="Kabir had a 3-hour gap on Day 2 in Rome between hotel checkout and his Colosseum slot. Wayfind detected it and surfaced: Caffe Sant'Eustachio espresso 5 minutes away, Campo de' Fiori market before noon, and Doria Pamphilj Gallery for a crowd-free museum hour. He did all three."
                without="Wanders, ends up in a tourist café, spends ₹800 on bad coffee."
                withText="Fills 3 hours with the best local spots near his exact location."
              />

              <FeatureCard 
                color="amber"
                name="Day Overload Warning"
                summary="Calculates total walking distance per day and warns you before you've over-planned yourself into exhaustion."
                problem="On paper, 9 activities looks like an exciting day. On foot, it is 14km and you collapse at 3pm. The last two days of every trip I've over-planned I spent too tired to enjoy anything."
                solution="Using distance estimates between activity pairs, the app calculates your day's total walking load and flags anything over 9km — with a suggestion to move specific activities to the next day."
                story="Priya planned 9 activities for Day 3 in Tokyo — Senso-ji, Akihabara, Shibuya, Harajuku, Meiji Shrine, Shinjuku, and dinner in Ginza. Wayfind flagged ~13km of walking. She moved Meiji Shrine and Harajuku to Day 4. Both days felt comfortable instead of exhausting."
                without="Collapses at 4pm. Misses dinner. Too tired for the last 2 days."
                withText="Splits across days. Enjoys everything fully."
              />

              <FeatureCard 
                color="amber"
                name="Combine Nearby Alert"
                summary="Detects when two places on different days are a short walk apart and suggests merging them — freeing up an entire day."
                problem="I put the Pantheon on Day 2 and Piazza Navona on Day 5 because I didn't know they were a 7-minute walk from each other. I travelled to the same neighbourhood twice. I could have used that day for something else entirely."
                solution="Wayfind scans all your days for proximity pairs and shows a dismissable tip with a one-tap merge button. One decision can free up an entire day."
                story="Aryan had the Roman Forum on Day 3 and the Colosseum on Day 6. They are a 3-minute walk apart. Wayfind showed the merge alert. He combined them into one morning block and used the freed Day 6 for a day trip to Pompeii he'd been hesitating to add."
                without="Travels to the same area twice. Loses half a travel day."
                withText="Combines them. Gains a full day for Pompeii."
              />

              <FeatureCard 
                color="amber"
                name="Itinerary Task Archiving"
                summary="Check off days as you complete them so your active itinerary stays clean and focused on what's next."
                problem="By day 4 of my 10-day trip, my itinerary is a mess. Half the things are done, but I still have to scroll past them every morning to figure out what I'm doing today. It feels overwhelming instead of helpful."
                solution="Every day card has a simple completion checkbox. Check it, and the entire day gracefully collapses and moves into an 'Archived Days' section at the bottom, greying out so you only focus on your future plans."
                story="On day 5 in Rome, Marcus checked off Day 4. It instantly faded into his archives. He woke up to a clean list showing exactly what he was doing that morning, without scrolling past his previous museum visits."
                without="Scrolls endlessly past 4 days of completed activities every morning."
                withText="Wakes up to a clean, focused plan of action."
              />
            </div>
          </section>

          {/* CHAPTER 2 */}
          <section>
            <div className="w-full bg-teal-50 rounded-2xl p-8 mb-8 border-l-8 border-teal-500">
              <h2 className="text-3xl font-black text-teal-900 mb-2 uppercase tracking-wide">Chapter 2 — Navigate</h2>
              <p className="text-teal-800 text-lg font-medium">On the ground — moving safely and smartly in an unfamiliar city</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="teal"
                name="Neighborhood Safety Score"
                summary="Crowdsourced heatmap showing safety by neighborhood, time of day, and traveler type."
                problem="Is this neighborhood safe? I searched that question and got a Reddit thread from 2019 and a travel blog with no specifics. A solo woman at midnight has completely different needs from a group at 3pm. No tool accounts for this."
                solution="Past travelers rate neighborhoods by time of day and traveler type. Green, amber, red. Hover any zone for the specific report — what was experienced, by whom, at what time."
                story="Meera was planning to walk back from dinner near Termini Station at 11pm, traveling solo. Wayfind's heatmap showed amber for solo women at that time with the note: 'Several travelers reported harassment near the east exit after 10pm.' She booked a Grab. Arrived safely."
                without="Walks through an uncomfortable area alone at night."
                withText="Books a ride. 3 minutes, ₹180. Safe."
              />

              <FeatureCard 
                color="teal"
                name="Road Route Advisor"
                summary="Shows faster vs. safer route options with community safety ratings — because Google Maps only optimises for speed."
                problem="Google Maps routed me through a completely dark alley at midnight because it saved 4 minutes. It has no concept of safe as a routing variable. Speed and safety are not the same thing."
                solution="For any route query, Wayfind shows two options — faster and safer — each with a community safety score and a plain English description of what the route passes through."
                story="Rahul and his friends were heading back from a club in Trastevere at midnight. Route A was 11 minutes through quiet back streets. Route B was 15 minutes along Via del Corso — well-lit, active, police presence nearby. Wayfind marked Route B Safety: High. They took it."
                without="Fast route through unlit streets."
                withText="4 minutes longer. Stress-free."
              />

              <FeatureCard 
                color="teal"
                name="Tourist Trap Flags"
                summary="Red map markers wherever travelers have flagged overpriced, misleading or tourist-exploiting spots."
                problem="I walked into a restaurant near the Trevi Fountain. The menu had no prices. I ordered what seemed like a simple meal. The bill was €58 for two. The TripAdvisor warning was the first result when I searched the name afterward. I found it too late."
                solution="Community warnings appear as red markers on the map before you walk in. One tap shows you the specific warning — overpriced, scam, hidden cover charge — and a suggestion for what to do instead."
                story="Neha was near the Trevi Fountain and saw a restaurant with outdoor seating and no prices on the menu. Wayfind showed a red marker: '43 travelers warned — €12 cover charge added to bill without mentioning it.' She walked 3 minutes away to an unflagged spot. Paid half the price. Better food."
                without="Pays €60 for a mediocre meal."
                withText="Walks 3 minutes. Pays €28. Eats better."
              />

              <FeatureCard 
                color="teal"
                name="Dynamic Reordering"
                summary="Reshuffles your day in real time based on live crowd data, weather and transport delays."
                problem="I planned to visit the Colosseum at 10am. Nobody told me three tour groups had arrived at the same time. I queued for 90 minutes in August heat. If I had gone at 2pm it would have been half the crowd. The information existed. It just wasn't given to me."
                solution="Wayfind monitors live crowd levels for your planned activities and pushes a swap suggestion when conditions improve later in the day. One tap to accept or dismiss."
                story="Vikram's Day 2 had Colosseum in the morning, Roman Forum in the afternoon. At 8:30am Wayfind pushed: 'High crowd at Colosseum right now. Roman Forum is quiet this morning — swap?' He accepted. Spent a peaceful morning at the Forum, hit the Colosseum at 2pm when tour groups had cleared."
                without="90-minute queue in August heat."
                withText="Swaps activities. Walks in within 15 minutes."
              />

              <FeatureCard 
                color="teal"
                name="Contextual Transport Alerts"
                summary="Location-triggered warnings about taxi scams, local passes and transport rules — shown at the exact moment you need them."
                problem="Every major city has an airport taxi scam. I know this now. I didn't know it the first time I landed in a new city at 6am, jet-lagged, and got charged three times the correct fare by someone in a suit."
                solution="When your GPS matches a known risk zone — airport, major station, tourist monument — Wayfind pushes a contextual card with the specific warning and what to do instead."
                story="Siddharth landed at Fiumicino at 6am. A man in a suit immediately offered a taxi to Rome for €70. Wayfind had pushed an alert when he landed: 'Official taxis only — fixed fare to city center is €48. Buy the ticket at the official desk inside arrivals, not from anyone approaching you.'"
                without="Pays €70. Overcharged by €22."
                withText="Pays €48. Knows the right desk before he exits arrivals."
              />

              <FeatureCard 
                color="teal"
                name="Drinking Water Indicator"
                summary="Tells you clearly whether tap water is safe to drink at your destination — so you stop buying unnecessary plastic bottles or worse, get sick drinking something you shouldn't."
                problem="Is the tap water safe? I searched this for every city I've ever visited. The answers are inconsistent, outdated or buried in travel forums. I've bought bottled water in cities where the tap is completely safe. I've also drunk tap water where I absolutely shouldn't have."
                solution="A persistent pill in the Navigate panel shows: Tap water: Safe to drink (Rome, Tokyo) or Tap water: Use bottled (Bali). Sourced from destination safety data. Always visible. Never requires a search."
                story="Yash spent ₹1,200 on bottled water during a week in Rome before a local told him the street fountains — nasoni — are fed by one of the world's best ancient aqueduct systems and are completely safe. Wayfind's indicator would have shown him this on Day 1."
                without="Buys bottled water for 7 days. Spends ₹1,200 unnecessarily."
                withText="Drinks from street fountains. Saves money, reduces plastic waste."
              />

              <FeatureCard 
                color="teal"
                name="Global Emergency SOS Overlay"
                summary="A persistent, high-visibility safety net that gives you instant access to local emergency contacts and safe zones when you need them most."
                problem="I was in a minor accident in Paris and realized I didn't know the local equivalent of 911. I panicked, wasting crucial minutes trying to google emergency numbers while flustered."
                solution="A red pulsing SOS button sits persistently on your map view. One tap instantly pulls up a glassmorphic emergency overlay with local police/medical numbers and highlights the nearest safe zones directly on your map."
                story="Sarah lost her passport and wallet near the Colosseum. Instead of panicking, she tapped the SOS button. Wayfind instantly showed her the local tourist police number and highlighted the nearest station 400 meters away."
                without="Panics and googles for emergency numbers in a high-stress situation."
                withText="Taps SOS. Gets numbers and nearby safe zones instantly."
              />
            </div>
          </section>

          {/* CHAPTER 3 */}
          <section>
            <div className="w-full bg-purple-50 rounded-2xl p-8 mb-8 border-l-8 border-purple-500">
              <h2 className="text-3xl font-black text-purple-900 mb-2 uppercase tracking-wide">Chapter 3 — Community</h2>
              <p className="text-purple-800 text-lg font-medium">Wisdom from people who've been exactly where you're going</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="purple"
                name="Ask a Traveler"
                summary="Post a question about any destination and get answers from travelers who've actually been there recently."
                problem="I had a very specific question — is the Roma Pass worth it for 3 days if I'm going to Borghese Gallery, Colosseum and two metro days? Google gave me a blog post from 2018. Reddit gave me 40 conflicting opinions. I needed one person who'd done exactly my itinerary, recently."
                solution="You post your question with destination tags. Past travelers who match your destination get notified. Answers are recent, specific, and from people with real experience — not algorithms."
                story="Ananya was 3 weeks from her Rome trip and unsure about the Roma Pass. She posted on Wayfind. Within 4 hours, 8 travelers had answered — 6 said skip it for her specific itinerary, 2 said buy it. The top answer explained exactly why with the current pricing. She saved ₹2,400 by not buying the pass."
                without="Buys the pass based on a 2018 blog post. Wastes ₹2,400."
                withText="Gets 8 recent answers. Makes the right call."
              />

              <FeatureCard 
                color="purple"
                name="Trip Capsules"
                summary="After every trip, travelers log their best moment and one regret. This becomes the most honest travel intelligence database in existence."
                problem="Travel reviews are either 5-star because someone won a free stay or 1-star because the wifi was slow. Neither tells me what someone genuinely loved or wished they'd done differently. I want honest, unfiltered reflection — not ratings."
                solution="After returning, travelers are asked two questions only: What was your best moment? What is your one regret? The answers are short, specific and honest. They feed the What You'll Miss predictor and the community knowledge base."
                story="Pooja visited Tokyo in October. Her Trip Capsule: Best moment — 'Stumbled into a tiny jazz bar in Shinjuku Golden Gai at midnight. 8 seats. Owner played piano. Never would have found it without the Wayfind community tip.' One regret — 'Didn't book teamLab Planets in advance. Sold out every day I tried.'"
                without="Her experience disappears. The next traveler makes the same mistake."
                withText="Her regret prevents the next traveler from missing teamLab. Her best moment gets added to community tips."
              />

              <FeatureCard 
                color="purple"
                name="Community ↔ Plan Integration"
                summary="When you add an activity to your itinerary, you instantly see how many community questions exist about that place — and can read them without leaving the Plan page."
                problem="The information I need while planning is scattered across two different parts of every app. I'm building my itinerary and I have a question about the Colosseum. I have to stop, go to a different page, search, come back, and lose my place."
                solution="A subtle link appears on each activity card showing how many recent community questions exist about that place. One tap opens them inline. The Plan page and Community page are the same conversation."
                story="Riya was adding the Vatican to Day 3. She saw '8 recent questions about Vatican Museums in Community.' She tapped it and read a thread about the best entrance time to avoid the Sistine Chapel rush. She adjusted her slot from 10am to 7:30am. Walked through an almost empty chapel."
                without="Adds Vatican at 10am. Queues in a crowd."
                withText="Reads the community thread. Books 7:30am. Walks in near-empty."
              />
            </div>
          </section>

          {/* CHAPTER 4 */}
          <section>
            <div className="w-full bg-emerald-50 rounded-2xl p-8 mb-8 border-l-8 border-emerald-500">
              <h2 className="text-3xl font-black text-emerald-900 mb-2 uppercase tracking-wide">Chapter 4 — Money</h2>
              <p className="text-emerald-800 text-lg font-medium">Know what things actually cost — before and during your trip</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="emerald"
                name="Budget Pulse"
                summary="Shows what travelers like you actually spent per category — not what websites list as the price."
                problem="Every budget guide says 'expect to spend €50/day in Rome.' I spent €80 every single day. The listed prices are always wrong. Nobody accounts for the coffee here, the water there, the entry fee that went up, the taxi you had to take because you missed the last metro."
                solution="Community travelers submit what they actually spent — not listed prices. Budget Pulse shows you the real average per category: food, transport, entry fees, accommodation. Sourced from recent trips, matched to your travel style."
                story="Deepak budgeted ₹3,800/day for Rome based on a travel blog. Budget Pulse showed him the community average was ₹4,200/day for travelers with his profile. He adjusted his budget before leaving. Didn't run out of money on Day 5."
                without="Runs short on Day 5. Stress, awkward conversations, missed last dinner."
                withText="Adjusts budget before leaving. Never worried about money."
              />

              <FeatureCard 
                color="emerald"
                name="Group Expense Split"
                summary="Every expense is tied to a specific itinerary day and activity — and reconciled automatically at trip end."
                problem="Splitting costs in a group is the most consistently awkward part of travel. Someone paid for the Colosseum tickets, someone else covered two dinners, someone covered a taxi. By Day 4 nobody knows who owes what. The calculation happens in a WhatsApp chat with crossed messages and someone always feels cheated."
                solution="Every expense is logged against the itinerary activity it belongs to. Day 2 — Colosseum tickets — ₹3,600 — split 3 ways. At trip end, one screen shows exactly who owes whom and how much. One tap to settle."
                story="Rahul, Priya and Arjun spent 7 days in Rome. Rahul paid for most things upfront. By Day 6 nobody was sure of the running total. With Wayfind, every expense was logged as they went. At checkout, Wayfind showed: Priya owes Rahul ₹1,200. Arjun owes Rahul ₹850. Settled in 2 minutes."
                without="Awkward WhatsApp calculation at the airport. Someone feels short-changed."
                withText="Settled in 2 minutes at checkout. No awkwardness."
              />

              <FeatureCard 
                color="emerald"
                name="Budget Projection"
                summary="Tells you how much you'll overspend by the end of the trip — not just how much you've overspent today."
                problem="The app told me I was ₹400 over budget today. That's fine, I thought. I'll catch up tomorrow. I didn't catch up. ₹400/day over 7 days is ₹2,800. Nobody told me that. I found out at the end."
                solution="When you're over budget per day, Wayfind projects forward: 'At this rate, you'll overspend by ₹2,800 over 7 days. Your highest over-budget category is food — consider adjusting.'"
                story="Nisha was ₹400/day over on food in Rome by Day 2. The projection showed ₹2,800 total overspend. She switched from restaurant lunches to market food for 3 days — still delicious, half the cost — and finished the trip within budget."
                without="Discovers ₹2,800 overspend at the end. Can't undo it."
                withText="Sees the projection on Day 2. Adjusts. Finishes within budget."
              />
            </div>
          </section>

          {/* CHAPTER 5 */}
          <section>
            <div className="w-full bg-blue-50 rounded-2xl p-8 mb-8 border-l-8 border-blue-500">
              <h2 className="text-3xl font-black text-blue-900 mb-2 uppercase tracking-wide">Chapter 5 — Dashboard</h2>
              <p className="text-blue-800 text-lg font-medium">The view from above — your whole trip at a glance before you've left home</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="blue"
                name="Seasonal Intelligence Banner"
                summary="Automatically warns you about season-specific conditions, events and risks for your destination and travel dates."
                problem="I booked Bali in July. I found out it was peak monsoon season after I'd already booked non-refundable boat trips to Nusa Penida. They were cancelled due to rough seas. This information was freely available. Nobody put it in front of me."
                solution="Wayfind reads your trip destination and month and surfaces a seasonal alert automatically on your dashboard — monsoon warnings, cherry blossom timing, heatwaves, local holidays that close businesses."
                story="Simran booked Tokyo for March. Wayfind showed: 'Cherry blossom peak is typically March 25–April 5. Your trip is March 20 — you'll catch early bloom. Book Shinjuku Gyoen entry in advance — sells out during blossom season.' She booked it that day. Got in. It was everything she'd imagined."
                without="Arrives during peak bloom. Shinjuku Gyoen sold out. Watches through the fence."
                withText="Books ahead from home. Walks in on the best day of spring."
              />

              <FeatureCard 
                color="blue"
                name="Cinematic Onboarding Loader"
                summary="A premium, destination-specific flight animation that builds anticipation the moment you open the app."
                problem="Every travel app opens to a boring, sterile spinner. The excitement of planning a trip is totally lost in the software experience. It feels like opening a spreadsheet, not preparing for an adventure."
                solution="When you launch Wayfind, you get a cinematic, smooth animated sequence of a plane flying toward your specific destination (e.g., 'You're off to Rome'), setting the perfect emotional tone for your trip planning."
                story="When Maya opened Wayfind to start planning her honeymoon, instead of a white screen, a beautifully animated plane flew across her screen declaring 'You're off to Rome.' She said it made the trip suddenly feel real."
                without="Stares at a sterile loading spinner. Feels like work."
                withText="Sees a cinematic flight to her destination. Feels the excitement."
              />

              <FeatureCard 
                color="blue"
                name="Global Language Switcher"
                summary="Seamlessly translate your entire travel planning experience into your native language with a smart, searchable dropdown."
                problem="I'm planning a trip with my parents, but the app is entirely in English. I have to translate everything for them manually, which is exhausting when trying to review a 10-day itinerary together."
                solution="A sleek, searchable language selector in the main navigation instantly localizes the interface, allowing you to switch contexts on the fly and collaborate with non-English speakers effortlessly."
                story="Carlos was building an itinerary for his family trip from Mexico to Italy. He planned in English, but switched the interface to Spanish (Español) instantly so his parents could review the Day 3 schedule themselves."
                without="Manually translates everything. Takes twice as long to review."
                withText="Switches language instantly. Parents review it themselves."
              />
            </div>
          </section>

          {/* CHAPTER 6 */}
          <section>
            <div className="w-full bg-rose-50 rounded-2xl p-8 mb-8 border-l-8 border-rose-500">
              <h2 className="text-3xl font-black text-rose-900 mb-2 uppercase tracking-wide">Chapter 6 — Guides</h2>
              <p className="text-rose-800 text-lg font-medium">Expert locals — when you need more than just an app</p>
            </div>

            <div className="space-y-8">
              <FeatureCard 
                color="rose"
                name="Specialized Local Guide Network"
                summary="Book highly-vetted local experts based on incredibly specific niches like 'Street Photography', 'Hidden Culinary Gems', or 'Underground History'."
                problem="I wanted a food tour in Rome, but every generic platform sold me the same 50-person group walking tour hitting the same 3 tourist-trap restaurants. I wanted someone who actually lives there to show me where they eat."
                solution="Wayfind Guides lets you filter by deep specialties. You see their languages, exact hourly rates, and ratings. You don't just book a tour, you hire a specialized local companion for your exact interests."
                story="James is a photography enthusiast. Instead of a generic walking tour, he booked Elena on Wayfind—a local architecture photographer. For 3 hours, she took him to hidden rooftops and perfect light-spots tourists never find."
                without="Takes a generic 50-person group tour. Eats average food."
                withText="Books a specialized local. Discovers hidden gems."
              />
            </div>
          </section>

          {/* PAGE FOOTER */}
          <section className="pt-16 pb-32 border-t border-slate-200 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Why Wayfind exists</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Every one of these features came from a real traveler's real frustration. The missed festival. The cash-only restaurant that turned them away. The overcrowded monument they queued 90 minutes for. The budget that ran out on Day 5. The neighborhood they walked through alone that they wish they hadn't.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Travel should be the best version of your time. Wayfind is built on the belief that the people who've been where you're going have everything you need to know — and that information should reach you before you leave, not after you return.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

function FeatureCard({ color, name, summary, problem, solution, story, without, withText }: any) {
  const colorMap = {
    amber: 'border-amber-500',
    teal: 'border-teal-500',
    purple: 'border-purple-500',
    emerald: 'border-emerald-500',
    blue: 'border-blue-500',
    rose: 'border-rose-500'
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col border-l-[6px] ${colorMap[color as keyof typeof colorMap]}`}>
      <div className="p-8 pb-6">
        <h3 className="text-2xl font-black text-slate-900 mb-2">{name}</h3>
        <p className="text-lg text-slate-700 font-medium mb-8 leading-snug">{summary}</p>
        
        <div className="space-y-6">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 block">The Real Problem</span>
            <p className="text-slate-800 leading-relaxed italic">"{problem}"</p>
          </div>
          
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1 block">How Wayfind Fixes It</span>
            <p className="text-slate-800 leading-relaxed">{solution}</p>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 ml-4 shadow-inner">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 block">Real Story</span>
            <p className="text-slate-600 leading-relaxed text-sm">{story}</p>
          </div>
        </div>
      </div>
      
      {/* Comparison Strip */}
      <div className="flex border-t border-slate-100">
        <div className="flex-1 bg-red-50/50 p-4 border-r border-slate-100">
          <div className="flex gap-2 items-start">
            <div className="mt-0.5"><XCircle className="w-4 h-4 text-red-500" /></div>
            <p className="text-sm text-red-700 font-medium"><strong>Without Wayfind:</strong> {without}</p>
          </div>
        </div>
        <div className="flex-1 bg-green-50/50 p-4">
          <div className="flex gap-2 items-start">
            <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-green-600" /></div>
            <p className="text-sm text-green-700 font-medium"><strong>With Wayfind:</strong> {withText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
