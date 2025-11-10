import FilterNav from "../components/ui/filterNav";
import FilterNavTwo from "../components/ui/filternavTwo";
import { Header } from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";

export default function Home() {
    return (
        <div className="mx-auto bg-gradient-to-r from-[#120411] to-[#250a23]">
             <Header/>
             <HeroSection/>
             <FilterNav/>
             <FilterNavTwo/>
        </div>
    );
}