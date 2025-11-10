import ReusableComponent from '../components/ReusableComponent';
import HariharPara from '../assets/Treks/Harihar/Para.jpg';
import Hari1 from '../assets/Treks/Harihar/AA1.jpg';
import Hari2 from '../assets/Treks/Harihar/AA2.jpg';
import Hari3 from '../assets/Treks/Harihar/AA3.jpg';

const Harihar = () => {
  const hariharData = {
    title: "Harihar Fort Trek",
    location: "Harihar Fort, Maharashtra",
    date: "⏱︎ November - December 2025",
    description:
      "Escape into the heart of the Sahyadris with the Harihar Fort Trek — an iconic climb featuring steep rock-cut steps and breathtaking panoramas. This adventure blends thrill, history, and scenic beauty for an unforgettable trekking experience.",
    parallaxImage: HariharPara,
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
      "Harihar Fort, also known as Harshgad, is a striking triangular fort located near Nashik in Maharashtra. The fort sits at an elevation of about 3,676 feet and is famous for its nearly vertical staircase carved into rock — offering one of the most thrilling climbs in the Western Ghats. Built during the Yadava dynasty and later controlled by the Mughals and Marathas, Harihar Fort served as a strategic watchtower overlooking the trade routes between Nashik and the coastal regions. The fort provides panoramic views of peaks like Bhaskargad, Anjaneri, and Utwad, making it a must-visit destination for trekkers and history enthusiasts alike.",
    trekDetails: {
      baseVillage: "Nirgudpada",
      altitude: "3,676 ft",
      difficulty: "Moderate",
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
    journeyTitle: "The Day of Adventure",
    itinerary: [
      { time: "09:00 PM (Friday)", desc: "Start the journey towards the base village from respective boarding points." },
      { time: "04:00 AM", desc: "Reach the base village and rest for a while." },
      { time: "04:30 AM", desc: "Freshen up and have a light breakfast followed by a short briefing and warm-up session." },
      { time: "05:00 AM", desc: "Begin the trek towards Harihar Fort under the early morning sky." },
      { time: "07:30 AM", desc: "Reach the top and witness the stunning sunrise from the fort." },
      { time: "08:00 AM", desc: "Explore the fort, enjoy the panoramic views, and capture memorable pictures." },
      { time: "09:30 AM", desc: "Start descending carefully through the iconic steep rock-cut steps." },
      { time: "12:00 PM", desc: "Reach the base village and relish a delicious local lunch." },
      { time: "01:30 PM", desc: "Begin the return journey towards Pune." },
      { time: "09:00 PM", desc: "Arrive back in Pune with unforgettable memories of the Harihar adventure. 🌄" }
    ],
    note:
      "Please be punctual throughout the trek. Timings may slightly vary depending on traffic and weather conditions. Cooperation ensures a smooth and enjoyable experience for everyone.",
    images: [Hari1, Hari2, Hari3]
  };

  return <ReusableComponent {...hariharData} />;
};

export default Harihar;
