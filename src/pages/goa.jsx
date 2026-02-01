import ReusableComponent from '../components/ReusableComponent';
import GoaPara from '../assets/Treks/Goa/para.jpg';
import Goa1 from '../assets/Treks/Goa/A1.jpg';
import Goa2 from '../assets/Treks/Goa/A2.jpg';
import Goa3 from '../assets/Treks/Goa/A3.jpg';

const GoaBackpacking = () => {
  const goaData = {
    title: "Goa Backpacking",
    location: "Goa",
    date: "April 2026",
    description: "Goa is a backpacker’s paradise, offering a perfect mix of sun-kissed beaches, vibrant nightlife, and cultural heritage. From the serene sands of South Goa to the bustling vibes of North Goa, it’s an adventure filled with hidden gems like quaint forts, cliffside cafés, and picturesque trails.",
    parallaxImage: GoaPara,
    price: "₹12,999/-",
    slots: "👥 24 Explorers",
    schedule: "🕒 April 2026",
    boardingPoints: ["Pune", "Goa"],
    historyText: "At Kafila Adventures, we craft the ultimate backpacking experience in Goa, blending exploration, adventure, and relaxation. From South Goa’s serene beaches and hidden gems to North Goa’s vibrant nightlife and historic landmarks, every moment is unforgettable.",
    includes: [
      "Private transportation",
      "Comfortable accommodations on a triple sharing basis",
      "Meals (Breakfast & Dinner)",
      "Permits",
      "Sightseeing & Entry fees",
      "First aid support",
      "Professional tour guides"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Valid ID proof (Aadhar card)",
      "Comfortable cotton clothes and flip-flops",
      "Cap, sunglasses, and sunscreen",
      "Personal medicines and toiletries",
      "Reusable water bottle (1L minimum)",
      "Power bank and chargers",
      "Light backpack for day travel",
      "Camera for capturing memories",
      "Snacks and energy bars",
      "Raincoat or poncho (in case of rain)",
      "Cash for local shopping or food",
    ],
    journeyTitle: "Goa Backpacking Itinerary",
    itinerary: [
      {time:"Day 0: Departure from Pune",desc:"Begin your journey from Pune by boarding the Goa Express towards Margao."},
{time:"Day 1: South Goa Adventures",desc:"Arrive at Margao and take a bus to Palolem Beach. Check in to your stay and relax. In the evening, enjoy a boat ride to spot dolphins and visit Rajbagh Beach, Butterfly Beach, Honeymoon Beach, Turtle-shaped Rock, and Monkey Island."},
{time:"Day 2: Serene South Goa",desc:"Witness sunrise at Galgibagh Beach. Spend the afternoon at a scenic cliffside café. In the evening, visit Cabo de Rama Fort and Pebble Beach."},
{time:"Day 3: North Goa’s Heritage & Nightlife",desc:"Travel to Panjim in the morning. Visit famous churches, explore the colorful streets of Fontainhas, enjoy a ride along Parra Road, and experience the vibrant North Goa nightlife in the evening."},
{time:"Day 4: Historical North Goa",desc:"Visit Chapora Fort in the morning. Enjoy lunch at Artjuna Café and spend the rest of the day exploring nearby beaches and local markets."},
{time:"Day 5: Beach Bliss & Adventure in North Goa",desc:"Relax at Vagator Beach in the morning. Head to Baga Beach in the afternoon for water sports and activities. In the evening, begin your return journey to Pune."},
{time:"Day 6: Arrival in Pune",desc:"Reach Pune early morning, marking the end of an unforgettable backpacking experience."}
    ],
    images: [Goa1, Goa2, Goa3]
  };

  return <ReusableComponent {...goaData} />;
};

export default GoaBackpacking;
