import Companies from "@/components/custom/Companies";
import Fetatures from "@/components/custom/Fetatures";
import HeroSection from "@/components/custom/HeroSection";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
        <Fetatures />
        <Companies />
        {/* companies  */}
        {/* faqs  */}
      </div>
    </div>
  );
};

export default HomePage;
