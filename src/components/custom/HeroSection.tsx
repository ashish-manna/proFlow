import React from "react";
import { Button } from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <div className="w-full text-center h-2/3 flex flex-col gap-2">
        <div className="text-8xl font-bold">
          Stream line your <br /> WorkFlow with ProFlow
        </div>
        <p className="text-2xl font-semibold opacity-45">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          voluptatum.
        </p>
        <div className="pt-10 w-full flex justify-center items-center gap-2">
          <Button className="cursor-pointer">Get Started</Button>
          <Button variant={"secondary"} className="cursor-pointer">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
