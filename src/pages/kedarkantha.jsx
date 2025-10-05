import ReusableComponent from '../components/ReusableComponent';
import KedarkanthaPara from '../assets/Treks/Kedarkantha/Para.jpg';
import Ked1 from '../assets/Treks/Kedarkantha/A1.jpg';
import Ked2 from '../assets/Treks/Kedarkantha/A2.jpg';
import Ked3 from '../assets/Treks/Kedarkantha/A3.jpg';

const Kedarkantha = () => {
  const kedarkanthaData = {
    title: "Kedarkantha Trek",
    location: "Kedarkantha, Uttarakhand",
    date: "12 Days - January 2026",
    description: "Kedarkantha is a fun winter trek perfect for adventure seekers of all levels. Experience snow-covered pine forests, 360° Himalayan views, and easy-to-trek peaks with breathtaking vistas.",
    parallaxImage: KedarkanthaPara,
    price: "₹19,999/-",
    slots: "👥 50 Explorers",
    schedule: "🕒 January 2026",
    boardingPoints: ["Pune", "Mumbai"],
    historyText: "Kedarkantha offers a blend of adventure and serenity. From mesmerizing campsites and snow-clad forests to the chance to witness peaks like Swargarohini, Black Peak, and Bandarpoonch, this trek is ideal for beginners and experienced trekkers alike.",
    includes: [
      "Transportation & accommodation from Pune to Pune",
      "Rishikesh Rafting - 26kms",
      "Meals along the trek route from Base Camp to Base Camp",
      "Sleeping bag, mattress, tents, crampons",
      "Outdoor experts, guide, cook, and support staff",
      "Essential entry fees and permits",
      "First aid medical kit"
    ],
    excludes: [
      "Personal expenses",
      "Optional excursions"
    ],
    whatToCarry: [
      "Hiking sunglasses",
      "Sunscreen, moisturizer, lip balm",
      "Thermal layers covering hands, ears, neck, rest",
      "Poncho, rain cover/coats",
      "Thermal/insulated water bottle (at least 750 ml)",
      "Headlamp with extra batteries",
      "Warm layers (min 3)",
      "Some handy cash",
      "Soap, toothbrush/mouthwash, wet wipes, toiletries",
      "Dry food items",
      "General medicines and first aid essentials",
      "Camp sandals",
      "Sanitizer",
      "Quick dry trek pants, t-shirts (2 pairs min.), undergarments",
      "Rucksack (40-60L), waterproof shoes",
      "Cotton socks (3 pairs), thermal socks (2 pairs)",
      "Trekking pole",
      "Plastic bags",
      "Camera, batteries, power banks",
      "Down feather jackets, thermals (top and bottom)",
      "Waterproof gloves"
    ],
    journeyTitle: "Kedarkantha Trek Itinerary",
    itinerary: [
      { time: "Day 1: The Journey Begins", desc: "Departure from Pune to Mumbai Railway Station." },
      { time: "Day 2: Train to Haridwar", desc: "Boarding train towards Haridwar from Bandra." },
      { time: "Day 3: Stay in Haridwar", desc: "Check into hotel, enjoy Ganga Aarti at Har Ki Pauri in the evening." },
      { time: "Day 4: Haridwar to Sankri", desc: "Drive to Sankri (6400 FT), the last road head to Govind Wildlife Sanctuary. Overnight at local guest house." },
      { time: "Day 5: Sankri to Juda Ka Taal", desc: "5 km trek through pine forests to Juda Ka Taal campsite. Enjoy scenic views and overnight camp." },
      { time: "Day 6: Juda Ka Taal to Kedarkantha Base Camp", desc: "4 km trek ascending through pine forests and meadows. Camp overnight at Kedarkantha base camp." },
      { time: "Day 7: Summit Kedarkantha & Trek to Hargaon", desc: "Summit attempt before sunrise, panoramic views of Swargarohini, Black Peak, Bandarpoonch. Descend to Hargaon campsite." },
      { time: "Day 8: Hargaon to Sankri", desc: "Leisurely trek of 6 km back to Sankri through pine forests and scenic villages." },
      { time: "Day 9: Sankri to Rishikesh", desc: "Drive 8-9 hours to Rishikesh, reflecting on the trek's adventures." },
      { time: "Day 10: Adventure in Rishikesh", desc: "Optional adventure activities and white water rafting. Visit Triveni Ghat and enjoy evening Aarti." },
      { time: "Day 11: Rishikesh to Delhi", desc: "Travel to Delhi and board train back to Pune/Mumbai." },
      { time: "Day 12: Arrival in Pune/Mumbai", desc: "Reach home with cherished memories of the trek and the Himalayan adventure." }
    ],
    images: [Ked1, Ked2, Ked3]
  };

  return <ReusableComponent {...kedarkanthaData} />;
};

export default Kedarkantha;
