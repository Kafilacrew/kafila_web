import React from 'react';

const PassionateTeammates = () => {
    const teammates = [
      {
        name: "Mr. Sandeep Bhapkar",
        position: "Senior Mentor",
        description: "Mr.Sandeep is the embodiment of wisdom and experience. Always ready with guidance and a reassuring word, he supports those taking their first steps into the world of trekking. His unwavering support and calm demeanor inspire all of us to venture into the wild with confidence and curiosity.",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Dr. Suraj Bhoyar",
        position: "Senior Mentor",
        description: "Dr. Suraj's knowledge and passion for the outdoors make him an invaluable mentor. He combines his expertise with a genuine love for sharing the beauty of nature, always ensuring that every trek is as enriching as it is thrilling. His mentorship leaves a lasting impact on everyone lucky enough to work alongside him.",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Abhishek Nila",
        position: "Co-Founder, Operations Head",
        description: "Abhishek is the backbone of Kafila, ensuring that everything runs smoothly behind the scenes. His dedication to making each trek flawless allows everyone to immerse themselves fully in the experience. His work is a testament to his commitment to the Kafila community's growth and success.",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Shabdali Katphalkar",
        position: "Co-Founder, Experience Manager",
        description: "Shabdali's energy and enthusiasm are contagious. She has a rare ability to turn every moment into something memorable, making each trek feel like a new adventure. Her deep care for the community shines through in every experience she crafts, making everyone feel right at home in the wilderness",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Amey Gajpure",
        position: "Financial Planner",
        description: "Amey's quiet yet essential role in Kafila ensures that all our dreams can take flight. His meticulous planning and strategic approach allow the community to continue exploring, all while keeping the heart of Kafila alive. We all benefit from his foresight and dedication to making every trek possible.",
        image: "/api/placeholder/400/300"
      },
      {
        name: "Sagar Kulkarni",
        position: "Media & Outreach Head; Content Manager; Digital Content Creator",
        description: "Sagar's creativity captures the soul of every trek, bringing it to life through his visuals and storytelling. He has a magical way of portraying the spirit of Kafila, showing the world the beauty of our adventures and the strength of our community. His work resonates with all of us who have had the privilege to be part of this journey.",
        image: "/api/placeholder/400/300"
      },
      {
    name: "Vaibhav Bhagat",
    role: "Creative Lead: Graphics",
    description: "Vaibhav's designs reflect the very essence of Kafila - adventurous, bold, and full of life. His creative brilliance helps bring our vision to life in the most vibrant and captivating ways, ensuring that everyone who sees his work feels the excitement and energy of the Kafila spirit.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
    name: "Om Vadam",
    role: "Global Marketing Strategist",
    description: "Om's passion for the outdoors and his strategic thinking have helped take Kafila to new heights. His ability to connect with people across the globe and share the Kafila experience is something we all admire. Through his efforts, Kafila has touched lives beyond borders, creating a global community of explorers.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
    name: "Viney Kapdekar",
    role: "Business Development Executive",
    description: "Viney's enthusiasm and forward-thinking approach have played a vital role in expanding Kafila's reach. His ability to build meaningful relationships and create opportunities for growth has allowed our community to flourish. We're lucky to have someone with his energy and vision on board.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
    name: "Prathamesh Joshi",
    role: "Senior Trek Leader",
    description: "Prathamesh is the kind of leader who leads by example. His strength and calm under pressure make him a natural guide for our trekkers. He brings an infectious positivity to every adventure and ensures that each trek is not just an exploration of nature, but of ourselves. His leadership makes Kafila's community stronger every day.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
    name: "Tushar Kumar Tailor",
    role: "Senior Trek Leader; Manager of Strategic Alliances",
    description: "Tushar's ability to form connections and alliances is unmatched. His leadership in the field and his knack for forging strategic relationships have been crucial to Kafila's growth. Tushar's contributions, both on and off the trails, have helped make Kafila a place where adventure meets opportunity.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
    name: "Kunj Bansal",
    role: "Trek Leader; Global Operations Lead",
    description: "Kunj's dedication to ensuring each trek is organized to perfection speaks volumes about his commitment to Kafila. His leadership on global operations has also helped Kafila expand, bringing the spirit of adventure to even more people around the world. Kunj's meticulous nature ensures that everyone can focus on the journey ahead.",
    image: "/api/placeholder/400/300" // Replace with actual image path
  },
  {
  name: "Rushish Jadhav",
  role: "Senior Trek Leader",
  description: "Rushish brings an incredible energy to every trek. His leadership is defined by empathy and patience, making him someone every trekker can rely on. He's always ready with a word of encouragement, and his presence on the trails ensures that each journey is not only exciting but also safe and enjoyable for all.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Chaitrali Joshi",
  role: "Senior Trek Leader",
  description: "Chaitrali's calm and reassuring presence makes her a cherished leader on the trail. Her ability to lead with compassion and understanding creates an environment where trekkers can push their limits and feel supported every step of the way. She embodies the spirit of Kafila in every way.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Dnyanashree Nagarkar",
  role: "Trek Leader",
  description: "Dnyaneshwari's vibrant energy and passion for trekking make her a standout leader at Kafila. She has a natural ability to connect with people, and her enthusiasm motivates everyone around her to keep going, even when the trail gets tough. Her leadership leaves a positive mark on everyone she meets.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Shivam Gonkar",
  role: "Senior Trek Leader",
  description: "Shivam's leadership style is one of quiet strength and steady guidance. He's the kind of person who inspires trust and confidence, ensuring that trekkers feel safe while also encouraging them to embrace the adventure. His calm demeanor and experience make him a pillar of the Kafila community.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Bhupesh Nandurkar",
  role: "Trek Leader",
  description: "Bhupesh's dedication to Kafila is evident in every trek he leads. His focus on making sure everyone is engaged, safe, and having fun is what makes him such a respected leader. His friendly nature and reliable leadership ensure that every trek under his guidance is a positive and rewarding experience.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Siddharth Kombe",
  role: "Content Creator",
  description: "Siddharth's creativity brings the magic of Kafila to life. Through his lens, he captures moments that speak volumes about the bond shared by every trekker and the beauty of the adventures we embark on. His work not only tells the Kafila story but also inspires others to join our journey.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Vaibhav Kalaskar",
  role: "Trek Leader",
  description: "Vaibhav's enthusiasm and love for trekking are contagious. His leadership on the trails is characterized by a deep understanding of what it means to be part of the Kafila community, always ensuring that everyone feels included and motivated to push their limits.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Meghna Behera",
  role: "Backend Operations",
  description: "Meghna's behind-the-scenes work ensures that everything runs seamlessly at Kafila. Her organizational skills and dedication are critical in making sure the community can enjoy each trek without a hitch. She may work quietly, but her impact is felt in every successful adventure we embark on.",
  image: "/api/placeholder/400/300" // Replace with actual image path
},
{
  name: "Adarsh Deshmukh",
  role: "CEO, Founder",
  description: "Adarsh's vision and passion are the foundation of Kafila. His commitment to building a community of passionate adventurers is what drives Kafila forward. His leadership is the guiding light for all of us, and under his guidance, the Kafila family has grown into something truly special.",
  image: "/api/placeholder/400/300" // Replace with actual image path
}
    ];
  
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section with gray background */}
          <div className="bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 mt-[60px]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 max-w-2xl leading-tight">
                Our passionate<br className="hidden sm:block" /> teammates
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md md:text-right">
                Meet the heart and soul of Xplore – our own dynamic team of travel enthusiasts.
              </p>
            </div>
          </div>
  
          {/* Team Grid section with white background */}
          <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teammates.map((member, index) => (
                <div key={index} className="group">
                  {/* Image with hover effect */}
                  <div className="rounded-lg overflow-hidden mb-4 sm:mb-5 md:mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 sm:h-72 md:h-80 object-cover transition-all duration-500 ease-in-out
                        filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  
                  {/* Team member info */}
                  <h3 className="text-lg sm:text-xl font-normal text-gray-900 mb-0.5 sm:mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900 mb-2 sm:mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PassionateTeammates;