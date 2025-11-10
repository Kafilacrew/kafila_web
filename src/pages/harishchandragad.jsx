import ReusableComponent from '../components/ReusableComponent';
import HarishchandragadPara from '../assets/Treks/Harishchandragad/Para.jpg';
import Har1 from '../assets/Treks/Harishchandragad/AA1.jpg';
import Har2 from '../assets/Treks/Harishchandragad/AA2.jpg';
import Har3 from '../assets/Treks/Harishchandragad/AA3.jpg';

const Harishchandragad = () => {
  const harishchandragadData = {
    title: "Harishchandragad Trek",
    location: "Harishchandragad, Maharashtra",
    date: "⏱︎ November - December 2025",
    description:
      "Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.",
    parallaxImage: HarishchandragadPara,
    price: "₹1,299/- Non AC (Ex. Pune) | ₹1,499/- AC (Ex. Pune)",
    slots: "👥 30 Explorers",
    schedule: "🕒 November - December 2025",
    boardingPoints: [
      "Swargate (Opp. Laxminarayan Theatre)",
      "Good Luck Chowk",
      "Sancheti",
      "Khadki Railway Station",
      "Nashik Phata"
    ],
    historyText:
      "Harishchandragad is a historical hill fort situated in the Ahmednagar district of Maharashtra, standing tall at 1,424 meters. It is one of the most popular trekking destinations and a major attraction near Bhandardara. The fort dates back to the 6th century under the Kalchuri dynasty, with caves carved in the 11th century AD. Sage Changdev meditated here during the 14th century AD. Later, it was ruled by the Mughals before being captured by the Marathas in 1747 AD. The site holds archaeological and mythological importance, with references in ancient Puranas like Matsyapurana, Agnipurana, and Skandapurana. Harishchandragad features three peaks — Rohidas, Taramati, and Harishchandra — each offering a unique charm and scenic view of the Sahyadris.",
    trekDetails: {
      baseVillage: "Paachnai",
      altitude: "4,650 ft",
      difficulty: "Easy to Moderate",
      duration: "1 Night, 1 Day",
      bestSeason: "November to February"
    },
    includes: [
      "Transport from Pune to Pune",
      "1 Breakfast and 1 Lunch",
      "First Aid",
      "Professional Guides",
      "Forest Charges"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack (30-40L)",
      "Trekking shoes (good grip)",
      "Full sleeves trekking t-shirt",
      "Full trekking pants",
      "Poncho / Raincoat",
      "2 pairs of socks",
      "Winter wear",
      "Towel",
      "Chappals / Sandals",
      "Minimum 2-3L of water",
      "Dry food items",
      "Government ID card",
      "Sunglasses",
      "Cap / Hat",
      "Head torch or hand-held torch",
      "Sunscreen"
    ],
    journeyTitle: "The Journey",
    itinerary: [
      { time: "10:00 PM (Friday)", desc: "Assemble at the designated pickup point in Pune and start the journey toward Moroshi." },
      { time: "03:00 AM", desc: "Arrive at the base village, freshen up, and gear up for the trek." },
      { time: "04:00 AM", desc: "Enjoy a hot breakfast to fuel your adventure." },
      { time: "04:30 AM", desc: "Quick introduction session and safety briefing before the trek begins." },
      { time: "10:00 AM", desc: "Reach the summit and soak in the stunning sunrise and 360° views of the Sahyadri range. Snap some Insta-worthy photos!" },
      { time: "11:00 AM", desc: "Begin the descent, navigating carefully through the rugged terrain." },
      { time: "04:00 PM", desc: "Reach the base village and celebrate your achievement." },
      { time: "05:00 PM", desc: "Relish a delicious lunch of authentic local cuisine." },
      { time: "06:00 PM", desc: "Start your return journey to Pune with hearts full of memories and triumph." },
      { time: "11:00 PM", desc: "Arrive back in Pune." }
    ],
    note:
      "Please be punctual throughout the trek. In some cases, schedules may vary due to weather or terrain conditions, but your cooperation ensures a smooth experience.",
    images: [Har1, Har2, Har3]
  };

  return <ReusableComponent {...harishchandragadData} />;
};

export default Harishchandragad;
