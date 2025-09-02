import Companies from "@/components/custom/Companies";
import FAQs from "@/components/custom/FAQs";
import Fetatures from "@/components/custom/Fetatures";
import HeroSection from "@/components/custom/HeroSection";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <HeroSection />
        <Fetatures />
        <Companies />
        <FAQs />
        <div className="w-full py-10 px-10 pt-10">
          <h1 className="text-4xl font-bold text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis?
          </h1>
          <div className="flex flex-col w-full justify-center items-center py-5">
            <p className="text-xl w-3/4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quibusdam dignissimos officia magni eveniet, eos ipsam blanditiis
              aliquam optio sunt!
            </p>
          </div>
          <div className="w-full flex justify-center py-10">
            <Link href={"/onboarding"}>
              <Button className="cursor-pointer animate-bounce">
                Try For Free <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
