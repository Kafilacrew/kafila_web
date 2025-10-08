import ReusableComponent from '../components/ReusableComponent';
import Nanemachi1 from '../assets/Treks/Nanemachi/Nanemachi-parallex.webp';
import Nanemachi2 from '../assets/Treks/Nanemachi/Nanemachi-1.jpg';
import Nanemachi3 from '../assets/Treks/Nanemachi/Nanemachi-2.avif';
import Nanemachi4 from '../assets/Treks/Nanemachi/Nanemachi-3.jpg';

const Nanemachi = () => {
  const nanemachiData = {
    title: "Nanemachi Waterfall Trek",
    location: "Nanemachi, Maharashtra",
    date: "August-September 2025",
    description: "Embark on a thrilling adventure to the majestic Nanemachi Waterfall, a hidden gem in the lush jungles of Raigad, offering a serene escape amidst cascading waters and vibrant greenery.",
    parallaxImage: Nanemachi1,
    price: "₹ 1399/- (Ex. Pune)",
    slots: "👥 50 Explorers",
    schedule: "🕒 August-September 2025",
    boardingPoints: [
      "Swargate (Near Laxminarayan Theatre)",
      "Deccan Corner (Opp. to Vimlabai Garware College)",
      "Vanaz",
      "Waki Gavthan"
    ],
    historyText:
      "Nestled in the dense jungles of Raigad district in the Konkan region, Nanemachi Waterfall in Nanemachi village, Mahad, stands as the largest waterfall in Raigad, cascading from a staggering height of 400 feet. This breathtaking natural wonder, surrounded by lush greenery and rugged trails, captivates trekkers with its serene beauty and majestic views. A must-visit during the monsoon, the trek to Nanemachi and nearby Saatsada Waterfall offers an unforgettable adventure through the heart of nature’s splendor.",
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
          { time: "10:00 PM", desc: "Assemble at the designated pickup point in Pune and start the journey toward Waki Gavthan." }
          ]
      },
      {
        title: "Adventure Day",
        subtitle: "Day 2",
items: [
  { time: "4:30 am", desc: "Reach the base village of Waki Gavthan." },
  { time: "6:00 am", desc: "Freshen up, have breakfast, and start hiking after a short briefing session." },
  { time: "7:30 am", desc: "Reach Nanemachi Waterfall and embrace the stunning views." },
  { time: "9:00 am", desc: "Leave for Saatsada Waterfall after spending time at Nanemachi." },
  { time: "11:00 am", desc: "Arrive at Saatsada Waterfall after a short hike." },
  { time: "12:30 pm", desc: "Return to the base camp for lunch." },
  { time: "2:30 pm", desc: "Proceed towards Pune after resting." },
  { time: "8:30 pm", desc: "Reach Pune." }
]

      }
    ],
    images: [Nanemachi2, Nanemachi3, Nanemachi4],
    showBookingForm: true
  };

  return <ReusableComponent {...nanemachiData} />;
};

export default Nanemachi;
