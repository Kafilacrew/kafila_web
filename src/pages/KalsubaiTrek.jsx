import ReusableComponent from '../components/ReusableComponent';
import KalsubaiPara from '../assets/Treks/Kalsubai/Para.jpg';
import Kal1 from '../assets/Treks/Kalsubai/A1.jpeg';
import Kal2 from '../assets/Treks/Kalsubai/A2.jpg';
import Kal3 from '../assets/Treks/Kalsubai/A3.jpg';

const Kalsubai = () => {
  const kalsubaiData = {
    title: "Kalsubai Peak Trek",
    location: "Kalsubai Fort, Maharashtra",
    date: "⏱︎ November-December 2025",
    description:
      "Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.",
    parallaxImage: KalsubaiPara,
    price: "₹1,399/-",
    slots: "👥 50 Explorers",
    schedule: "🕒 November-December 2025",
    boardingPoints: [
      "Katraj Chowk",
      "Swargate (Opp. Laxminarayan Theatre)",
      "Good Luck Chowk",
      "Sancheti",
      "Khadki Railway Station",
      "Nashik Phata"
    ],
    historyText:
      "Kalsubai, the highest peak of Maharashtra standing tall at 1,646 meters, is nestled within the Kalsubai Harishchandragad Wildlife Sanctuary. Known as the ‘Everest of Maharashtra’, this trek offers breathtaking views, a spiritual touch with the Kalsubai Temple at the summit, and a rewarding experience for all adventure lovers. The range, formed from the Deccan Plateau’s basaltic formations, holds immense geological and cultural significance.",
    includes: [
      "Transport from Pune to Pune",
      "1 Breakfast and 1 Lunch",
      "Forest Passes",
      "First Aid",
      "Guide Charges"
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
      { time: "07:30 PM (Friday)", desc: "Start the journey towards base village from respective boarding points." },
      { time: "02:30 AM", desc: "Reach the base village and take rest." },
      { time: "03:00 AM", desc: "After breakfast, begin the hike towards the peak with a short briefing and introduction session." },
      { time: "05:45 AM", desc: "Reach the summit and witness the mesmerizing sunrise." },
      { time: "07:30 AM", desc: "Start descending after exploring the peak and enjoying picture sessions." },
      { time: "11:30 AM", desc: "Reach the base safely and enjoy a well-deserved lunch." },
      { time: "02:30 PM", desc: "Begin the return journey towards Pune." },
      { time: "08:00 PM", desc: "Arrive back in Pune with unforgettable memories of the Kalsubai adventure." }
    ],
    images: [Kal1, Kal2, Kal3]
  };

  return <ReusableComponent {...kalsubaiData} />;
};

export default Kalsubai;
