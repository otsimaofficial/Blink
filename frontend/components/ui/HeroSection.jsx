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

  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="w-full text-white max-w-[1440px] px-8 pb-10 ">
      <section
        className="mx-auto flex justify-between px-5 pt-8 mt-10 rounded-2xl relative overflow-hidden"
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
        <div className="flex flex-col gap-8">
          <section className="flex  gap-8 font-md">
            <div className="flex items-center gap-2">
              <img src="/icons/KYC.svg" alt="No Kyc image" srcset="" /> No Kyc
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/Freebets.svg" alt="No Kyc image" srcset="" />
              Freebets
            </div>
            <div className="text-red-600 font-bold">TestNet</div>
            <div className="flex items-center gap-2">
              <img src="/icons/gift.svg" alt="No Kyc image" srcset="" />
              Gifts
            </div>
          </section>
          <section>
            <p className="font-bold text-4xl">
              Welcome to the world of On-chain <br /> sports Betting, Built On{" "}
              <span className="text-red-500">LINERA</span>
            </p>
          </section>
          <section className="mt-5 flex items-center gap-5">
            <button className="bg-[#a484ee] py-4 px-10 rounded-xl cursor-pointer hover:scale-105 transition duration-300">
              {" "}
              Join Now
            </button>
            {icons.map((item) => {
              return (
                <div className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer hover:scale-105">
                  <span>
                    <img src={item.icon} alt={item.alt} />
                  </span>
                </div>
              );
            })}
          </section>
        </div>

        <div className="overflow-hidden rounded-br-3xl">
          <img src="/images/heroSectionImage.svg" className="" />
        </div>
      </section>
      {/*the navigation indicator*/}

        <div className="flex rounded-xl p-1 w-fit gap-2 mx-auto mt-10">
                {sections.map((section) => (
                    <button 
                        onClick={() => setActiveSection(section.id)}
                        key={section.id}
                        className={`px-6 py-1 rounded-lg font-medium transition-all duration-300 border ${
                            activeSection === section.id
                                ? "bg-white text-black shadow-md border-white"
                                : "text-gray-400 hover:text-white border-gray-500"
                        }`}
                    >
                        {/* You can add content here if needed, like dots or numbers */}
                    </button>
                ))}
            </div>
    </div>
  );
};

export default HeroSection;
