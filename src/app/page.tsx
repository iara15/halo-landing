import Header from "./sections/header";
import GamesSection from "./sections/gamesSection";
import NewsSection from "./sections/newsSection";
import AvailabilitySection from "./sections/availabilitySection";
import Footer from "./sections/footer";
import Image from "next/image";
import CtaSection from "./sections/ctaSection";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-w-screen">
      <Header />
      <CtaSection />
      <div className="relative w-full ">
        <div className="absolute inset-0 z-0 mt-50 opacity-30">
          <Image
            src={'/planet.png'}
            alt={'Planet'}
            width={3000}
            height={1000}
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 mt-20"> 
          <GamesSection />
        </div>
        <div className="relative z-10 mt-20">
          <NewsSection />
        </div>
      </div>
      <div className="my-40 w-screen">
        <AvailabilitySection />
      </div>
      <Footer />
    </div>
  );
}
