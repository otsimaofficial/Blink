const features = [
  {
    img: "/icons/featuresSection/football.svg",
    alt: "Football",
  },
  {
    img: "/icons/featuresSection/efootball.svg",
    alt: "eFootball",
  },
  {
    img: "/icons/featuresSection/LOL.svg",
    alt: "League of Legends",
  },
  {
    img: "/icons/featuresSection/tennis.svg",
    alt: "Tennis",
  },
  {
    img: "/icons/featuresSection/basketball.svg",
    alt: "Basketball",
  },
];

const FilterNav = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-14 py-6">
      <div className="text-white font-medium flex gap-8">
        {features.map((feature) => (
          <p key={feature.alt} className="flex gap-2">
            <img src={feature.img} alt={feature.alt} />
            {feature.alt}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FilterNav;
