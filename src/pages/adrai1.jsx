import React from 'react';
import ReusableComponent from '../components/ReusableComponent';
import Kpara from '../assets/Treks/AdraiJungle/Adrai-main.webp';
import K1 from '../assets/Treks/AdraiJungle/Adrai-1.webp';
import K2 from '../assets/Treks/AdraiJungle/Adrai-2.jpg';
import K3 from '../assets/Treks/AdraiJungle/adrai-3.webp';

const AdraiJungleTrek = () => {
  const adraiData = {
    title: "Aadrai Jungle Trek",
    location: "Malshej, Maharashtra",
    date: "August-September, 2025",
    description: "Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.",
    parallaxImage: Kpara,
    price: "₹ 1399/-",
    slots: "👥 30 Explorers",
    schedule: "🕒 August-September 2025",
    boardingPoints: [
      "Swargate",
      "Good Luck Chowk",
      "Khadki Railway Station",
      "Nashik Phata"
    ],
    historyText: "Aadrai Jungle is a hidden gem nestled in the Malshej Ghat region, offering a serene trek through dense forest, cascading waterfalls, and ancient caves. Perfect during the monsoon, it’s a nature lover’s paradise surrounded by untouched wilderness.",
    includes: [
      "Transport from Pune to Pune",
      "1 Breakfast and 1 lunch",
      "Forest Passes",
      "First Aid",
      "Guide charges"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Trekking Shoes [Good Grip]",
      "Full Sleeves Trekking T-Shirt",
      "Poncho/Raincoat",
      "Two Socks Pair",
      "Winter Wear",
      "Towel",
      "Chappal/Sandals",
      "Minimum 2-3L Water",
      "Dry Food Items",
      "Valid Govt. ID",
      "Sunglasses",
      "Cap/Hat",
      "Sunscreen"
    ],
    itineraries: [
      {
        title: "The Journey Begins",
        subtitle: "Day 1",
        items: [
          { time: "10:30 pm", desc: "Reporting at Given pick up points & Depart towards Khireshwar." }
        ]
      },
      {
        title: "Conquer Aadrai Jungle",
        subtitle: "Day 2",
        items: [
          { time: "05:00 am", desc: "Reach the Base Village" },
          { time: "06:00 am", desc: "Freshen up & Have Breakfast & start the trail after a short briefing session. Enjoy the Trail & Aadrai Jungle!: Experience the beauty of nature as we hike and explore the Aadrai Jungle." },
          { time: "01:30 pm", desc: "Return towards the base village after exploring." },
          { time: "02:30 pm", desc: "Have lunch and take some time to rest." },
          { time: "03:30 pm", desc: "Begin our return journey to Pune." },
          { time: "09:00 pm", desc: "Reach Pune." }
        ]
      }
    ],
    images: [K1, K2, K3],
    showBookingForm: true
  };

  return <ReusableComponent {...adraiData} />;
};

export default AdraiJungleTrek;
