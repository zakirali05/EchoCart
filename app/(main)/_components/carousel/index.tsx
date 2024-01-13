import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselComp = () => {
  return (
    <Carousel className="max-w-6xl mx-auto ">
      <CarouselContent className="h-[400px]">
        <CarouselItem className=" flex items-start md:items-center justify-center">
          <Image
            src="/banner-1.jpg"
            alt="banner-1"
            width={1200}
            height={1000}
            className="rounded-md"
          />
        </CarouselItem>
        <CarouselItem className=" flex items-start md:items-center justify-center">
          {" "}
          <Image
            src="/banner-1.jpg"
            alt="banner-1"
            width={1200}
            height={1000}
            className="rounded-md"
          />
        </CarouselItem>
        <CarouselItem className=" flex items-start md:items-center justify-center">
          {" "}
          <Image
            src="/banner-1.jpg"
            alt="banner-1"
            width={1200}
            height={1000}
            className="rounded-md"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex items-center justify-center" />
      <CarouselNext className="hidden lg:flex items-center justify-cente" />
    </Carousel>
  );
};

export default CarouselComp;
