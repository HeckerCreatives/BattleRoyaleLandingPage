import Creator from "@/components/rofinvestors/Creator";
import Footer from "@/components/rofinvestors/Footer";
import Game from "@/components/rofinvestors/Game";
import HeroSection from "@/components/rofinvestors/Header";
import Opportunity from "@/components/rofinvestors/Opportunity";
import Rof from "@/components/rofinvestors/Rof";

export default function page() {
  return (
    <div className=" w-full h-full flex flex-col items-center overflow-x-hidden"
    style={{ backgroundImage: "url('/investor/assets/BG Pattern Solid.png')" , backgroundSize:'contain', backgroundRepeat:'repeat', backgroundPosition:'bottom'}}
    >
      
      <HeroSection/>
     
      <Rof/>
      <Game/>
      <Opportunity/>
      <Creator/>
      <Footer/>
    </div>
  );
}
