import ReusableComponent from '../components/ReusableComponent';
import KuariPara from '../assets/Treks/Kuaripass/Para.jpg';
import Kuari1 from '../assets/Treks/Kuaripass/A1.jpg';
import Kuari2 from '../assets/Treks/Kuaripass/A2.jpg';
import Kuari3 from '../assets/Treks/Kuaripass/A3.jpg';

const KuariPass = () => {
  const kuariPassData = {
    title: "Kuari Pass Trek",
    location: "Kuari Pass, Uttarakhand",
    date: "20 - 30 January 2026",
    description:
      "The Kuari Pass Trek, known as the ‘Lord Curzon Trail’, offers one of the most breathtaking Himalayan experiences. It’s a blend of scenic trails, ancient forests, and mesmerizing 360° views of towering peaks like Nanda Devi, Kamet, Chaukhamba, and Trishul.",
    parallaxImage: KuariPara,
    price: "₹24,999/-",
    slots: "👥 50 Explorers",
    schedule: "🕒 20 - 30 January 2026",
    boardingPoints: ["Pune", "Mumbai"],
    historyText:
      "Discovered by Lord Curzon in 1905, the Kuari Pass Trek is one of India’s most scenic routes, traversing through ancient oak and rhododendron forests, charming villages, and snow-covered meadows. It offers panoramic Himalayan views, including Nanda Devi—the second-highest peak in India. Ideal for both beginners and seasoned trekkers, Kuari Pass provides a perfect balance of adventure and serenity.",
    includes: [
      "Transportation & accommodation from Pune to Pune",
      "All meals during trek (Base Camp to Base Camp)",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Experienced trek guides and local support staff",
      "Forest entry fees and necessary permits",
      "First aid medical assistance"
    ],
    excludes: [
      "Personal expenses",
      "Optional activities and excursions"
    ],
    whatToCarry: [
      "Hiking sunglasses",
      "Sunscreen, moisturizer, lip balm",
      "Thermal layers (top and bottom)",
      "Raincoat or poncho",
      "Insulated water bottle (minimum 750 ml)",
      "Headlamp with extra batteries",
      "Warm layers (min 3)",
      "Some handy cash",
      "Soap, toothbrush, mouthwash, wet wipes, toiletries",
      "Dry food items and energy bars",
      "General medicines and first aid essentials",
      "Camp sandals",
      "Sanitizer",
      "Quick-dry trek pants and t-shirts (2 pairs min)",
      "Rucksack (40–60L), waterproof trekking shoes",
      "Cotton socks (3 pairs), woollen socks (2 pairs)",
      "Trekking pole",
      "Plastic bags for wet clothes",
      "Camera, batteries, and power banks",
      "Down feather jacket, gloves, beanie"
    ],
    journeyTitle: "Kuari Pass Itinerary",
    itinerary: [
      { time: "Day 0: The Journey Begins", desc: "Departure from Pune Railway Station to Mumbai, enjoying scenic views and relaxation en route." },
      { time: "Day 1: Train to Haridwar", desc: "Board train from Mumbai to Haridwar, enjoy landscapes and prepare for the trek." },
      { time: "Day 2: Stay in Haridwar", desc: "Explore Haridwar, witness the Ganga Aarti at Har Ki Pauri, overnight stay." },
      { time: "Day 3: Haridwar to Joshimath", desc: "Drive through scenic Uttarakhand valleys via Devprayag, Rudraprayag, and Karnaprayag. Reach Joshimath by evening and rest." },
      { time: "Day 4: Joshimath to Guling Top", desc: "Drive to Dhak village and start the trek to Guling Top. Enjoy panoramic views of Nanda Devi and Dronagiri peaks. Overnight stay in tents." },
      { time: "Day 5: Guling Top to Kuari Base Camp", desc: "Trek through oak and rhododendron forests to Kuari Base Camp. Experience majestic Himalayan views along the way." },
      { time: "Day 6: Kuari Base Camp to Kuari Summit and Return", desc: "Early morning trek to Kuari Pass Summit. Witness stunning 360° views of peaks like Nanda Devi, Chaukhamba, Kamet, and Trishul. Return to Kuari Base Camp by evening." },
      { time: "Day 7: Kuari Base Camp to Joshimath", desc: "Descend back to Joshimath via the same route, celebrating the completion of the trek. Overnight stay in Joshimath." },
      { time: "Day 8: Joshimath to Rishikesh", desc: "Drive from Joshimath to Rishikesh (8–9 hours). Relax and enjoy the beautiful mountain landscapes." },
      { time: "Day 9: Adventure in Rishikesh", desc: "Enjoy adventure activities like white-water rafting and attend the evening Maha Aarti at Triveni Ghat." },
      { time: "Day 10: Rishikesh to Delhi", desc: "Travel from Rishikesh to Delhi, then board train back to Pune/Mumbai." },
      { time: "Day 11: Arrival in Pune/Mumbai", desc: "Arrive back home with unforgettable memories from the Kuari Pass Trek." }
    ],
    images: [Kuari1, Kuari2, Kuari3]
  };

  return <ReusableComponent {...kuariPassData} />;
};

export default KuariPass;
