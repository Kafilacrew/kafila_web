import ReusableComponent from '../components/ReusableComponent';
import BirPara from '../assets/Treks/Bir Billing/para.jpg';
import Bir1 from '../assets/Treks/Bir Billing/A1.jpg';
import Bir2 from '../assets/Treks/Bir Billing/A2.jpg';
import Bir3 from '../assets/Treks/Bir Billing/A3.jpg';

const birbilling = () => {
  const birBillingData = {
    title: "Bir Billing Backpacking",
    location: "Bir Billing",
    date: "December 2025 - New Year Special",
    description: "Tucked away in the Dhauladhar ranges, Bir Billing is a breathtaking blend of adventure and calm. Known for its world-class paragliding and peaceful charm, it’s a place where the sky feels closer and time slows down. Every view, every breeze here tells a story of freedom and wonder.",
    parallaxImage: BirPara,
    price: "₹16,999/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 December 2025 - New Year Special",
    boardingPoints: ["Pune", "Chandigarh"],
    historyText: "From soaring flights at Billing to tranquil trails and cozy cafés in Bir, every moment feels alive. Watch sunsets paint the valley, camp under starlit skies, and lose yourself in the mountain magic. Bir isn’t just a destination—it’s an experience that stays long after you’ve left.",
    includes: [
      "Transportation & accommodation",
      "Meals throughout the trip",
      "Paragliding adventure experience",
      "Trek to Bangoru Waterfalls",
      "Expert guides and support staff",
      "All necessary entry fees and permits",
      "First Aid medical kit"
    ],
    excludes: [
      "Personal expenses",
      "Optional activities outside itinerary"
    ],
    whatToCarry: [
      "Backpack [30-40L]",
      "Comfortable trekking clothes",
      "Hiking shoes",
      "Rain jacket or poncho",
      "Warm layers for cold evenings",
      "Personal medicines",
      "Sunscreen, sunglasses, and hat",
      "Water bottle",
      "Camera or phone for memories",
      "Power bank and chargers"
    ],
    journeyTitle: "Bir Billing Itinerary",
    itinerary: [
      { time: "Day 1: Pune to Chandigarh", desc: "We begin our journey from Pune to Chandigarh." },
      { time: "Day 2: Chandigarh to Bir", desc: "Travel from Chandigarh to Bir and settle in after the scenic drive." },
      { time: "Day 3: Exploring Bir", desc: "Spend the day enjoying Bir’s cozy cafés, local shops, and tranquil ambiance." },
      { time: "Day 4: Monastery Visits", desc: "Visit the famous monasteries, soak in the peaceful atmosphere and rich culture of Bir." },
      { time: "Day 5: Paragliding Adventure", desc: "Experience the thrill of paragliding over the majestic hills of Bir." },
      { time: "Day 6: Bangoru Waterfalls Trek", desc: "Trek to the beautiful Bangoru Waterfalls and later begin our return journey." },
      { time: "Day 7: Departure from Bir", desc: "Travel from Bir to Chandigarh and then head back towards Pune." },
      { time: "Day 8: Arrival in Pune", desc: "Reach Pune with hearts full of memories and experiences." }
    ],
    images: [Bir1, Bir2, Bir3]
  };

  return <ReusableComponent {...birBillingData} />;
};

export default birbilling;
