"use client"
import { useEffect, useState } from "react";
import NewsCard from "../components/newsCard";
import SectionTitle from "../components/sectionTitle";

export default function NewsSection() {
  const [ isSmallResolution, setIsSmallResolution ] = useState<boolean>();

  const handleResize = () => {
    if (window.innerWidth <= 1215) {
      setIsSmallResolution(true);
    } else {
      setIsSmallResolution(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <SectionTitle title="NEWS" />
      <div className="w-screen mb-3 pt-12 flex flex-wrap justify-center gap-4">
        <NewsCard
          vertical={true}
          imagePosition={'left'}
          image="/halo-news-1.png"
          title="TITLE ONE"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <NewsCard
          vertical={isSmallResolution ? true : false}
          imagePosition={'right'}
          image="/halo-news-2.png"
          title="TITLE TWO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="w-screen flex flex-wrap justify-center gap-4">
        <NewsCard
          vertical={isSmallResolution ? true : false}
          imagePosition={'left'}
          image="/halo-news-2.png"
          title="TITLE THREE"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <NewsCard
          vertical={true}
          imagePosition={'right'}
          image="/halo-news-1.png"
          title="TITLE FOUR"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </>
  );
};