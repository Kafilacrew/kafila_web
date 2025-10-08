import React from 'react';
import ReusableComponent from '../components/ReusableComponent';
import Kpara from '../assets/Treks/Visapur/para.jpg';
import K1 from '../assets/Treks/Visapur/visapur-1.webp';
import K2 from '../assets/Treks/Visapur/visapur-2.webp';
import K3 from '../assets/Treks/Visapur/visapur-3.jpg';

const VisapurFortTrek = () => {
  const visapurData = {
    title: "Visapur Fort Trek",
    location: "Pune, Maharashtra",
    date: "August-September, 2025",
    description: "Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.",
    parallaxImage: Kpara,
    price: "₹ 899/-",
    slots: "👥 30 Explorers",
    schedule: "🕒 August-September, 2025",
    boardingPoints: [
      "Khadki Railway Station",
      "Patan"
    ],
    historyText: "Visapur Fort is a scenic hill fort rising to 3,556 ft (1,084 m) above sea level, located about 60 km from Pune and 100 km from Mumbai along the Western Ghats. It forms a twin with nearby Lohagad Fort and offers panoramic views, historic ruins, and lush monsoon beauty.",
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
    journeyTitle: "Visapur Fort Trek Itinerary",
    itinerary: [
        { time: "04:30 am", desc: "Reporting at respective Boarding points & Depart towards Base." },
          { time: "07:00 am", desc: "Reach the Base Village." },
          { time: "08:00 am", desc: "Freshen up & Have Breakfast & start hiking on the trail after a short briefing session." },
          { time: "09:00 am", desc: "Reach Visapur Fort after a short hike. Enjoy the mesmerising view." },
          { time: "11:00 am", desc: "Return towards the base camp for lunch." },
          { time: "01:00 pm", desc: "Proceed towards Pune after resting for some time." },
          { time: "04:30 pm", desc: "Reach Pune." }
    ],
    
    images: [K1, K2, K3],
    showBookingForm: true
  };

  return <ReusableComponent {...visapurData} />;
};

export default VisapurFortTrek;
