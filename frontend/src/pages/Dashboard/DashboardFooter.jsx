import React from "react";

const DashboardFooter = () => {

  return (
    <footer className="w-full bg-gradient-to-r from-[#120411] to-[#250a23] mt-10 md:mt-15 px-6 py-8 flex flex-col items-center text-gray-400 text-sm">


      <div className="w-full max-w-5xl mx-auto space-y-4 px-4">
        <div className="text-xs leading-relaxed text-gray-300">
          <p>
            Blink is a Web3 virtual prediction platform built on the Linera blockchain, where users predict the outcomes of AI-generated virtual sports matches and earn points for accuracy.
          </p>
          <p>
            Predictions and results are recorded on-chain for transparency.
          </p>
          <p>
            Blink introduces both solo and team prediction modes, with a competitive leaderboard system to rank top performers daily, weekly, and overall.
          </p>
        </div>
      </div>

      {/* Social Icons + Footer Links + Powered By */}
      <div className="relative w-full max-w-5xl flex flex-col items-center text-gray-400 mt-15 text-sm">

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <img src="/dashboard-icons/social.svg" alt="social" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/telegram.svg" alt="telegram" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/twitter.svg" alt="twitter" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/discord.svg" alt="discord" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/linkedIn.svg" alt="linkedIn" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/simley.svg" alt="simley" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/instagram.svg" alt="instagram" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/youtube.svg" alt="youtube" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/dashboard-icons/tiktok.svg" alt="tiktok" className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-center mt-5">
          <p className="cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</p>
          <p className="cursor-pointer hover:text-white transition-colors">Sitemap</p>
        </div>

        {/* Powered by Linera Testnet */}
        <div className="absolute right-8 bottom-2 text-right text-gray-400 leading-tight">
          <p className="text-center md:text-right">
            Powered By
            <br />
            Linera <span className="text-red-500">Testnet</span>
          </p>
        </div>
      </div>
    </footer>

  );
}

export default DashboardFooter;