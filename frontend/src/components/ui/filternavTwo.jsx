import { useState } from 'react';

const features = [
  {
    img: "/icons/filterNavTwo/all.svg",
    alt: "All",
    id: "All"
  },
  {
    img: "/icons/filterNavTwo/top.svg",
    alt: "Top",
    id: "Top"
  },
  {
    img: "/icons/filterNavTwo/new.svg",
    alt: "New",
    id: "New"
  },
  {
    img: "/icons/filterNavTwo/slots.svg",
    alt: "Slots",
    id: "Slots"
  },
  {
    img: "/icons/filterNavTwo/live-casino.svg",
    alt: "Live Casino",
    id: "Live Casino"
  },
   {
    img: "/icons/filterNavTwo/crash.svg",
    alt: "Crash",
    id: "Crash"
  },
   {
    img: "/icons/filterNavTwo/table.svg",
    alt: "Table",
    id: "Table"
  },
   {
    img: "/icons/filterNavTwo/roulette.svg",
    alt: "Roulette",
    id: "Roulette"
  },
   {
    img: "/icons/filterNavTwo/shows.svg",
    alt: "Shows",
    id: "Shows"
  },
   {
    img: "/icons/filterNavTwo/gold.svg",
    alt: "Gold",
    id: "Gold"
  },
   {
    img: "/icons/filterNavTwo/fruits.svg",
    alt: "Fruits",
    id: "Fruits"
  },
   {
    img: "/icons/filterNavTwo/bonus-buy.svg",
    alt: "Bonus-buy",
    id: "Bonus-buy"
  },
];

const topSports = [
    {
        img:"/images/filterNavTwo-Images/Live.png",
        alt:"Live"
    },
    {
        img:"/images/filterNavTwo-Images/football.png",
        alt:"Football"
    },
    {
        img:"/images/filterNavTwo-Images/tennis.png",
        alt:"tennis"
    },
      {
        img:"/images/filterNavTwo-Images/tennis-text.png",
        alt:"tennis template"
    },  {
        img:"/images/filterNavTwo-Images/tennis-text.png",
        alt:"tennis template"
    },  {
        img:"/images/filterNavTwo-Images/tennis-text.png",
        alt:"tennis template"
    },
]

const FilterNavTwo = () => {
    const [showAll, setShowAll] = useState(false);
    
    // Show first 6 nav items by default, then all when "See More" is clicked
    const navItemsToShow = showAll ? features.length : 6;
    const hasMoreNavItems = features.length > 6;

    return (
        <div className="max-w-[1440px] mx-auto px-8 py-6 relative text-white">
            {/* Enhanced Navigation with See More */}
            <div className="relative">
                <nav className="flex items-center gap-4 mb-8 overflow-x-auto scrollbar-hide pb-2">
                    {features.slice(0, navItemsToShow).map((feat) => (
                        <div 
                            key={feat.id} 
                            className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 flex-shrink-0 min-w-max group"
                        >
                            <img src={feat.img} alt={feat.alt} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <p className="font-medium text-sm whitespace-nowrap">{feat.alt}</p>
                        </div>
                    ))}
                    
                    {/* See More Button */}
                    {hasMoreNavItems && !showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 flex-shrink-0 min-w-max group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <p className="font-medium text-sm whitespace-nowrap">See More</p>
                        </button>
                    )}

                    {/* See Less Button */}
                    {showAll && (
                        <button
                            onClick={() => setShowAll(false)}
                            className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 flex-shrink-0 min-w-max group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            <p className="font-medium text-sm whitespace-nowrap">See Less</p>
                        </button>
                    )}
                </nav>

            </div>

            {/* Section Header */}
            <h1 className="p-7 text-3xl font-semibold">Top Sports</h1>

            {/* Cards with Arrows */}
            <div className="relative">
                {/* Left Arrow */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10">
                    <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Cards Container */}
                <div className="flex justify-between gap-6 px-8">
                    {topSports.map((sport, index) => (
                        <div key={sport.alt + index} className="flex-1">
                            <img src={sport.img} alt={sport.alt} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10">
                    <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 shadow-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterNavTwo;