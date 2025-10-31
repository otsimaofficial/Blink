import { useState } from "react";

const HeroSection = () => {
  const icons = [
    { icon: "/images/TG.svg", alt: "telegram" },
    { icon: "/images/MM.svg", alt: "metamask" },
    { icon: "/images/WC (1).svg", alt: "walletconnect" },
    { icon: "/images/TW.svg", alt: "twitter" },
  ];

  const sections = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
  ];

  const sectionImages = [
    {
      img: "/images/salah.png",
      alt: "Sports",
      bg: "/images/soccerPitch.png",
      icon: "/icons/Sports.svg",
    },
    {
      img: "/images/maskedMan.png",
      alt: "eSports",
      bg: "/images/gamebackground.png",
      icon: "/icons/eSport.svg",
    },
    {
      img: "/images/salah.png",
      alt: "Sports",
      bg: "/images/soccerPitch.png",
      icon: "/icons/Sports.svg",
    },
  ];

  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="w-full text-white max-w-[1440px] px-4 sm:px-6 lg:px-8 pb-10 mx-auto">
      {/* Hero Section */}
      <section
        className="mx-auto flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 mt-6 lg:mt-10 rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle, currentColor 2px, transparent 2px),
            radial-gradient(circle, currentColor 2px, transparent 2px),
            linear-gradient(to right, #500000, #9A537D, transparent)
          `,
          backgroundSize: "50px 50px, 50px 50px, 100% 100%",
          backgroundPosition: "10 10, 25px 25px, 10 10 ",
          backgroundBlendMode: "overlay, overlay, normal",
        }}
      >
        <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2">
          {/* Features */}
          <section className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <img src="/icons/KYC.svg" alt="No Kyc" className="w-4 h-4 sm:w-5 sm:h-5" /> 
              No Kyc
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/Freebets.svg" alt="Freebets" className="w-4 h-4 sm:w-5 sm:h-5" />
              Freebets
            </div>
            <div className="text-red-600 font-bold">TestNet</div>
            <div className="flex items-center gap-2">
              <img src="/icons/gift.svg" alt="Gifts" className="w-4 h-4 sm:w-5 sm:h-5" />
              Gifts
            </div>
          </section>
          
          {/* Main Heading */}
          <section>
            <p className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Welcome to the world of On-chain <br className="hidden sm:block" /> 
              sports Betting, Built On{" "}
              <span className="text-red-500">LINERA</span>
            </p>
          </section>
          
          {/* CTA Buttons */}
          <section className="mt-3 lg:mt-5 flex flex-wrap items-center gap-3 lg:gap-5">
            <button className="bg-[#a484ee] py-2 px-6 lg:px-10 rounded-xl cursor-pointer hover:scale-105 transition duration-300 h-12 text-sm sm:text-base">
              Join Now
            </button>
            {icons.map((item, index) => (
              <div 
                key={item.alt} 
                className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300"
              >
                <span>
                  <img src={item.icon} alt={item.alt} className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </div>
            ))}
          </section>
        </div>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-br-3xl mt-6 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="/images/heroSectionImage.svg" 
            alt="Hero Section" 
            className="w-full max-w-md lg:max-w-full h-auto"
          />
        </div>
      </section>

      {/* Navigation Indicator */}
      <div className="flex rounded-xl p-1 w-fit gap-2 mx-auto my-6 lg:my-10">
        {sections.map((section) => (
          <button
            onClick={() => setActiveSection(section.id)}
            key={section.id}
            className={`px-4 sm:px-6 py-1 rounded-lg font-medium transition-all duration-300 border ${
              activeSection === section.id
                ? "bg-white text-black shadow-md border-white"
                : "text-gray-400 hover:text-white border-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Section Cards */}
      <div className="p-4 lg:p-5 flex flex-col md:flex-row gap-4 lg:gap-8 font-semibold text-base lg:text-lg">
        {sectionImages.map((item, index) => (
          <div
            className="px-4 pb-4 relative w-full md:flex-1 min-h-[120px] sm:min-h-[150px] rounded-xl"
            key={item.alt + index}
          >
            <img
              src={item.bg}
              alt={item.alt}
              className="w-full h-full object-cover absolute inset-0 rounded-2xl"
            />
            <img
              src={item.img}
              alt={item.alt}
              className="absolute right-0 bottom-0 h-[120px] sm:h-[150px] lg:h-[180px]"
            />
            <div className="flex justify-between items-end h-full w-11/12 absolute py-2 px-2 sm:px-4">
              <div className="flex gap-2 items-center">
                <img src={item.icon} alt={item.alt} className="w-4 sm:w-5 mt-1" />
                <p className="text-sm sm:text-base">{item.alt}</p>
              </div>
              <div className="bg-white/15 rounded-full p-2 flex items-center gap-2 cursor-pointer hover:scale-105 transition duration-300">
                <span>
                  <img src="/icons/arrow.svg" alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;