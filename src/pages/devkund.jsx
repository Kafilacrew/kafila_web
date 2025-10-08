import ReusableComponent from '../components/ReusableComponent';
import Devkund1 from '../assets/Treks/Devkund/Devkund-main.jpg';
import Devkund2 from '../assets/Treks/Devkund/devkund-2.webp';
import Devkund3 from '../assets/Treks/Devkund/devkund-2.jpg';

const DevkundTrek = () => {
  const devkundData = {
    title: "Devkund Waterfall Trek",
    location: "Devkund, Maharashtra",
    date: "August-September 2025",
    description: "Unveil the beauty of tropical bliss. From sun-kissed shores to vibrant cultural experiences, this journey promises you a solitary escape.",
    parallaxImage: Devkund1,
    price: "₹ 1399/- (Ex. Bhira)",
    slots: "👥 30 Explorers",
    schedule: "🕒 August-September 2025",
    boardingPoints: [
      "Swargate(Opp. Laxminarayan Theatre)",
      "Good Luck Chowk",
      "Khadki Railway Station",
      "Xion Mall"
    ],
    historyText:
      "Embark on this trekking expedition to the Devkund waterfall, known as the 'Bathing Pond of Gods'. Located near Bhira Village, Devkund Waterfall is one of the most beautiful waterfalls in India. Witness the amalgamation of three waterfalls, where you can witness the origin of the Kundalika River after trekking for 3 hours. Witness the beauty of the forests around the waterfall, and complete the trek with an experienced trek leader. You will also be able to see the beautiful Bhira dam and Tamhini Ghat during this trek. A guide is required as the trek goes through dense forests.",
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
          { time: "10:30 pm", desc: "Reporting at Given pick up points & Depart towards Bhira" }
        ]
      },
      {
        title: "Conquer Devkund",
        subtitle: "Day 2",
        items: [
          { time: "04:00 am", desc: "Reach Bhira" },
          { time: "07:30 am", desc: "Have Breakfast & start hiking towards the waterfall after a short briefing session" },
          { time: "11:00 am", desc: "Explore the Waterfall & embrace the views" },
          { time: "12:30 pm", desc: "Return towards base village" },
          { time: "03:30 pm", desc: "Have lunch & rest" },
          { time: "05:30 pm", desc: "Start the Return Journey towards Pune" },
          { time: "08:30 pm", desc: "Reach Pune" }
        ]
      }
    ],
    images: [Devkund1,Devkund2, Devkund3],
    showBookingForm: true
  };

  return <ReusableComponent {...devkundData} />;
};

export default DevkundTrek;
