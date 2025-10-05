import ReusableComponent from '../components/ReusableComponent';
import Kedarpara from '../assets/Treks/Kedarnath/kedarpara.jpg';
import Kedar1 from '../assets/Treks/Kedarnath/Kedar1.jpg';
import Kedar2 from '../assets/Treks/Kedarnath/kedar1.jpeg';
import Kedar3 from '../assets/Treks/Kedarnath/kedar3.jpg';

const Kedarnath = () => {
  const kedarnathData = {
    title: "Kedarnath Backpacking",
    location: "Kedarnath",
    date: "6th-14th October 2025",
    description: "Kedarnath is a sacred town located in the Indian state of Uttarakhand, nestled in the majestic Garhwal Himalayan range. It is one of the most revered pilgrimage sites in India and holds immense religious significance for Hindus, especially followers of Lord Shiva.",
    parallaxImage: Kedarpara,
    price: "₹14,999/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 September 2025-October 2025",
    boardingPoints: ["Delhi"],
    historyText: "Kedarnath is a soul-stirring blend of spirituality and adventure, nestled in the heart of the Himalayas. The 16 km uphill trek from Gaurikund takes you through rugged terrains, roaring rivers, and breathtaking alpine views. At 3,583 meters, the ancient Kedarnath Temple stands resilient against time and nature. Whether you're chasing divine peace or mountain thrills, this journey transforms you. It's not just a trip — it's an experience that stays with you forever.",
    includes: [
      "Transportation & accommodation",
      "Meals along the trek route from the Base Camp to Base Camp",
      "Sleeping bag, mattress, tents, crampons.",
      "Outdoor experts, guide, cook and support staff",
      "Essential entry fees and permits",
      "First Aid medical kit"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Thermal wear (inner layers)",
      "Fleece jackets and windcheaters",
      "Waterproof and insulated gloves",
      "Woolen caps, mufflers, and socks",
      "Comfortable trekking shoes",
      "Valid ID proof",
      "Personal medicines (headache, fever, vomiting, stomach issues, pain relief gel/spray, antifungal cream)",
      "Sunglasses with UV protection",
      "Sunscreen lotion (SPF 50+), lip balm, and moisturizer",
      "Reusable water bottles (Thermal/Insulated, 750ml+)",
      "Headlamp or flashlight with extra batteries",
      "Camera to capture memories",
      "Power banks and chargers",
      "Head torch or simple handheld torch",
      "Snacks and energy bars",
      "Quick dry trek pants, t-shirts (2 pairs minimum), and undergarments",
      "Rain poncho or waterproof raincoat/cover",
      "Cotton socks (3 pairs) and thermal socks (2 pairs)",
      "Trekking pole",
      "Plastic bags for wet/dirty clothes",
      "Camp sandals",
      "Toiletries (soap, toothbrush/mouthwash, wet wipes, sanitizer)",
      "Down feather jackets and warm layers (minimum 3 layers)",
      "Cash for emergencies"
    ],
    journeyTitle: "Kedarnath Itinerary",
    itinerary: [
      { time: "Day 1: Journey Begins – Pune to Haridwar", desc: "Our adventure begins from Pune as we make our way to Mumbai by train or private vehicle. From Mumbai, we board our train to the spiritual gateway of the north — Haridwar." },
      { time: "Day 2: Arrival in Haridwar | Explore the Sacred Town", desc: "Upon arrival in Haridwar, we check into our hotel and take some time to rest. Later, we head out to explore this holy town — visiting the serene Har Ki Pauri Ghat and the hilltop Mansa Devi Temple. As the sun sets, we witness the mesmerizing Ganga Aarti, a spiritual experience that stays with you forever. We return to our hotel for dinner and an overnight stay." },
      { time: "Day 3: Haridwar to Sonprayag | Scenic Drive through the Hills", desc: "We begin our scenic drive to Sonprayag, passing through picturesque towns like Rishikesh, Devprayag, Srinagar, and Rudraprayag, following the flow of the Ganga and Alaknanda rivers. By evening, we reach Sonprayag and check into our guesthouse, soaking in the crisp mountain air." },
      { time: "Day 4: Trek to Kedarnath | A Journey of Devotion and Beauty", desc: "We start early with a short drive to Gaurikund — the base of our trek. From here, we begin the uphill journey towards Kedarnath, traversing lush forests, scenic valleys, and river crossings. By late afternoon, we reach Kedarnath and check into our accommodation. As dusk falls, we attend the peaceful evening Aarti at the Kedarnath Temple. Overnight stay in Kedarnath." },
      { time: "Day 5: Morning Darshan | Trek Back to Sonprayag", desc: "We rise early for darshan at the Kedarnath Temple, embracing the divine atmosphere in the quiet morning hours. After some serene moments, we begin our descent back to Gaurikund and proceed to Sonprayag. We check in, rest, and rejuvenate after the long yet fulfilling day." },
      { time: "Day 6: Sonprayag to Rishikesh | Back to the Banks of the Ganga", desc: "After breakfast, we set off for Rishikesh. The route is lined with Himalayan landscapes and flowing rivers, making the drive picturesque and peaceful. By evening, we arrive in Rishikesh and settle into our hotel. The evening is free to explore riverside cafés or take a quiet stroll by the Ganga. Overnight stay in Rishikesh." },
      { time: "Day 7: Explore Rishikesh | Adventure & Spiritual Bliss", desc: "We spend the day soaking in the spiritual and vibrant vibes of Rishikesh — visiting Laxman Jhula, Ram Jhula, the Beatles Ashram, and colorful local markets. For thrill-seekers, we indulge in the exhilarating river rafting experience. In the evening, we gather at Triveni Ghat for the soulful Ganga Aarti. Overnight stay in Rishikesh." },
      { time: "Day 8: Rishikesh to Delhi | Train to Pune", desc: "After breakfast, we begin our return journey with a drive to Delhi. From there, we board our train back to Pune. The journey offers time to relax, reflect, and relive the beautiful memories we've made." },
      { time: "Day 9: Homecoming | Arrive in Pune", desc: "We arrive back in Pune, our hearts full of blessings, our minds refreshed by the mountains, and our spirits uplifted by the divine and adventurous experiences of the past few days." }
    ],
    images: [Kedar1, Kedar2, Kedar3]
  };

  return <ReusableComponent {...kedarnathData} />;
};

export default Kedarnath;