
export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative w-full bg-transparent text-white">
      <div className="absolute top-9 left-[5%] w-[90%] h-px bg-white z-0" />
      <div className="relative z-10 left-[8%] inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36"
          className="h-9"
        >
          <polygon
            points="0,0 120,0 150,36 100,36 0,36"
            fill="transparent"
            stroke="white"
            strokeWidth="1"
          />
          <text
            x="10"
            y="24"
            fill="white"
            fontSize="15"
            letterSpacing="4"
            fontFamily="Raleway"
            filter="url(#text-outline)"
          >
            {title.toUpperCase()}
          </text>
        </svg>
      </div>
    </div>
  );
};