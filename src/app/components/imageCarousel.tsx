"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({items}:{items: string[]}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [transformOffset, setTransformOffset] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const itemsQuantity = items.length;
  const itemsToShow = 4;
  const slideWidthPercentage = 100 / itemsToShow;
  const animationDuration = 300;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newOffset = -selectedIndex * slideWidthPercentage;
    if (!isAnimating) {
      setTransformOffset(newOffset);
    }
  }, [selectedIndex, slideWidthPercentage, isAnimating]);

  const navigate = (direction: 1 | -1) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex + direction + itemsQuantity) % itemsQuantity);
        setIsAnimating(false);
      }, animationDuration);
    }
  };

  const goForward = () => navigate(1);
  const goBack = () => navigate(-1);

  const handleDotClick = (index: number) => {
    if (!isAnimating && index !== selectedIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setIsAnimating(false);
      }, animationDuration);
    }
  };

  return (
    <>
      <div ref={containerRef} className="relative overflow-hidden p-12">
        <div
          className="grid grid-flow-col auto-cols-[100%] gap-2 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${transformOffset}%)`,
            gridTemplateColumns: `repeat(${itemsQuantity}, ${slideWidthPercentage}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex justify-center w-full flex-shrink-0">
              <Image
                src={item}
                alt={`image-${index}`}
                width={200}
                height={180}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-screen mt-4">
        <svg onClick={goBack} className="w-4 h-4 cursor-pointer text-white dark:text-white hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 10 16">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
        </svg>
        {items.map((item, index) => (
          <div
            onClick={() => handleDotClick(index)}
            key={index}
            className={`w-4 h-4 mx-1 rounded-full border-2 border-gray-600 cursor-pointer transition-colors duration-${animationDuration} ${index === selectedIndex ? 'bg-white' : 'bg-transparent hover:bg-gray-400'}`}
          />
        ))}
        <svg onClick={goForward} className="w-4 h-4 cursor-pointer text-white dark:text-white hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 10 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.707 14.293 5.586-5.586a1 1 0 0 0 0-1.414L2.707 1.707A1 1 0 0 0 1 2.414v11.172a1 1 0 0 0 1.707.707Z"/>
        </svg>
      </div>
      </>
    );
  };