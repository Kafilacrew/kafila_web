import ReusableComponent from '../components/ReusableComponent';
import Ladakh1 from '../assets/Treks/Ladakh/parallax.jpg';
import Ladakh2 from '../assets/Treks/Ladakh/main-1.jpg';
import Ladakh3 from '../assets/Treks/Ladakh/main-2.jpg';
import Ladakh4 from '../assets/Treks/Ladakh/main-3.jpg';

const Ladakh = () => {
  const ladakhData = {
    title: "Leh Ladakh Backpacking",
    location: "Leh Ladakh",
    date: "8th-13th September 2025",
    description: "Discover the enchanting landscapes of Leh Ladakh, a paradise of rugged Himalayan terrain, serene monasteries, and vibrant culture, offering an unforgettable adventure for nature lovers and thrill-seekers.",
    parallaxImage: Ladakh1,
    price: `5 Nights / 6 Days:
- Mini Bus: ₹17,999/-
- Bike (Dual Sharing): ₹18,499/-
- Bike: ₹23,999/-
7 Nights / 8 Days:
- Mini Bus: ₹24,999/-
- Bike (Dual Sharing): ₹25,999/-
- Bike: ₹31,999/-`,
    slots: "👥 25 Explorers",
    schedule: "🕒 8th-13th September 2025",
    boardingPoints: ["Leh", "Delhi"],
    historyText: "Nestled in the heart of the Himalayas, Leh Ladakh is a land of unparalleled beauty, where rugged mountains, serene lakes, and ancient monasteries create a breathtaking tapestry. Known for its high-altitude passes like Khardung La and Umling La, vibrant Buddhist culture, and pristine landscapes, Ladakh offers an adventure of a lifetime. This curated journey by Kafila Adventures takes you through iconic destinations like Nubra Valley, Pangong Lake, and Hanle, blending thrilling rides with soul-stirring experiences under azure skies.",
    includes: [
      "Private Transportation",
      "Comfortable accommodations on a triple sharing basis",
      "Meals (Breakfast & Dinner)",
      "Permits",
      "Sightseeing & Entry fees",
      "Oxygen Supply",
      "First Aid Support",
      "Professional Tour Guides"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Thermal wear (inner layers)",
      "Fleece jackets and windcheaters",
      "Waterproof and insulated gloves",
      "Woolen caps, mufflers, and socks",
      "Comfortable trekking shoes",
      "Valid ID proof",
      "Personal medicines",
      "Sunglasses with UV protection",
      "Sunscreen lotion (SPF 50+), lip balm, and moisturizer",
      "Reusable water bottles",
      "Headlamp or flashlight with extra batteries",
      "Camera to capture memories",
      "Power banks and chargers",
      "Head torch or simple handheld torch",
      "Snacks and energy bars"
    ],
    itineraries: [
      {
        title: "Ladakh Odyssey: Land of High Passes",
        subtitle: "5N/6D",
        items: [
          { time: "Day 0", desc: "Arrival in Leh (3,500m): Reach Leh Airport (IXL), transfer to hotel, and rest to acclimatize. Evening exploration of Leh Market." },
          { time: "Day 1", desc: "Sham Valley Ride: Visit Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar confluence at Sangam Point. Return to Leh by evening." },
          { time: "Day 2", desc: "Leh to Nubra Valley (3,048m): Drive via Khardung La Pass (5,602m). Visit Diskit Monastery and Hunder Sand Dunes. Optional camel ride or ATV tour." },
          { time: "Day 3", desc: "Nubra to Pangong Lake (4,250m): Drive via Shyok River. Check-in at lakeside camp and marvel at Pangong's surreal hues." },
          { time: "Day 4", desc: "Pangong to Leh: Return via Chang La Pass (5,360m). Evening free to explore Leh Market." },
          { time: "Day 5", desc: "Departure: Check-out and transfer to Leh Airport (IXL) for onward journey." }
        ]
      },
      {
        title: "Ladakh Odyssey: High Passes & Beyond",
        subtitle: "7N/8D",
        items: [
          { time: "Day 0", desc: "Arrival in Leh (3,500m): Reach Leh Airport (IXL), transfer to hotel, and rest to acclimatize. Evening stroll in Leh Market." },
          { time: "Day 1", desc: "Leh Sightseeing: Visit Shanti Stupa, Hall of Fame, Pathar Sahib Gurudwara, Magnetic Hill, and Sangam Point. Evening free." },
          { time: "Day 2", desc: "Leh to Nubra Valley (3,048m): Drive via Khardung La Pass. Visit Diskit Monastery and Hunder Sand Dunes. Optional camel ride or ATV tour." },
          { time: "Day 3", desc: "Nubra to Pangong Lake (4,250m): Drive via Shyok River. Check-in at lakeside camp and enjoy Pangong's beauty." },
          { time: "Day 4", desc: "Pangong to Hanle (4,250m): Drive via Chushul. Visit Hanle Monastery and stargaze under clear skies." },
          { time: "Day 5", desc: "Hanle to Umling La (5,350m): Drive to the world's highest motorable pass and return to Hanle. Evening relaxation." },
          { time: "Day 6", desc: "Hanle to Leh: Return via Chushul. Evening exploration of Leh Market." },
          { time: "Day 7", desc: "Departure: Check-out and transfer to Leh Airport (IXL) for departure." }
        ]
      }
    ],
    images: [Ladakh2, Ladakh3, Ladakh4],
    showBookingForm: false
  };

  return <ReusableComponent {...ladakhData} />;
};

export default Ladakh;