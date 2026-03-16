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
        title: "Hanoi Arrival",
        subtitle: "Day 01 - 12 July",
        items: [
          { time: "Sunday", desc: "Welcome to Hanoi, Vietnam. Upon arrival at Hanoi International Airport, you will be picked up by a driver and transferred to your hotel (driver only, no guide). Check in follows standard hotel timing around 14:00–15:00. The rest of the day is free for leisure to explore Hanoi Old Quarter, Hoan Kiem Lake, or nearby cafes. Overnight stay in Hanoi." }
        ]
      },
      {
        title: "Hanoi Full Day City Tour",
        subtitle: "Day 2 - 13 July",
        items: [
          { time: "Monday", desc: "Morning pickup from the hotel to explore Hanoi. Visit Ho Chi Minh Complex including the mausoleum area and the houses where Ho Chi Minh lived. Continue to the One Pillar Pagoda and Vietnam Ethnology Museum to learn about the country's ethnic cultures. After lunch at a local restaurant, visit Tran Quoc Pagoda on West Lake, the Temple of Literature (Vietnam’s first university), and Hoa Lo Prison Museum. In the evening enjoy a traditional Water Puppet Show. Overnight in Hanoi. Note:- Only Breakfast & Lunch provided." }
        ]
      },
      {
        title: "Halong Bay Cruise",
        subtitle: "Day 3 - 14 July",
        items: [
          { time: "Tuesday", desc: "Depart Hanoi by expressway to Halong Bay (approx. 2.5–3 hours). Board an overnight cruise and sail through the limestone islands of this UNESCO World Heritage site. Lunch is served on board while cruising. Afternoon activities may include kayaking, cave exploration, swimming, or relaxing on the sundeck. Enjoy dinner on the cruise and spend the night in your cabin on Halong Bay.Note:- Only Breakfast, Lunch & Dinner provided." }
          ]
      },
      {
        title: "Halong – Hanoi – Fly to Da Nang",
        subtitle: "Day 4 - 15 July",
        items: [
          { time: "Wednesday", desc: "Start the day with a Tai Chi session on the sundeck as the sun rises over Halong Bay. After breakfast continue cruising before checking out around 09:30. Enjoy brunch while returning to the harbor. Transfer back to Hanoi and later head to the airport for your flight to Da Nang. Upon arrival, transfer to your hotel. Overnight in Da Nang. Note:- Only Breakfast & Brunch provided." }
        ]
      },
      {
        title: "Da Nang – Coconut Jungle – Hoi An",
        subtitle: "Day 5 - 16 July",
        items: [
          { time: "Thursday", desc: "Afternoon pickup from the hotel to visit Cam Thanh Coconut Village. Experience local fishing life and ride traditional Vietnamese basket boats through coconut waterways. Continue to Hoi An Ancient Town to explore the Phuc Kien Assembly Hall, Central Market, ancient merchant houses, Folk Culture Museum, and the historic Japanese Covered Bridge. Dinner with Hoi An specialties followed by a lantern boat ride on the Hoai River and time at the night market. Return to Da Nang. Overnight in Da Nang. Note:- Only Breakfast & Dinner provided." }
        ]
      },
      {
        title: "Ba Na Hills & Golden Bridge",
        subtitle: "Day 6 - 17 July",
        items: [
          { time: "Friday", desc: "Morning departure for Ba Na Hills. Ride the famous cable car to the mountain resort 1,487 meters above sea level. Visit the Golden Bridge, Linh Ung Pagoda, and Le Jardin D’Amour Gardens. Explore the European style French Village and enjoy a buffet lunch. In the afternoon visit Fantasy Park and other attractions before returning to Da Nang. Overnight in Da Nang. Note:- Only Breakfast & Lunch provided." }
          ]
      },
      {
        title: "Da Nang Departure",
        subtitle: "Day 7 - 18 July",
        items: [
          { time: "Saturday", desc: "Enjoy breakfast at the hotel. Free time until your transfer to Da Nang International Airport for your departure flight. Note:- Only Breakfast provided. End of services. " }
          ]
      }
    ],
    images: [Vietnam2, Vietnam3, Vietnam4],
    showBookingForm: true
  };

  return <ReusableComponent {...vietnamData} />;
};

export default Vietnam;
