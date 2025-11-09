import { useState } from 'react';

const features = [
  {
    img: "/icons/featuresSection/football.svg",
    alt: "Football",
    id: "football"
  },
  {
    img: "/icons/featuresSection/efootball.svg",
    alt: "eFootball",
    id: "efootball"
  },
  {
    img: "/icons/featuresSection/LOL.svg",
    alt: "League of Legends",
    id: "lol"
  },
  {
    img: "/icons/featuresSection/tennis.svg",
    alt: "Tennis",
    id: "tennis"
  },
  {
    img: "/icons/featuresSection/basketball.svg",
    alt: "Basketball",
    id: "basketball"
  },
];

const cardDetails = [
  {
    league: "Italy, Serie A",
    date: "Oct 28 . 18:30",
    teamOne: { name: "US Leece", logo: "/images/US Lecce-logo.svg" },
    teamTwo: { name: "Napoli", logo: "/images/Napoli-logo.svg" },
    predictionValues: [{ one: 6.6, x: 3.85, two: 1.58 }],
    sport: "football"
  },
  {
    league: "Germany, DFB. Cup",
    date: "Oct 28 . 18:30",
    teamOne: { name: "Eintracht Fran", logo: "/images/Eintracht Frankfurt-logo.svg" },
    teamTwo: { name: "Borussia Dort", logo: "/images/Borussia Dortmund-logo.svg" },
    predictionValues: [{ one: 3, x: 3.55, two: 2.14 }],
    sport: "football"
  },
  {
    league: "Italy, Serie A",
    date: "Oct 28 . 20:45",
    teamOne: { name: "Atalanta", logo: "/images/Atalanta-logo.svg" },
    teamTwo: { name: "AC Milan", logo: "/images/AC Milan-logo.svg" },
    predictionValues: [{ one: 2.66, x: 3.3, two: 2.74 }],
    sport: "football"
  },
  {
    league: "LOL Championship",
    date: "Oct 29 . 15:00",
    teamOne: { name: "Team A", logo: "/images/team-a-logo.svg" },
    teamTwo: { name: "Team B", logo: "/images/team-b-logo.svg" },
    predictionValues: [{ one: 1.8, x: 2.1, two: 2.5 }],
    sport: "lol"
  },
];

const FilterNav = () => {
  // State for active sport filter
  const [activeSport, setActiveSport] = useState("all");
  // State for current card position
  const [cardPosition, setCardPosition] = useState(0);
  
  // Show 3 cards at a time
  const cardsToShow = 3;

  // Filter cards by sport
  const filteredCards = activeSport === "all" 
    ? cardDetails 
    : cardDetails.filter(card => card.sport === activeSport);

  // Get cards to display
  const displayCards = filteredCards.slice(cardPosition, cardPosition + cardsToShow);

  // Next button click
  const handleNext = () => {
    if (cardPosition + cardsToShow < filteredCards.length) {
      setCardPosition(cardPosition + 1);
    }
  };

  // Previous button click
  const handlePrev = () => {
    if (cardPosition > 0) {
      setCardPosition(cardPosition - 1);
    }
  };

  // Sport filter click
  const handleSportClick = (sportId) => {
    setActiveSport(sportId);
    setCardPosition(0); // Reset to first card
  };

  return (
    <div className="max-w-[1440px] mx-auto px-14 py-6 relative">
      
      {/* Sport Filter Navbar */}
      <div className="text-white font-medium flex gap-4 flex-wrap">
        <button
          onClick={() => handleSportClick("all")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeSport === "all" ? "bg-white/30" : "bg-white/10 hover:bg-white/20"
          }`}
        >
          All Sports
        </button>
        
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => handleSportClick(feature.id)}
            className={`flex gap-2 items-center px-4 py-2 rounded-lg transition-colors ${
              activeSport === feature.id ? "bg-white/30" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <img src={feature.img} alt={feature.alt} className="w-5 h-5" />
            {feature.alt}
          </button>
        ))}
      </div>

      {/* Cards Section with Arrows */}
      <div className="mt-6 relative">
        
        {/* Left Arrow - Shows when there are previous cards */}
        {cardPosition > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6  bg-white/20 hover:bg-white/30 rounded-full p-3 z-10 transition-colors"
          >
            {/* Left arrow icon */}
             <img src="/icons/heroSection/arrow.svg" className='w-3 rotate-180' alt="" srcset="" />
          </button>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {displayCards.map((card, index) => (
            <div key={index} className="bg-white/10 rounded-2xl p-6 text-white">
              {/* League and Date */}
              <div className="flex justify-between mb-4">
                <p className="text-sm">{card.league}</p>
                <p className="text-xs">{card.date}</p>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-around mb-4">
                <div className="flex items-center gap-2">
                  <p>{card.teamOne.name}</p>
                  <img src={card.teamOne.logo} alt={card.teamOne.name} className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">vs</span>
                <div className="flex items-center gap-2">
                  <img src={card.teamTwo.logo} alt={card.teamTwo.name} className="w-6 h-6" />
                  <p>{card.teamTwo.name}</p>
                </div>
              </div>

              {/* Prediction Buttons */}
              <div className="flex justify-between gap-2">
                <button className="bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 flex-1 transition-colors">
                  <div className="flex justify-between">
                    <span className="text-white/50">1</span>
                    <span>{card.predictionValues[0].one}</span>
                  </div>
                </button>
                <button className="bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 flex-1 transition-colors">
                  <div className="flex justify-between">
                    <span className="text-white/50">X</span>
                    <span>{card.predictionValues[0].x}</span>
                  </div>
                </button>
                <button className="bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 flex-1 transition-colors">
                  <div className="flex justify-between">
                    <span className="text-white/50">2</span>
                    <span>{card.predictionValues[0].two}</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow - Shows when there are more cards */}
        {cardPosition + cardsToShow < filteredCards.length && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white/20 hover:bg-white/30 rounded-full p-4 z-10  transition-colors "
          >
            <img src="/icons/heroSection/arrow.svg" className='w-3' alt="" srcset="" />
           
          </button>
        )}
      </div>

    </div>
  );
};

export default FilterNav;