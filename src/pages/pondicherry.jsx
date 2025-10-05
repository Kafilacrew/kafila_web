import ReusableComponent from '../components/ReusableComponent';
import PondiPara from '../assets/Treks/Pondicherry/Pondipara.jpg';
import Pondi1 from '../assets/Treks/Pondicherry/Pondi1.jpg';
import Pondi2 from '../assets/Treks/Pondicherry/pondi2.jpg';
import Pondi3 from '../assets/Treks/Pondicherry/pondi3.jpg';

const Pondicherry = () => {
  const pondicherryData = {
    title: "Pondicherry Backpacking",
    location: "Pondicherry, Tamil Nadu",
    date: "23rd - 27th October 2025",
    description:
      "Pondicherry, the French capital of India, offers a unique blend of coastal charm, vibrant culture, and spiritual calm. With its serene beaches, colorful French architecture, and peaceful ashrams, Pondicherry is the perfect destination for backpackers seeking both relaxation and exploration.",
    parallaxImage: PondiPara,
    price: "₹7,499/-",
    slots: "👥 20 Explorers",
    schedule: "🕒 October 2025",
    boardingPoints: ["Pune", "Mumbai"],
    historyText:
      "Once a French colonial settlement, Pondicherry beautifully blends Indian warmth with European aesthetics. Its cobbled streets, pastel-colored houses, and peaceful seashores make it an enchanting escape from the urban rush. Whether you’re walking through White Town, soaking up sunrise at Rock Beach, or exploring the artistic vibes of Auroville, Pondicherry promises a soulful experience that rejuvenates the mind and spirit.",
    includes: [
      "Travel from Pune/Mumbai to Pondicherry and back",
      "Accommodation on a sharing basis",
      "Breakfast and dinner included",
      "Local sightseeing and guided exploration",
      "Beach activities and entry fees",
      "Trip captain and basic first aid support",
    ],
    excludes: [
      "Lunch and personal expenses",
      "Optional adventure activities",
      "Anything not mentioned in the inclusions",
    ],
    whatToCarry: [
      "Valid ID proof (Aadhar card)",
      "Comfortable cotton clothes and flip-flops",
      "Cap, sunglasses, and sunscreen",
      "Personal medicines and toiletries",
      "Reusable water bottle (1L minimum)",
      "Power bank and chargers",
      "Light backpack for day travel",
      "Camera for capturing memories",
      "Snacks and energy bars",
      "Raincoat or poncho (in case of rain)",
      "Cash for local shopping or food",
    ],
    journeyTitle: "Pondicherry Itinerary",
    itinerary: [
      {
        time: "Day 1: Departure from Pune/Mumbai",
        desc: "We begin our exciting coastal journey by boarding the train or bus from Pune or Mumbai towards Chennai. Overnight travel filled with fun interactions and ice-breaking sessions.",
      },
      {
        time: "Day 2: Arrival in Chennai | Transfer to Pondicherry",
        desc: "Upon arrival in Chennai, we continue our scenic drive to Pondicherry. After check-in and a refreshing break, we visit the stunning Rock Beach for a calm sunset. In the evening, enjoy local cafes and vibrant French architecture in White Town.",
      },
      {
        time: "Day 3: Pondicherry Exploration | Auroville & Serenity Beach",
        desc: "Post breakfast, we head to the serene Auroville township and the iconic Matrimandir viewpoint. Later, unwind at Serenity Beach and experience water sports or beach volleyball. Evening is free for exploring cafés and shopping in the French Quarter.",
      },
      {
        time: "Day 4: Promenade Beach | Local Culture & Café Hopping",
        desc: "Wake up early to witness a beautiful sunrise at Promenade Beach. After breakfast, explore Sri Aurobindo Ashram, local temples, and the charming French lanes. Spend your evening café hopping or relaxing by the sea with your travel crew.",
      },
      {
        time: "Day 5: Return Journey to Pune/Mumbai",
        desc: "After breakfast, we bid farewell to the coastal beauty of Pondicherry and head back to Chennai to board our return train or bus. Take home memories, laughter, and friendships that last a lifetime.",
      },
    ],
    images: [Pondi1, Pondi2, Pondi3],
  };

  return <ReusableComponent {...pondicherryData} />;
};

export default Pondicherry;
