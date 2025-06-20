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