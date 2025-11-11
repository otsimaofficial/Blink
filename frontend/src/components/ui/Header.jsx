import React from "react";
import { useLocation } from "react-router-dom";

export function Header({ onOpenSignUp }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#120411] to-[#250a23] text-white font-semibold">
        <header className="max-w-[1440px] mx-auto px-8 py-6 flex justify-between items-center">
          {/* Navigation Menu */}
          <nav className="hidden md:flex gap-4 flex-shrink-0">
            {[
              { icon: "/icons/heroSection/Home.svg", alt: "home" },
              { icon: "/icons/heroSection/Sports.svg", alt: "sports", label: "Sports" },
              { icon: "/icons/heroSection/Casino.svg", alt: "casino", label: "Games" },
              { icon: "/icons/heroSection/More.svg", alt: "more", label: "More" },
            ].map((item) => (
              <div
                key={item.alt}
                className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <img src={item.icon} alt={item.alt} className="w-6 h-6" />
                {item.label && <p>{item.label}</p>}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <nav className="flex items-center gap-4 ml-auto">
            <div className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer">
              <p>
                B<span className="text-red-500">P</span>
              </p>
              <button className="flex items-center gap-1 cursor-pointer">
                0.00
                <img src="/icons/heroSection/arrowDown.svg" alt="dropdown" className="mt-1" />
              </button>
              <div className="bg-gradient-to-b from-[#7747E5] via-[#AC3ABE] to-[#E02D98] flex items-center rounded-lg">
                <img src="/icons/heroSection/new-add-funds.svg" alt="add funds" className="mt-1" />
              </div>
            </div>

            {/* Conditional Section */}
            {!isDashboard ? (
              // NORMAL PAGES → show sign-up button
              <button
                onClick={onOpenSignUp}
                className="bg-gradient-to-r from-red-500 via-[#A157FF] to-red-500 p-2 rounded-lg hover:scale-105 cursor-pointer"
              >
                Sign up
              </button>
            ) : (
              //  DASHBOARD → show notification + profile icons
              <>
                <div className="bg-white/15 rounded-lg p-2 cursor-pointer hover:scale-105">
                  <img src="/icons/Avatar.svg" alt="profile" className="w-6 h-6" />
                </div>

                <div className="bg-white/15 rounded-lg p-2 cursor-pointer hover:scale-105">
                  <img src="/icons/Notification.svg" alt="notification" className="w-6 h-6" />
                </div>
              </>
            )}

            {/* shared: chat and country icons */}
            {[
              { icon: "/icons/heroSection/chat.svg", alt: "chat" },
              { icon: "/icons/heroSection/Nigeria.svg", alt: "nigeria" },
            ].map((item) => (
              <div key={item.alt} className="bg-white/15 rounded-lg p-2 cursor-pointer hover:scale-105">
                <img src={item.icon} alt={item.alt} className="w-6 h-6" />
              </div>
            ))}
          </nav>
        </header>
      </div>
    </>
  );
}
