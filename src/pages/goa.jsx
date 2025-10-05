import ReusableComponent from '../components/ReusableComponent';
import GoaPara from '../assets/Treks/Goa/para.jpg';
import Goa1 from '../assets/Treks/Goa/A1.jpg';
import Goa2 from '../assets/Treks/Goa/A2.jpg';
import Goa3 from '../assets/Treks/Goa/A3.jpg';

const GoaBackpacking = () => {
  const goaData = {
    title: "Goa Backpacking",
    location: "Goa",
    date: "March 2026",
    description: "Goa is a backpacker’s paradise, offering a perfect mix of sun-kissed beaches, vibrant nightlife, and cultural heritage. From the serene sands of South Goa to the bustling vibes of North Goa, it’s an adventure filled with hidden gems like quaint forts, cliffside cafés, and picturesque trails.",
    parallaxImage: GoaPara,
    price: "₹8,999/-",
    slots: "👥 24 Explorers",
    schedule: "🕒 March 2026",
    boardingPoints: ["Pune", "Goa"],
    historyText: "At Kafila Adventures, we craft the ultimate backpacking experience in Goa, blending exploration, adventure, and relaxation. From South Goa’s serene beaches and hidden gems to North Goa’s vibrant nightlife and historic landmarks, every moment is unforgettable.",
    includes: [
      "Private transportation",
      "Comfortable accommodations on a triple sharing basis",
      "Meals (Breakfast & Dinner)",
      "Permits",
      "Sightseeing & Entry fees",
      "Oxygen supply",
      "First aid support",
      "Professional tour guides"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Comfortable trekking clothes",
      "Fleece jackets and windcheaters",
      "Waterproof and insulated gloves",
      "Woolen caps, mufflers, and socks",
      "Comfortable shoes for walking",
      "Valid ID proof",
      "Personal medicines",
      "Sunglasses with UV protection",
      "Sunscreen lotion (SPF 50+), lip balm, and moisturizer",
      "Reusable water bottles",
      "Headlamp or flashlight with extra batteries",
      "Camera to capture memories",
      "Power banks and chargers",
      "Snacks and energy bars"
    ],
    journeyTitle: "Goa Backpacking Itinerary",
    itinerary: [
      { time: "Day 1: Departure from Pune", desc: "Begin your journey from Pune by boarding the Goa Express towards Margao." },
      { time: "Day 2: South Goa Adventures", desc: "Arrive at Margao and catch a bus to Palolem Beach. Check in to your stay and relax. Evening boat ride to spot dolphins, visit Rajbagh Beach, Butterfly Beach, Honeymoon Beach, Turtle-shaped Rock and Monkey Island." },
      { time: "Day 3: Serene South Goa", desc: "Sunrise at Galgibagh Beach, afternoon at a cliffside café, evening visit to Cabo de Rama Fort and Pebble Beach." },
      { time: "Day 4: North Goa’s Heritage and Nightlife", desc: "Morning travel to Panjim, visit churches, explore Fontainhas streets, ride along Parra Road, and enjoy North Goa nightlife in the evening." },
      { time: "Day 5: Historical North Goa", desc: "Visit Chapora Fort, lunch at Artjuna Café, explore Devil’s Finger viewpoint and Lower Aguada Fort." },
      { time: "Day 6: Beach Bliss in North Goa", desc: "Morning at Vagator Beach, afternoon at Baga Beach, and evening return journey to Pune." },
      { time: "Day 7: Arrival in Pune", desc: "Reach Pune early morning, ending the trip with cherished memories." }
    ],
    images: [Goa1, Goa2, Goa3]
  };

  return <ReusableComponent {...goaData} />;
};

export default GoaBackpacking;
