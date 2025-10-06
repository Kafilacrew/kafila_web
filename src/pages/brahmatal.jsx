import ReusableComponent from '../components/ReusableComponent';
import BrahmPara from '../assets/Treks/Brahmatal/A4.jpg';
import Brahm1 from '../assets/Treks/Brahmatal/Image1.jpg';
import Brahm2 from '../assets/Treks/Brahmatal/Image2.jpg';
import Brahm3 from '../assets/Treks/Brahmatal/Image3.jpg';

const Brahmatal = () => {
  const brahmatalData = {
    title: "Brahmatal Trek",
    location: "Brahmatal, Uttarakhand",
    date: "January 2026",
    description: "The Brahmatal Trek, nestled in the Chamoli district of Uttarakhand, is a mesmerizing journey through the pristine landscapes of the Indian Himalayas. This trek is known for its breathtaking views, snow-laden trails, and serene alpine lakes.",
    parallaxImage: BrahmPara,
    price: "₹19,999/-",
    slots: "👥 50 Explorers",
    schedule: "January 2026",
    boardingPoints: ["Pune"],
    historyText: "The trek begins at Lohajung, a picturesque village that serves as the starting point for this adventure. Trekkers traverse through dense oak and rhododendron forests, quaint villages, and snow-covered paths, reaching the tranquil Bekaltal Lake. The journey continues to the Brahmatal base camp, with expansive meadows and panoramic vistas of towering peaks like Mt. Trishul and Mt. Nanda Ghunti. The final climb to the summit is challenging but rewarding, offering awe-inspiring views of the majestic Himalayan range.",
    includes: [
      "Transportation & accommodation from Pune to Pune",
      "Rishikesh Rafting - 26kms",
      "Meals along the trek route from the Base Camp to Base Camp",
      "Sleeping bag, mattress, tents, crampons",
      "Outdoor experts, guide, cook and support staff",
      "Essential entry fees and permits",
      "First Aid medical kit"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Hiking Sunglasses",
      "Sunscreen, Moisturizer, Lip Balm",
      "Thermal Layers covering Hands, Ears, Neck, Rest",
      "Poncho, Rain Cover/Coats",
      "Thermal / Insulated Water Bottle (at least 750 ml)",
      "Headlamp with extra batteries",
      "Warm Layers (min 3)",
      "Some handy cash",
      "Soap, Toothbrush / Mouth wash, wet wipes and other toiletries",
      "Dry Food items",
      "General medicines for headache, fever, vomiting, stomach upset, pain relief, antifungal cream",
      "Camp Sandal",
      "Sanitizer",
      "Quick Dry Trek Pants, T shirts (2 Pairs min.), Undergarments",
      "Rucksack (40-60 lit), Waterproof Shoes",
      "Cotton Socks (3 pairs), Thermal Socks (2 Pairs)",
      "Trekking Pole",
      "Plastic Bags",
      "Camera, Batteries, PowerBanks",
      "Down Feather Jackets, Thermals (Top and Bottom)",
      "Waterproof gloves"
    ],
    journeyTitle: "Brahmatal Itinerary",
    itinerary: [
      { time: "Day 1: The Journey Begins", desc: "Departure from Pune Railway Station to Mumbai, scenic views and relaxation en route." },
      { time: "Day 2: Train to Haridwar", desc: "Board train from Mumbai to Haridwar, enjoy landscapes and prepare for trek." },
      { time: "Day 3: Stay in Haridwar", desc: "Explore Haridwar, witness Ganga Aarti at Har Ki Pauri, overnight stay." },
      { time: "Day 4: Haridwar to Lohajung", desc: "12-hour drive through Uttarakhand, pass through Bheemtal, Almora, Kausani, arrive Lohajung by evening." },
      { time: "Day 5: Lohajung to Bekaltal", desc: "5-hour trek through forests and villages to Bekaltal, camp near Khopdaliya Lake." },
      { time: "Day 6: Bekaltal to Brahmatal Base Camp", desc: "Trek through oak & rhododendron forests, reach snow-covered meadows and Brahmatal Base Camp." },
      { time: "Day 7: Brahmatal Base Camp to Brahmatal Summit and Return", desc: "Early climb to Brahmatal Lake, summit ascent, panoramic Himalayan views, return to base camp." },
      { time: "Day 8: Brahmatal Base Camp to Lohajung", desc: "Descend back to Lohajung, enjoy scenic trails, overnight stay at guest house." },
      { time: "Day 9: Lohajung to Rishikesh", desc: "8-9 hour drive from Lohajung to Rishikesh, relax and enjoy landscapes." },
      { time: "Day 10: Adventure in Rishikesh", desc: "Adventure activities like white water rafting, evening Maha Aarti at Triveni Ghat." },
      { time: "Day 11: Rishikesh to Delhi", desc: "Travel from Rishikesh to Delhi, board train back to Pune/Mumbai." },
      { time: "Day 12: Arrival in Pune/Mumbai", desc: "Return to Pune/Mumbai, concluding the journey with cherished memories." }
    ],
    images: [Brahm1, Brahm2, Brahm3]
  };

  return <ReusableComponent {...brahmatalData} />;
};

export default Brahmatal;
