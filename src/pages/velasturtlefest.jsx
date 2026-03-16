import ReusableComponent from '../components/ReusableComponent';
import Velas1 from '../assets/Treks/Velas/Para.webp';
import Velas2 from '../assets/Treks/Velas/A1.jpg';
import Velas3 from '../assets/Treks/Velas/A2.webp';
import Velas4 from '../assets/Treks/Velas/A3.jpg';

const VelasTurtleFest = () => {
  const velasData = {
    title: "Velas Turtle Festival",
    location: "Velas Beach, Ratnagiri",
    date: "March-April 2026",
    description:
      "Join Kafila Adventures for a magical weekend at the Velas Turtle Festival. Witness the rare Olive Ridley turtle hatchlings making their first journey to the sea, explore coastal forts and temples, and enjoy authentic Konkani flavours on a relaxed beachside escape from Pune.",
    parallaxImage: Velas1,
    price: "Non-AC Bus: ₹1,899/- per person AC Bus: ₹2,399/- per person",
    slots: "⚠️ Limited Seats – Book Fast!",
    schedule: "March-April 2026",
    boardingPoints: [
      "Swargate",
      "Vanaz Metro Station",
      "Chandani Chowk"
    ],
    historyText:
      "Velas, a serene coastal village on the Konkan coastline, is famous for its annual Velas Turtle Festival – a community-driven conservation initiative that protects the endangered Olive Ridley turtles. Local villagers, in collaboration with conservation groups, safeguard turtle nests and create safe conditions for hatchlings to emerge and crawl naturally towards the sea. Beyond the heartwarming turtle sightings, visitors experience authentic Konkan hospitality, pristine beaches, and nearby heritage sites like Bankot Fort and Harihareshwar.",
    includes: [
      "Non-AC / AC bus travel from Pune (as per booking option)",
      "Homestay accommodation on sharing basis (basic rustic village setup)",
      "Konkani breakfast and lunch",
      "Velas Turtle Festival entry fees",
      "Visit to Bankot Fort",
      "Ferry ride & visit to Harihareshwar Temple",
      "Local guide and basic tour lead support",
      "First aid assistance",
    ],
    excludes: [
      "Personal expenses (snacks, bottled water, etc.)",
      "Any kind of insurance",
      "Anything not specifically mentioned in the inclusions",
    ],
    whatToCarry: [
      "Valid Government ID proof",
      "Comfortable clothing suitable for coastal weather",
      "Light jacket or shawl for the night journey",
      "Cap / hat and sunglasses",
      "Sunscreen and personal toiletries",
      "Reusable water bottle (at least 2L)",
      "Comfortable walking shoes / sandals",
      "Personal medication (if any)",
      "Small backpack for day belongings",
    ],
    itineraries: [
      {
        title: "Departure from Pune",
        subtitle: "Day 1",
        items: [
          {
            time: "08:00 PM",
            desc: "Assemble at Laxmi Narayan Theatre, Pune and meet your trek leaders & co-travellers.",
          },
          {
            time: "08:30 PM",
            desc: "Depart for Velas in Non-AC / AC bus with pick-ups from Swargate, Vanaz Metro and Chandani Chowk.",
          },
        ],
      },
      {
        title: "Velas Turtle Festival Experience",
        subtitle: "Day 2",
        items: [
          {
            time: "05:00 AM",
            desc: "Arrive at Velas Beach and soak in the peaceful Konkan sunrise.",
          },
          {
            time: "06:00 AM",
            desc: "Witness the magical turtle hatching and watch the tiny hatchlings walk towards the sea. 🐢🌊",
          },
          {
            time: "07:30 AM",
            desc: "Proceed to the village homestay and freshen up.",
          },
          {
            time: "11:00 AM",
            desc: "Relish a traditional Konkani breakfast prepared by locals.",
          },
          {
            time: "12:00 PM",
            desc: "Head to the historic Bankot Fort and explore scenic coastal views.",
          },
          {
            time: "12:30 PM",
            desc: "Enjoy a short ferry ride and visit Harihareshwar Temple.",
          },
          {
            time: "01:30 PM",
            desc: "Lunch break followed by the start of the return journey towards Pune.",
          },
          {
            time: "11:00 PM",
            desc: "Reach back to Pune with beautiful memories of the Velas Turtle Festival. ✅",
          },
        ],
      },
    ],
    images: [Velas2, Velas3, Velas4],
    showBookingForm: true
  };

  return <ReusableComponent {...velasData} />;
};

export default VelasTurtleFest;

