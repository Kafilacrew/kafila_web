import ReusableComponent from '../components/ReusableComponent';
import Vietnam1 from '../assets/Treks/Vietnam/Vietnam-Para.jpeg';
import Vietnam2 from '../assets/Treks/Vietnam/Vietnam-1.jpeg';
import Vietnam3 from '../assets/Treks/Vietnam/Vietnam-2.jpeg';
import Vietnam4 from '../assets/Treks/Vietnam/Vietnam-3.PNG';

const Vietnam = () => {
  const vietnamData = {
    title: "Vietnam",
    location: "Vietnam",
    date: "July 2026",
    description: "Explore the best of Vietnam — from the historic streets of Hanoi and the stunning limestone karsts of Halong Bay to the golden hands of Da Nang and the vibrant energy of Ho Chi Minh City. A 6-day journey through culture, nature, and adventure.",
    parallaxImage: Vietnam1,
    price: "₹ 89,999/- onwards (Ex. Pune) • Includes flights, accommodation & activities",
    slots: "👥 20 Explorers",
    schedule: "🕒 July 2026",
    boardingPoints: [
      "Pune Airport",
      "Mumbai Airport"
    ],
    historyText:
      "Vietnam offers a mesmerizing blend of ancient traditions and modern dynamism. This curated 6-day journey takes you through four iconic destinations: Hanoi's charming Old Quarter and colonial architecture, the UNESCO World Heritage site of Halong Bay with its emerald waters and limestone islands, Da Nang's stunning Golden Hand Bridge and pristine beaches, and finally Ho Chi Minh City's historic Cu Chi Tunnels and bustling markets. Route: Hanoi (2N) → Halong Bay Cruise (1N) → Da Nang (2N) → Ho Chi Minh City (1N).",
    includes: [
      "Round-trip flights (Pune/Mumbai to Vietnam)",
      "All domestic flights within Vietnam",
      "Accommodation (twin/triple sharing)",
      "Halong Bay overnight cruise",
      "All entrance fees & activities",
      "Breakfast daily, select lunches & dinners",
      "Professional tour guide",
      "Transportation throughout",
      "First Aid support"
    ],
    excludes: [
      "Visa fees",
      "Personal expenses",
      "Optional excursions",
      "Travel insurance"
    ],
    whatToCarry: [
      "Valid passport (min. 6 months validity)",
      "Vietnam visa (e-visa recommended)",
      "Light cotton clothing",
      "Comfortable walking shoes",
      "Sunscreen & hat",
      "Power adapter (Type A/C)",
      "Reusable water bottle",
      "Camera & power bank",
      "Personal medicines",
      "Swimwear (for Halong Bay & beaches)"
    ],
    itineraries: [
      {
        title: "Arrive in Hanoi",
        subtitle: "Day 1",
        items: [
          { time: "Arrival", desc: "Arrive in Hanoi and check into your hotel." },
          { time: "Afternoon", desc: "Walk through the vibrant Old Quarter." },
          { time: "Evening", desc: "Visit Hoan Kiem Lake and enjoy the Water Puppet Show." }
        ]
      },
      {
        title: "Hanoi Heritage",
        subtitle: "Day 2",
        items: [
          { time: "Morning", desc: "Visit Ho Chi Minh Mausoleum and Temple of Literature." },
          { time: "Afternoon", desc: "Explore Train Street and enjoy the famous egg coffee experience ☕" },
          { time: "Evening", desc: "Drive from Hanoi toward Halong Bay." }
        ]
      },
      {
        title: "Halong Bay Cruise",
        subtitle: "Day 3",
        items: [
          { time: "Full Day", desc: "Overnight cruise on Halong Bay." },
          { time: "Activities", desc: "Kayaking, explore caves & islands." },
          { time: "Evening", desc: "Sunset + seafood dinner on cruise 🌅" }
        ]
      },
      {
        title: "Da Nang – Beaches & City Life",
        subtitle: "Day 4",
        items: [
          { time: "Morning", desc: "Cruise ends → Fly to Da Nang." },
          { time: "Afternoon", desc: "Relax at My Khe Beach 🏖️" },
          { time: "Evening", desc: "Dragon Bridge (fire & water show at night 🔥💦), Riverside cafés & seafood." }
        ]
      },
      {
        title: "Golden Hand Bridge (Da Nang)",
        subtitle: "Day 5",
        items: [
          { time: "Morning", desc: "Visit the world-famous Golden Bridge — giant stone hands holding the bridge." },
          { time: "Experience", desc: "Scenic cable car ride (one of the longest in the world)." },
          { time: "Day", desc: "Cool mountain weather & viewpoints at Ba Na Hills." },
          { time: "Evening", desc: "Back in Da Nang." }
        ]
      },
      {
        title: "Ho Chi Minh City",
        subtitle: "Day 6",
        items: [
          { time: "Morning", desc: "Fly Da Nang → Ho Chi Minh City." },
          { time: "Sightseeing", desc: "Cu Chi Tunnels and War Remnants Museum." },
          { time: "Afternoon", desc: "Ben Thanh Market shopping." },
          { time: "Evening", desc: "Rooftop café to wrap the trip 🍸" }
        ]
      }
    ],
    images: [Vietnam2, Vietnam3, Vietnam4],
    showBookingForm: true
  };

  return <ReusableComponent {...vietnamData} />;
};

export default Vietnam;
