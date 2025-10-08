import ReusableComponent from '../components/ReusableComponent';
import Apara from '../assets/Treks/Andarbhan/Andarban-Parallex.webp';
import A2 from '../assets/Treks/Andarbhan/Andarban-2.jpeg';
import A3 from '../assets/Treks/Andarbhan/Andarban-3.webp';

const Andharban = () => {
  const andarbanData = {
    title: "Andharban Jungle Trek",
    location: "Andharban, Maharashtra",
    date: "August-September 2025",
    description: "Unveil the beauty of tropical bliss. From misty forests to vibrant natural trails, this journey promises a serene escape into the heart of nature.",
    parallaxImage: Apara,
    price: "₹ 1399/- (Ex. Pune)",
    slots: "👥 25 Explorers",
    schedule: "🕒 August-September 2025",
    boardingPoints: [
      "Swargate (Opp. Laxminarayan Theatre)",
      "Deccan Corner (Opp. To Vimlabai Garware)",
      "Vanaz"
    ],
    historyText: "Andharban, meaning 'Dark Dense Forest', is a mesmerizing monsoon trek in the Sahyadri mountains, located near Pimpri, Maharashtra, approximately 16 km from Pune. Known as a trekker’s paradise, this trail takes you through misty, dense forests, lush green paths, and cascading waterfalls. The journey offers stunning views of the Kundalika Valley, Bhira Dam, and Tamhini Ghat ranges. With its serene ambiance and rich biodiversity, Andharban is an ideal escape for nature lovers and adventure enthusiasts, especially during the monsoon when the forest comes alive with vibrant greenery and fog-covered trails.",
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
          { time: "10:30 PM", desc: "Reporting at given pick-up points & depart towards Tamhini - Pimpri" }
        ]
      },
      {
        title: "Adventure Day",
        subtitle: "Day 2",
        items: [
          { time: "03:30 AM", desc: "Reach the base village of Pimpri, freshen up, and enjoy breakfast" },
          { time: "05:30 AM", desc: "Start trekking through the Dark Forest after a short briefing session" },
          { time: "12:30 PM", desc: "Arrive at Pimpri-Tamhini base village, have lunch, and rest" },
          { time: "03:00 PM", desc: "Begin return journey to Pune" },
          { time: "08:30 PM", desc: "Reach Pune" }
        ]
      }
    ],
    images: [Apara, A2, A3],
    showBookingForm: true
  };

  return <ReusableComponent {...andarbanData} />;
};

export default Andharban;
