export function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-[#120411] to-[#250a23]">
      <header className="max-w-[1440px] mx-auto px-8 py-4 flex justify-between items-center ">
        {/* Logos */}

     <nav className="flex gap-4">
       <div className="bg-white/15 rounded-lg p-2">
         <img
       src="./icons/Home.svg" 
      alt="home" 
      className="w-6 h-6" 
    />
       </div>
      < div className="bg-white/15 rounded-lg p-2 flex items-center gap-2">
         <img
       src="./icons/Sports.svg" 
      alt="home" 
      className="w-6 h-6" 
    />
    <p>Sports</p>
       </div>
</nav>

    

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          {/* Add your action buttons */}
        </div>
      </header>
    </div>
  );
}