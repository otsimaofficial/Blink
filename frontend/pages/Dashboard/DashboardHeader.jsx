import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center w-full px-6 mt-10 gap-4">
      
      {/* Profile Section */}
      <div className="flex items-center gap-5">
        <img
          src="/dashboard-icons/linera.svg"
          alt="Profile Avatar"
          className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
        />
        <div>
          <h2 className="text-white text-2xl font-bold">Linera Boy</h2>
        </div>
      </div>

      {/* Single Balance Card */}
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col sm:flex-row sm:items-center sm:gap-8 w-full md:w-auto md:relative md:right-[-610px]">
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-gray-400 text-sm">My Balance</span>
          <span className="font-semibold text-lg"><span className="text-red-400">BP</span> <span className="text-white">2,381</span></span>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-gray-400 text-sm">On Bets</span>
          <span className="text-white font-semibold text-lg">BP 231</span>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <span className="text-gray-400 text-sm">Total Winning</span>
          <span className="text-white font-semibold text-lg">BP 112</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
