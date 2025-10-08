import React from 'react';
import ReusableComponent from '../components/ReusableComponent';
import Para from '../assets/Treks/waterrappelling/para.jpg';
import A1 from '../assets/Treks/waterrappelling/1.jpg';
import A2 from '../assets/Treks/waterrappelling/2.jpg';
import A3 from '../assets/Treks/waterrappelling/3.jpg';

const WaterrapellingPage = () => {
  const waterrapellingData = {
    title: "Waterfall Rappelling",
    location: "Bhivpuri, Maharashtra",
    date: "August 2025 - September 2025",
    description: "Experience the thrill of waterfall rappelling at Bhivpuri! Conquer gushing cascades, trek through lush trails, and enjoy an action-packed adventure with Kafila Adventures.",
    parallaxImage: Para,
    price: "Regular - ₹ 1799/- & AC - ₹1999/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 August 2025 - September 2025",
    boardingPoints: [
      "Katraj Chowk",
      "Chandni Chowk",
      "Wakad Chowk"
    ],
    historyText: "Join KAFILA ADVENTURES upcoming waterfall rappelling event for an unforgettable adventure as we descend down breathtaking cascades surrounded by lush greenery. Our experienced guides ensure your safety while you conquer the excitement of rappelling amidst the serenity of a stunning waterfall. Don't miss this chance to create lasting memories and challenge your limits.",
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
    journeyTitle: "Waterfall Rapelling Itinerary",
    itinerary: [
      { time: "04:30 am", desc: "Reporting at the given pick-up points & depart towards the base village." },
      { time: "09:00 am", desc: "Reach the base village and freshen up." },
      { time: "10:00 am", desc: "Enjoy a delicious breakfast to fuel up for the adventure." },
      { time: "12:00 pm", desc: "Start trekking towards the rappelling patch amidst lush greenery." },
      { time: "02:30 pm", desc: "Complete the waterfall rappelling session and trek back to the base village." },
      { time: "03:30 pm", desc: "Relish a wholesome lunch and relax for a while." },
      { time: "04:30 pm", desc: "Start the return trip towards Pune." },
      { time: "09:00 pm", desc: "Reach Pune with memories of an adventurous day." }
    ],
    images: [A1, A2, A3],
    showBookingForm: true
  };

  return <ReusableComponent {...waterrapellingData} />;
};

export default WaterrapellingPage;
