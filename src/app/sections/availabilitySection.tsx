import Image from "next/image";

export default function AvailabilitySection() {
    return (
        <div className="w-full relative h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[400px]">
            <Image 
                src={'/availability.png'}
                alt={'Availability'}
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
};