import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/ui/Header";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";

const DashboardHistory = () => {
  const [activeTab, setActiveTab] = useState("history");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="mx-auto bg-gradient-to-r from-[#120411] to-[#250a23]">
      <Header/>
      <main className="max-w-[1440px] mx-auto px-6 py-10 flex flex-col gap-10">
        <DashboardHeader />

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
        </section>
        {/* 🔸 This replaces DashboardStats */}
        <section className="w-full flex flex-col items-center justify-center mt-10">
          {/* Empty History Card */}
  
     {/* Empty History Card */}
    <section className="flex flex-col items-center justify-center w-full">
     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-16 text-center w-full max-w-[1100px] mx-auto h-[400px] flex flex-col justify-center items-center gap-5 shadow-lg -mt-18 ml-5">
       <img src="/dashboard-icons/sad-face.svg" 
        alt="sad face" 
        className="w-10 h-10 mb-3 opacity-90" />
       <p className="text-gray-400 text-2xl font-semibold -mb-7">Oops, No Bets yet</p>
       <p className="text-gray-400 text-2xl font-semibold">Start your prediction</p>
       <button className="bg-red-700 hover:opacity-90 w-[180px] py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105">
         Open Bet
       </button>
     </div>
    </section>



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
      </main>

      <DashboardFooter />
    </div>
  );
};

export default DashboardHistory;
