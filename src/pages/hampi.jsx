import ReusableComponent from '../components/ReusableComponent';
import HampiPara from '../assets/Treks/Hampi/parallax.jpg';
import Hampi1 from '../assets/Treks/Hampi/h1.avif';
import Hampi2 from '../assets/Treks/Hampi/h2.jpg';
import Hampi3 from '../assets/Treks/Hampi/h3.webp';

const Hampi = () => {
  const hampiData = {
    title: "Hampi Backpacking",
    location: "Hampi, Karnataka",
    date: "February 2026",
    description:
      "Hampi, the ancient capital of the Vijayanagara Empire, is a UNESCO World Heritage site that blends history, culture, and surreal landscapes. Known for its boulder-strewn terrain, majestic ruins, and timeless charm, Hampi is a paradise for travelers seeking a mix of exploration and tranquility.",
    parallaxImage: HampiPara,
    price: "₹8,999/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 February 2025",
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
        time: "Day 1: Departure and Travel Bonding",
        desc: "Begin your exciting journey as you depart for Hosapete by bus or train. Use this travel time to connect with your fellow travelers, share stories, and build camaraderie, setting the tone for the adventure ahead.",
      },
      {
        time: "Day 2: Exploring North Hampi",
        desc: "Arrive in Hosapete early morning and proceed to Hampi. Freshen up and enjoy a hearty breakfast. Trek to Anjanadri Hills, believed to be the birthplace of Lord Hanuman, and enjoy panoramic views. Later, indulge in a serene Coracle ride on Sanapur Lake, with optional cliff jumping for thrill seekers.",
      },
      {
        time: "Day 3: Discovering South Hampi",
        desc: "Start your day with a mesmerizing sunrise at Matanga Hill. After breakfast, explore key attractions including Virupaksha Temple, Badavalinga Temple, Underground Shiva Temple, Lotus Mahal, Hazara Rama Temple, Mahanavami Dibba, Queen's Bath, and Vittala Temple with its iconic Stone Chariot and musical pillars. End the day with a beautiful sunset capturing Hampi’s historic charm.",
      },
      {
        time: "Day 4: Exploring Badami",
        desc: "After an early breakfast, head to Badami to explore its exquisite rock-cut architecture. Visit Badami Caves showcasing Hindu, Jain, and Buddhist influences, Aihole for ancient temples, and Pattadakal — a UNESCO World Heritage site. Board your bus or train in the evening for the return journey to Pune.",
      },
      {
        time: "Day 5: Return to Pune",
        desc: "Arrive in Pune with unforgettable memories of your journey through Hampi and Badami. Relive the moments, cherish the connections made, and carry home stories to share with friends and family.",
      },
    ],
    images: [Hampi1, Hampi2, Hampi3],
  };

  return <ReusableComponent {...hampiData} />;
};

export default Hampi;
