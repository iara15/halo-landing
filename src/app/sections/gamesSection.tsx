import ImageCarousel from "../components/imageCarousel";
import SectionTitle from "../components/sectionTitle";

const games = [
  "/halo-combat-evolved.png",
  "/halo-2.png",
  "/halo-3.png",
  "/halo-wars.png",
  "/halo-3-odst.png",
  "/halo-reach.png",
  "/halo-4.png",
  "/halo-guardians.png",
  "/halo-wars-2.png",
  "/halo-infinite-2.png",
  "/halo-spartan-assault.png",
  "/halo-spartan-strike.png",
];

export default function GamesSection() {
  return (
    <>
      <SectionTitle title="GAMES" />
      <ImageCarousel items={games} />
    </>
  );
};