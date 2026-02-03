import ReusableComponent from '../components/ReusableComponent';
import Vasota1 from '../assets/Treks/Harishchandragad/Para.jpg';
import Vasota2 from '../assets/Treks/Harishchandragad/AA1.jpg';
import Vasota3 from '../assets/Treks/Harishchandragad/AA2.jpg';
import Vasota4 from '../assets/Treks/Harishchandragad/AA3.jpg';

const VasotaFort = () => {
  const vasotaData = {
    title: "Vasota Fort Trek",
    location: "Bamnoli, Satara, Maharashtra",
    date: "October 2025 – February 2026",
    description: "Embark on an adventurous trek to the historic Vasota Fort nestled in the Koyna Wildlife Sanctuary. Experience a scenic boat ride across Shivsagar Lake, camp under the stars, and conquer the fort for breathtaking views of the Sahyadris.",
    parallaxImage: Vasota1,
    price: "₹ 1,999/- (Ex. Pune)",
    slots: "👥 40 Explorers",
    schedule: "🕒 Saturday–Sunday",
    boardingPoints: [
      "Swargate (Near Laxminarayan Theatre)",
      "Deccan Corner (Opp. to Vimlabai Garware College)",
      "Vanaz",
      "Hinjewadi"
    ],
    historyText:
      "Vasota Fort, also known as Vyaghragad, is a historic hill fort located in the Koyna Wildlife Sanctuary in Satara district. Perched at an elevation of about 3,800 feet, it offers stunning views of the surrounding forests and Shivsagar Lake. The fort was built by the Kolhapur Shilahara dynasty and later came under the Maratha rule. The trek involves a scenic boat ride across the lake to reach the base, making it one of the most unique and memorable treks in the Sahyadri range.",
    includes: [
      "Dinner & Breakfast",
      "Packed Lunch",
      "Night Camping Stay",
      "Boat Ride Charges",
      "Forest Entry & Permits",
      "Guide Charges",
      "First Aid Support"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Trekking Shoes [Good Grip]",
      "Full Sleeves Trekking T-Shirt",
      "Trekking Pants",
      "Two Socks Pair",
      "Light Jacket / Windcheater",
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
        title: "Departure & Camping",
        subtitle: "Day 1 – Saturday",
        items: [
          { time: "03:00 PM", desc: "Depart from Pune for Bamnoli." },
          { time: "08:00 PM", desc: "Reach Base Camp (Bamnoli) & check-in." },
          { time: "08:30 PM", desc: "Freshen up & relax." },
          { time: "09:00 PM", desc: "Dinner at campsite 🍽️" },
          { time: "10:00 PM", desc: "Campfire, bonding games & stargazing ✨🔥" },
          { time: "11:00 PM", desc: "Lights off & rest for the trek." }
        ]
      },
      {
        title: "Trek Day",
        subtitle: "Day 2 – Sunday",
        items: [
          { time: "06:00 AM", desc: "Wake-up call ☀️" },
          { time: "06:30 AM", desc: "Freshen up & breakfast." },
          { time: "07:30 AM", desc: "Start scenic boat ride towards Vasota trekking base 🚤" },
          { time: "09:00 AM", desc: "Reach trek base & begin ascent 🥾" },
          { time: "11:30 AM", desc: "Reach Vasota Fort, explore & photography 📸" },
          { time: "12:00 PM", desc: "Packed lunch at the fort." },
          { time: "01:00 PM", desc: "Start descent." },
          { time: "02:30 PM", desc: "Reach base safely & return by boat to campsite." },
          { time: "03:30 PM", desc: "Freshen up & prepare for return." },
          { time: "04:00 PM", desc: "Start return journey towards Pune." },
          { time: "09:30 PM", desc: "Reach Pune (Approx.)." }
        ]
      }
    ],
    images: [Vasota2, Vasota3, Vasota4],
    showBookingForm: true
  };

  return <ReusableComponent {...vasotaData} />;
};

export default VasotaFort;
