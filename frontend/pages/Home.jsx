import { useState } from "react";
import { Header } from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import SignUpModal from "../components/SignUpModal";

export default function Home() {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    return (
        <div className="mx-auto bg-gradient-to-r from-[#120411] to-[#250a23]">
             <Header onOpenSignUp={() => setIsSignUpOpen(true)} />
            
        
        <div className="relative">
             <HeroSection/>

        {/* render modal inside hero wrapper so it appears centered in the hero */}
        {isSignUpOpen && (
          <SignUpModal
            isOpen={isSignUpOpen}
            onClose={() => setIsSignUpOpen(false)}
          />
        )}
      </div>
    </div>
  );
}