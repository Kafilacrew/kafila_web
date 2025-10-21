import ReusableComponent from '../components/ReusableComponent';
import RatanPara from '../assets/Treks/Ratangad/para.jpeg';
import Ratan1 from '../assets/Treks/Ratangad/A1.jpg';
import Ratan2 from '../assets/Treks/Ratangad/A2 (2).jpg';
import Ratan3 from '../assets/Treks/Ratangad/A3 (2).jpg';

const Ratangad = () => {
  const ratangadData = {
    title: "Ratangad Fort Trek",
    location: "Ratanwadi, Maharashtra",
    date: "October - November 2025",
    description: "Ratangad Fort, perched in the Sahyadri ranges, offers stunning views of Bhandardara backwaters and lush green valleys. Known for its iconic 'Nedhe' or natural hole in the mountain, it’s one of the most scenic and adventurous treks in Maharashtra.",
    parallaxImage: RatanPara,
    price: "₹1,499/-",
    slots: "👥 25 Explorers",
    schedule: "🕒 October - November 2025",
    boardingPoints: ["Pune"],
    historyText: "Ratangad, meaning ‘Jewel Fort’, is over 400 years old and is said to have been captured by Chhatrapati Shivaji Maharaj. The fort offers a mix of ancient Maratha history and breathtaking natural landscapes. A perfect one-day trek for beginners and seasoned trekkers alike.",
    includes: [
      "Transportation (Pune - Ratanwadi - Pune)",
      "Breakfast and Lunch",
      "Entry fees and permits",
      "Trek guide and support team",
      "First Aid kit"
    ],
    excludes: [
      "Personal expenses",
      "Bottled water and extra snacks",
      "Any activity not mentioned in inclusions"
    ],
    whatToCarry: [
      "Small backpack [20-30L]",
      "Comfortable trekking clothes",
      "Good trekking shoes",
      "Rain jacket / poncho (if required)",
      "Personal medicines",
      "Sunscreen, cap and sunglasses",
      "Water bottle (2L)",
      "Snacks / energy bars",
      "Power bank and chargers",
      "Torch or headlamp"
    ],
    journeyTitle: "Ratangad Trek Itinerary",
    itinerary: [
      { time: "10:00 pm(Previous Day)", desc: "Reporting at given pick-up points & depart towards Ratanwadi." },
      { time: "03:00 am", desc: "Reach Ratanwadi village and rest for a while." },
      { time: "07:30 am", desc: "Have breakfast & start hiking towards the fort after a short briefing session." },
      { time: "11:00 am", desc: "Explore Ratangad Fort and embrace the breathtaking views." },
      { time: "12:30 pm", desc: "Descend back to the base village." },
      { time: "01:30 pm", desc: "Have lunch & relax for some time." },
      { time: "05:30 pm", desc: "Start the return journey towards Pune." },
      { time: "08:30 pm", desc: "Reach Pune with wonderful memories." }
    ],
    images: [Ratan1, Ratan2, Ratan3]
  };

  return <ReusableComponent {...ratangadData} />;
};

export default Ratangad;
