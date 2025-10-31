import React from "react";
import { useState } from "react";
import SignUpModal from "../SignUpModal";


export function Header() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  
  return (
    <>
    <div className="w-full bg-gradient-to-r from-[#120411] to-[#250a23] text-white font-semibold">
      <header className="max-w-[1440px] mx-auto px-8 py-6 flex justify-between items-center">
        {/* Navigation Menu */}
        <nav className="flex gap-4">
          {[
            { icon: "./icons/Home.svg", alt: "home" },
            { icon: "./icons/Sports.svg", alt: "sports", label: "Sports" },
            { icon: "./icons/Casino.svg", alt: "casino", label: "Games" },
            { icon: "./icons/More.svg", alt: "more", label: "More" }
          ].map((item) => (
            <div
              key={item.alt}
              className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer"
            >
              <img src={item.icon} alt={item.alt} className="w-6 h-6" />
              {item.label && <p>{item.label}</p>}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <nav className="flex items-center gap-4">
         
          <div className="bg-white/15 rounded-lg p-2 flex items-center gap-2 cursor-pointer">
            <p>B<span className="text-red-500">P</span></p>
            <button className="flex items-center gap-1 cursor-pointer">
              0.00
              <img src="/icons/arrowDown.svg" alt="dropdown" className="mt-1" />
            </button>
            <div className="bg-gradient-to-b from-[#7747E5] via-[#AC3ABE] to-[#E02D98] flex items-center rounded-lg">
              <img src="./icons/new-add-funds.svg" alt="add funds" className="mt-1"/>
            </div>
          </div>
          <button
          onClick={() => setIsSignUpOpen(true)}
           className="bg-gradient-to-r from-red-500 via-[#A157FF] to-red-500 p-2 rounded-lg">
            Sign up
          </button>
          
          {[
            { icon: "./icons/chat.svg", alt: "chat" },
            { icon: "./icons/Nigeria.svg", alt: "nigeria" }
          ].map((item) => (
            <div key={item.alt} className="bg-white/15 rounded-lg p-2 cursor-pointer">
              <img src={item.icon} alt={item.alt} className="w-6 h-6" />
            </div>
          ))}
        </nav>
      </header>
    </div>
    {/* 🔹 Modal */}
      {React.createElement(SignUpModal as any, {
        isOpen: isSignUpOpen,
        onClose: () => setIsSignUpOpen(false),
      })}
    </>
  );
}