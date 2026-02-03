import ReusableComponent from '../components/ReusableComponent';
import Sandhan1 from '../assets/Treks/Harishchandragad/Para.jpg';
import Sandhan2 from '../assets/Treks/Harishchandragad/AA1.jpg';
import Sandhan3 from '../assets/Treks/Harishchandragad/AA2.jpg';
import Sandhan4 from '../assets/Treks/Harishchandragad/AA3.jpg';

const Sandhanvalley = () => {
  const sandhanData = {
    title: "Sandhan Valley Trek",
    location: "Sandhan Valley, Maharashtra",
    date: "March-April, 2025",
    description: "Sandhan Valley, also known as the \"Valley of Shadows,\" is a stunning canyon near Bhandardara in Maharashtra. Known for its narrow rock walls and challenging descents, it offers adventure seekers a unique blend of trekking, rappelling, and river crossing amidst breathtaking natural beauty.",
    parallaxImage: Sandhan1,
    price: "₹ 799/- (Ex. Samrad) • ₹ 1,499/- Non AC Travel (Ex. Pune) • ₹ 1,699/- AC Travel (Ex. Pune)",
    slots: "👥 30 Explorers",
    schedule: "🕒 March-April 2025",
    boardingPoints: [
      "Swargate (Opp. Laxminarayan Theatre)",
      "Good Luck Chowk",
      "Sancheti",
      "Khadki Railway Station",
      "Nashik Phata"
    ],
    historyText:
      "The Sandhan Valley is a beautiful carved valley situated in the pristine Sahyadri ranges. Sandhan is located near the beautiful Bhandardara region near a village called Samrad. Famously known as the valley of Shadows, the Sandhan valley consists of a deep narrow rock floored ravine between the two high walls of a mountain range. Experience this exciting trekking experience where you get to partake in adventurous activities like rappelling, and rock-climbing, post which, you reach at the end of the valley. Witness a magnificent view of high cliffs & deep valleys. Trek Details: Base Village — Samrad | Altitude — 4,100 ft. | Difficulty — Moderate | Duration — 1 Night, 1 Day | Best Season — November to February.",
    includes: [
      "Transport from Pune to Pune",
      "Rappelling Charges",
      "1 Breakfast",
      "1 Lunch",
      "First Aid",
      "Professional guides",
      "Forest charges"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Trekking Shoes [Good grip]",
      "Full sleeves Trekking T-shirt",
      "Full Trekking Pants",
      "Poncho/Raincoat",
      "2 Socks Pair",
      "Winter wears",
      "Towels",
      "Chappals/Sandals",
      "Minimum 2-3 L Water",
      "Dry Food Items",
      "Govt. ID Card",
      "Sunglasses",
      "Cap/Hat",
      "Head torch or Simple hand held torch",
      "Sunscreen"
    ],
    itineraries: [
      {
        title: "The Journey Begins",
        subtitle: "Day 0",
        items: [
          { time: "10:00 PM", desc: "Assemble at the designated pickup point in Pune and start the journey toward Moroshi." }
        ]
      },
      {
        title: "Experience the Adventure",
        subtitle: "Day 1",
        items: [
          { time: "03:00 AM", desc: "Arrive at the base village, freshen up, and gear up for the trek." },
          { time: "04:00 AM", desc: "Enjoy a hot breakfast to fuel your adventure." },
          { time: "04:30 AM", desc: "Quick introduction session and safety briefing before the trek begins." },
          { time: "07:00 AM", desc: "Reach the rappelling patch & experience the adventure." },
          { time: "10:00 AM", desc: "Reach the summit and soak in the stunning sunrise and 360° views of the Sahyadri range. Snap some Insta-worthy photos!" },
          { time: "11:00 AM", desc: "Begin the descent, navigating carefully through the rugged terrain." },
          { time: "04:00 PM", desc: "Reach the base village and celebrate your achievement." },
          { time: "05:00 PM", desc: "Relish a delicious lunch of authentic local cuisine." },
          { time: "06:00 PM", desc: "Start your return journey to Pune with hearts full of memories and triumph." },
          { time: "11:00 PM", desc: "Reach Pune." },
          { time: "Note", desc: "Please be punctual throughout the trek. In some scenarios, our schedule might be delayed, but your cooperation is essential to ensure we stay on track." }
        ]
      }
    ],
    images: [Sandhan2, Sandhan3, Sandhan4],
    showBookingForm: true
  };

  return <ReusableComponent {...sandhanData} />;
};

export default Sandhanvalley;
