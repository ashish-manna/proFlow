"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import compaines from "@/mocks/companies.json";
import Image from "next/image";

const Companies = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-center py-5 pt-10">
        Trusted Companies
      </div>
      <div className="w-full px-10">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="flex gap-5 px-2 py-20">
            {compaines.map((data) => {
              return (
                <CarouselItem key={data.id} className="basis-1/3 lg:basis-1/6">
                  <Image
                    src={data.path}
                    width={200}
                    height={100}
                    alt={data.name}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Companies;
