// src/components/DashboardStats.jsx
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function DashboardStats() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  return (
    <section className="w-full px-6">
      {/* Tabs */}
      <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
        {[
          { id: "overview", label: "Overview" },
          { id: "history", label: "History" },
          { id: "bonuses", label: "My Bonuses" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.id === "history") {
                navigate("/dashboard/history");
              } else if (tab.id === "overview") {
                navigate("/dashboard");
              }
            }}

            className={`relative px-2 py-1 transition ${activeTab === tab.id
                ? "text-white before:absolute before:-bottom-2 before:left-0 before:right-0 before:h-0.5 before:bg-white"
                : "text-gray-400 hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* XP + Stats cards */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* My XP */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold mb-2 text-white">My XP</h3>
            <p className="text-sm text-gray-400 mb-6">
              Place your sports bets and upgrade your level
            </p>

            <div className="flex flex-col items-center justify-center relative mb-4">
      {/* Dotted Wide Semicircle */}
      <svg
        width="320"
        height="180"
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0"
      >
        <path
          d="M20 160 A140 140 0 0 1 300 160"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          opacity="0.6"
        />
      </svg>

      {/* Center Circle with Star */}
      <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg z-10 mt-14">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.09 8.26H20.18L15.04 12.14L17.13 18.4L12 14.52L6.87 18.4L8.96 12.14L3.82 8.26H9.91L12 2Z"
            fill="gold"
          />
        </svg>
      </div>

  {/* Side labels (outside arc) */}
  <div className="absolute flex justify-between w-[360px] bottom-[-24px] px-4 ">
    <span className="text-gray-400 text-sm">0</span>
    <span className="text-gray-400 text-sm">0</span>
  </div>
</div>


            <div className="flex flex-col items-center justify-center mb-4 space-y-2">
              <p className="text-gray-400 text-sm">You have</p>
              <p className="text-white font-bold text-2xl">luck</p>
              <div className="flex items-center justify-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-gray-400/40"></span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
        </div>

        {/* My Stats*/}
        <div className="w-full lg:w-[60%]">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">My Stats</h3>
              <p className="text-sm text-gray-400 mb-6">
                Place your sports bets and upgrade your level
              </p>

              {/* Compact stats grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Bets</p>
                  <p className="text-white font-bold text-xl">12</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Wins</p>
                  <p className="text-white font-bold text-xl">7</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Loss</p>
                  <p className="text-white font-bold text-xl">5</p>
                </div>
              </div>

              <div className="mt-20 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Cost</p>
                  <p className="text-white font-bold text-xl">12</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Winnings</p>
                  <p className="text-white font-bold text-xl">BP 37</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total Losses</p>
                  <p className="text-white font-bold text-xl">BP 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dotted Background Pattern — Two Curved Blocks */}
      <div className="w-full flex justify-between mt-80 md:mt-25 px-14 ">
        {/* Left Dotted Block */}
        <div className="bg-transparent rounded-2xl overflow-hidden hidden md:block -ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="550"
            height="160"
            viewBox="0 0 550 160"
            fill="none"
            className="opacity-90"
          >
            {Array.from({ length: 14 }).map((_, row) =>
              Array.from({ length: 22 }).map((_, col) => (
                <circle
                  key={`left-${row}-${col}`}
                  cx={col * 25}
                  cy={row * 12}
                  r="1.8"
                  fill="white"
                  opacity="0.9"
                />
              ))
            )}
          </svg>
        </div>

        {/* Right Dotted Block */}
        <div className="bg-transparent rounded-none md:rounded-2xl overflow-hidden w-[100%] mx-auto md:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="550"
            height="160"
            viewBox="0 0 550 160"
            fill="none"
            className="opacity-90"
          >
            {Array.from({ length: 14 }).map((_, row) =>
              Array.from({ length: 22 }).map((_, col) => (
                <circle
                  key={`right-${row}-${col}`}
                  cx={col * 25}
                  cy={row * 12}
                  r="1.8"
                  fill="white"
                  opacity="0.9"
                />
              ))
            )}
          </svg>
        </div>
      </div>



    </section>
  );
}
