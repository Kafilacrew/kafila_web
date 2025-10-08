import React from 'react';
import ReusableComponent from '../components/ReusableComponent';
import Kpara from '../assets/Treks/Kalu/parallax.avif';
import K1 from '../assets/Treks/Kalu/kalu-1.webp';
import K2 from '../assets/Treks/Kalu/kalu-2.jpeg';
import K3 from '../assets/Treks/Kalu/kalu-3.avif';

const KaluWaterfallTrek = () => {
  const kaluData = {
    title: "Kalu Waterfall Trek",
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
      "Thitabi"
    ],
    historyText: "Kalu Waterfall is a spectacular seasonal waterfall located in the lush Malshej Ghat region of Maharashtra, originating from the Harishchandragad hills and cascading nearly 1,200 feet (≈370 m) in five distinct stages. It tumbles from the Deccan Plateau down into the Konkan, merging with the nearby Mahuli Falls to form the Kalu River.",
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
          { time: "10:30 pm", desc: "Reporting at Given pick up points & Depart towards Thitabi." }
        ]
      },
      {
        title: "Conquer Kalu Waterfall",
        subtitle: "Day 2",
        items: [
          { time: "04:30 am", desc: "Reach the Base Village" },
          { time: "05:30 am", desc: "Freshen up & Have Breakfast & start hiking on the trail after a short briefing session." },
          { time: "07:00 am", desc: "Leave for Kalu Waterfall after a brief time at the waterfall" },
          { time: "09:00 am", desc: "Reach Kalu after a short hike. Enjoy the mesmerising view." },
          { time: "11:00 am", desc: "Return towards the base camp for lunch." },
          { time: "01:30 pm", desc: "Proceed towards Pune after resting for some time." },
          { time: "08:30 pm", desc: "Reach Pune" }
        ]
      }
    ],
    images: [K1, K2, K3],
    showBookingForm: true
  };

  return <ReusableComponent {...kaluData} />;
};

export default KaluWaterfallTrek;
