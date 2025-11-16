import ReusableComponent from '../components/ReusableComponent';
import BhairavPara from '../assets/Treks/Bhairavgad/Para.jpg';
import Bhairav1 from '../assets/Treks/Bhairavgad/AA1.jpg';
import Bhairav2 from '../assets/Treks/Bhairavgad/AA2.jpg';
import Bhairav3 from '../assets/Treks/Bhairavgad/AA3.jpg';

const Bhairavgad = () => {
  const bhairavgadData = {
    title: "Bhairavgad Trek",
    location: "Bhairavgad, Maharashtra",
    date: "⏱︎ November - December 2025",
    description:
      "Experience one of the most thrilling climbs in the Sahyadris with the Bhairavgad Trek — known for its vertical rock patches, breathtaking ridge walks, and adrenaline-pumping ascents. A perfect blend of challenge, beauty, and pure adventure.",
    parallaxImage: BhairavPara,
    price: "₹1,699/-",
    slots: "👥 30 Explorers",
    schedule: "🕒 November - December 2025",
    boardingPoints: [
      "JM Corner, Deccan",
      "Nashik Phata",
      "Bhosari",
      "Chakan Chowk",
      "Moshi"
    ],
    historyText:
      "Bhairavgad is a prominent fort in the Sahyadri range, known for its rugged cliffs and ancient Shivling carved at its peak. Built centuries ago to protect the surrounding valleys, the fort stands as a testament to Maratha architecture and strategic defense. Its steep rock faces draw trekkers and climbers from all over Maharashtra seeking a challenging yet rewarding experience.",
    trekDetails: {
      baseVillage: "Moroshi / Shirpunje (varies by route)",
      altitude: "3,750 ft (approx.)",
      difficulty: "Moderate to Difficult",
      duration: "1 Night, 1 Day",
      bestSeason: "October to February"
    },
    includes: [
      "Transport from Pune to Pune",
      "1 Breakfast and 1 Lunch",
      "First Aid",
      "Technical Expertise & Equipment (if needed)",
      "Professional Trek Leader"
    ],
    excludes: [
      "Personal expenses",
      "Bottled water, snacks",
      "Anything not mentioned in the inclusions"
    ],
    whatToCarry: [
      "Backpack (30-40L)",
      "Trekking shoes (high grip recommended)",
      "Full sleeves trekking t-shirt",
      "Full trekking pants",
      "Poncho / Raincoat",
      "2 pairs of socks",
      "Warm jacket",
      "Cap / Hat",
      "Minimum 2-3L water",
      "Energy bars / Dry snacks",
      "ID proof",
      "Head torch",
      "Sunscreen",
      "Trekking gloves (optional)"
    ],
    journeyTitle: "The Day of Adventure",
    itinerary: [
      { time: "10:00 PM (Friday)", desc: "Start the journey towards the base village from respective boarding points." },
      { time: "03:00 AM", desc: "Arrive at the base village, freshen up, and gear up for the trek." },
      { time: "04:00 AM", desc: "Enjoy a hot breakfast to fuel your adventure." },
      { time: "04:30 AM", desc: "Quick introduction session and safety briefing before the trek begins." },
      { time: "07:00 AM", desc: "Reach the climbing patch & experience the adventure." },
      { time: "10:00 AM", desc: "Reach the summit and soak in the stunning sunrise with 360° Sahyadri views." },
      { time: "11:00 AM", desc: "Begin the descent, navigating carefully through rugged terrain." },
      { time: "04:00 PM", desc: "Reach the base village and celebrate your achievement." },
      { time: "05:00 PM", desc: "Relish a delicious local lunch." },
      { time: "06:00 PM", desc: "Start the return journey to Pune." },
      { time: "11:00 PM", desc: "Reach Pune with hearts full of memories." }
    ],
    note:
      "Timings may slightly vary depending on weather and crowd conditions. Please follow the instructions of trek leaders and maintain safety throughout.",
    images: [Bhairav1, Bhairav2, Bhairav3]
  };

  return <ReusableComponent {...bhairavgadData} />;
};

export default Bhairavgad;
