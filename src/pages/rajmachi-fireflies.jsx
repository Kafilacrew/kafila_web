import ReusableComponent from '../components/ReusableComponent';
import NoRefundPolicy from '../components/NoRefundPolicy';
import Rajmachi1 from '../assets/Treks/Rajmachi/Rajmachi-Para.jpeg';
import Rajmachi2 from '../assets/Treks/Rajmachi/Rajmachi-1.jpeg';
import Rajmachi3 from '../assets/Treks/Rajmachi/Rajmachi-2.jpeg';
import Rajmachi4 from '../assets/Treks/Rajmachi/Rajmachi-3.jpeg';

const RajmachiFireflies = () => {
  const rajmacData = {
    title: "Rajmachi Fireflies Trek",
    location: "Maharashtra",
    date: "May–June 2025",
    description: "Experience the magical spectacle of fireflies illuminating the night at Rajmachi. Trek through the lush monsoon trails to Shrivardhan and Manaranjan forts, camp under the stars, and witness thousands of fireflies create a mesmerizing natural light show.",
    parallaxImage: Rajmachi1,
    price: "TBD",
    slots: "👥 25 Explorers",
    schedule: "🕒 Friday-Saturday/Saturday–Sunday",
    boardingPoints: [
      "Pune Railway Station",
      "Lonavala Railway Station",
    ],
    historyText:
      "Rajmachi is a historic village nestled in the Sahyadri range, home to two magnificent forts—Shrivardhan and Manaranjan. During the monsoon, the surrounding forests come alive with thousands of fireflies, creating an enchanting natural spectacle. The trek offers a perfect blend of history, adventure, and the magical experience of firefly watching under the starlit sky. The forts were strategically important during the Maratha era and offer panoramic views of the Western Ghats.",
    includes: [
      "Breakfast",
      "Snacks",
      "Dinner",
      "Forest Passes",
      "Guide Charges",
      "First Aid",
      "All necessary Permits",
      "Camping equipments"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Trekking Shoes [Good Grip]",
      "Full Sleeves Trekking T-Shirt",
      "Trekking Pants / Quick Dry",
      "Two Socks Pair",
      "Light Jacket / Windcheater",
      "Towel",
      "Chappal/Sandals",
      "Minimum 2-3L Water",
      "Dry Food Items",
      "Valid Govt. ID",
      "Torch / Headlamp",
      "Cap/Hat",
      "Sunscreen"
    ],
    itineraries: [
      {
        title: "Departure & Trek to Rajmachi",
        subtitle: "Day 1",
        items: [
          { time: "10:30 AM", desc: "Depart from pick up points." },
          { time: "01:00 PM", desc: "Drive to Udhewadi in a private vehicle." },
          { time: "02:00 PM", desc: "Arrive at Udhewadi, freshen up, and have snacks." },
          { time: "04:30 PM", desc: "Hike to Rajmachi (Shrivardhan)." },
          { time: "06:30 PM", desc: "Descend from Rajmachi, explore the fort." },
          { time: "08:30 PM", desc: "Experience the night camping under the stars ✨" },
          { time: "10:00 PM", desc: "Dinner, socialize, and stay in tents." }
        ]
      },
      {
        title: "Return To Pune",
        subtitle: "Day 2",
        items: [
          { time: "08:30 AM", desc: "Have Breakfast." },
          { time: "11:30 AM", desc: "Freshen up & leave for Pune." },
          { time: "02:30 PM", desc: "Reach Pune." }
        ]
      }
    ],
    images: [Rajmachi2, Rajmachi3, Rajmachi4],
    showBookingForm: true,
    refundPolicyComponent: <NoRefundPolicy />
  };

  return <ReusableComponent {...rajmacData} />;
};

export default RajmachiFireflies;
