import ReusableComponent from '../components/ReusableComponent';
import HampiPara from '../assets/Treks/Hampi/parallax.jpg';
import Hampi1 from '../assets/Treks/Hampi/h1.avif';
import Hampi2 from '../assets/Treks/Hampi/h2.jpg';
import Hampi3 from '../assets/Treks/Hampi/h3.webp';

const Hampi = () => {
  const hampiData = {
    title: "Hampi Backpacking",
    location: "Hampi, Karnataka",
    date: "17th - 20th October 2025",
    description:
      "Hampi, the ancient capital of the Vijayanagara Empire, is a UNESCO World Heritage site that blends history, culture, and surreal landscapes. Known for its boulder-strewn terrain, majestic ruins, and timeless charm, Hampi is a paradise for travelers seeking a mix of exploration and tranquility.",
    parallaxImage: HampiPara,
    price: "₹7,499/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 October 2025",
    boardingPoints: ["Pune", "Hubli"],
    historyText:
      "Once the mighty capital of the Vijayanagara Empire, Hampi is now an open-air museum where every rock and ruin tells a story of grandeur and resilience. From the magnificent Virupaksha Temple to the mystical boulder hills and the Tungabhadra River flowing through its heart — Hampi is a timeless blend of spirituality, adventure, and art. Whether you're exploring the ruins by bicycle, catching sunsets atop Matanga Hill, or wandering through the ancient bazaars, every corner of Hampi leaves you in awe.",
    includes: [
      "Travel from Pune to Hampi and back",
      "Accommodation on a sharing basis",
      "Breakfast and dinner included",
      "Guided exploration of Hampi ruins and major attractions",
      "Entry fees to monuments as per itinerary",
      "Trip captain and first aid support",
    ],
    excludes: [
      "Lunch and personal expenses",
      "Optional activities like coracle rides or cycling rentals",
      "Anything not mentioned in inclusions",
    ],
    whatToCarry: [
      "Valid ID proof (Aadhar card)",
      "Comfortable clothes for hot weather",
      "Cap, sunglasses, and sunscreen",
      "Personal medicines and toiletries",
      "Reusable water bottle (1L+)",
      "Power bank and chargers",
      "Daypack for exploration",
      "Camera for capturing the ruins",
      "Snacks and energy bars",
      "Trekking shoes or sturdy sandals",
      "Raincoat or poncho (optional)",
      "Cash for local shopping and cafés",
    ],
    journeyTitle: "Hampi Itinerary",
    itinerary: [
      {
        time: "Day 1: Departure from Pune | Overnight Journey",
        desc: "We kick off our Hampi adventure with an overnight journey from Pune. Get to know your fellow travelers as we head towards the land of boulders, ruins, and rich history.",
      },
      {
        time: "Day 2: Arrival in Hampi | Exploring Temples & Monuments",
        desc: "Upon arrival, we freshen up and begin exploring the architectural marvels of Hampi — Virupaksha Temple, Kadalekalu Ganesha, and the ancient Hampi Bazaar. As the sun sets, we hike up to Hemakuta Hill for a breathtaking panoramic view. Overnight stay in Hampi.",
      },
      {
        time: "Day 3: Hampi Island & Adventure Day",
        desc: "We start the day by crossing the Tungabhadra River to Hampi Island, popularly known as Hippie Island. Explore the laid-back cafés, try coracle rides, and unwind near Sanapur Lake. Later, enjoy sunset views from Anjaneya Hill — believed to be the birthplace of Lord Hanuman.",
      },
      {
        time: "Day 4: Local Market Visit | Return Journey",
        desc: "After breakfast, we stroll through the local handicraft markets and soak in the final glimpses of Hampi’s charm. We then begin our return journey to Pune with hearts full of memories and cameras full of stories.",
      },
    ],
    images: [Hampi1, Hampi2, Hampi3],
  };

  return <ReusableComponent {...hampiData} />;
};

export default Hampi;
