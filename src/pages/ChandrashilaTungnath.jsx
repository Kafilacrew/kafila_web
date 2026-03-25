import ReusableComponent from '../components/ReusableComponent';
import TrekPara from '../assets/Treks/Chandrashila/Para.png';
import Trek1 from '../assets/Treks/Chandrashila/A1.png';
import Trek2 from '../assets/Treks/Chandrashila/A2.png';
import Trek3 from '../assets/Treks/Chandrashila/A3.png';

const ChandrashilaTungnath = () => {
  const pageData = {
    title: 'Chandrashila Tungnath Trek',
    location: 'Chopta, Uttarakhand',
    date: '11–19 June 2026',
    description:
      'Journey from the plains to the Himalayas: sacred Haridwar, the scenic meadows of Chopta, the world’s highest Shiva temple at Tungnath, and the 360° summit views from Chandrashila. Wind down with Deoriatal’s alpine lake and adventure in Rishikesh before heading home.',
    parallaxImage: TrekPara,
    price: '₹22,499/-',
    slots: '👥 Limited slots',
    schedule: '🕒 11–19 June 2026',
    boardingPoints: ['Pune', 'Mumbai', 'Delhi'],
    historyText:
      'Tungnath is the highest Shiva temple on earth; a short climb above it brings you to Chandrashila Top—with sweeping views of Nanda Devi, Trishul, Chaukhamba, and more. The trail from Chopta is beginner-friendly yet rewarding. Deoriatal mirrors the peaks on still mornings, and Rishikesh adds rafting and Ganga-side vibes before your return journey.',
    includes: [
      'Transportation & accommodation',
      'Meals during trek',
      'Trek guide & outdoor experts',
      'Entry fees & permits',
      'First aid medical kit',
      'River rafting in Rishikesh',
    ],
    excludes: ['Personal expenses', 'Optional excursions'],
    whatToCarry: [
      'Bags & gear: Backpack (30–40L), waterproof backpack cover, small daypack (optional), trekking poles',
      'Clothing: 2–3 quick-dry T-shirts, 1 warm jacket (fleece/down), 1 waterproof jacket or poncho, 1 thermal for night, trek pants (avoid jeans), extra pair of clothes, innerwear, 3–4 pairs of socks',
      'Footwear: Good trekking shoes (anti-slip, broken-in), slippers for stay',
      'Accessories: Cap or hat, sunglasses, lightweight gloves, buff or scarf',
      'Personal essentials: Sunscreen SPF 30+, lip balm, toiletries (toothbrush, small towel), wet wipes or tissues, hand sanitizer',
      'Medical: Personal medicines, basic first aid (band-aids, crepe bandage), pain relief spray, ORS / electrolytes',
      'Food & hydration: 1–2 water bottles or hydration pack, energy bars / dry fruits / chocolates, glucose powder',
      'Electronics & documents: Headlamp or torch (extra batteries), power bank, ID proof (mandatory)',
    ],
    itineraries: [
      {
        title: 'Pune → Bandra – Start the journey',
        subtitle: '11 June',
        items: [{ time: 'Travel', desc: 'Begin the journey from Pune towards Bandra to connect with your onward train. 🚆' }],
      },
      {
        title: 'Mumbai → Haridwar – Train journey',
        subtitle: '12 June',
        items: [{ time: 'Train', desc: 'Overnight / scenic rail journey from Mumbai towards Haridwar.' }],
      },
      {
        title: 'Haridwar – Ganga Aarti & city exploration',
        subtitle: '13 June',
        items: [
          {
            time: 'Haridwar',
            desc: 'Arrival at Haridwar. Check in and explore the city; witness the divine Ganga Aarti at the ghats. 🌊🪔',
          },
        ],
      },
      {
        title: 'Haridwar → Chopta – Himalayan drive',
        subtitle: '14 June',
        items: [
          {
            time: 'Drive',
            desc: 'Scenic drive through the hills to Chopta—the gateway to Tungnath and Chandrashila. 🏔️',
          },
        ],
      },
      {
        title: 'Chopta → Tungnath → Chandrashila → Chopta',
        subtitle: '15 June',
        items: [
          {
            time: 'Trek',
            desc: 'Trek to the highest Shiva temple at Tungnath and summit Chandrashila for breathtaking 360° Himalayan views. Return to Chopta. ⛰️✨',
          },
        ],
      },
      {
        title: 'Sari Village – Deoriatal Lake – Sari',
        subtitle: '16 June',
        items: [
          {
            time: 'Trek',
            desc: 'Short trek from Sari Village to the serene Deoriatal Lake and back—forest trails and mountain reflections. 🌿',
          },
        ],
      },
      {
        title: 'Sari → Rishikesh Drive',
        subtitle: '17 June',
        items: [{ time: 'Drive', desc: 'Drive to Rishikesh; leisure time by the river and local cafés.' }],
      },
      {
        title: 'Rishikesh – Rafting & exploration',
        subtitle: '18 June',
        items: [
          {
            time: 'Adventure',
            desc: 'River rafting on the Ganges and time to explore Rishikesh—ghats, cafes, and the yoga-town vibe. 🌊',
          },
        ],
      },
      {
        title: 'Rishikesh → Pune – Return journey',
        subtitle: '19 June',
        items: [{ time: 'Travel', desc: 'Depart from Rishikesh towards Pune by train (connections as per group booking). 🚆' }],
      },
      {
        title: 'Reach Pune',
        subtitle: 'Day 9 – Arrival',
        items: [
          {
            time: 'Home',
            desc: 'Arrival in Pune with memories of temples, peaks, lakes, and the Ganga. Trip ends.',
          },
        ],
      },
    ],
    images: [Trek1, Trek2, Trek3],
    showBookingForm: true,
  };

  return <ReusableComponent {...pageData} />;
};

export default ChandrashilaTungnath;
