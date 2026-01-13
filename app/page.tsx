import HeroCard from "@/components/HeroCard";
import FacilitiesCard from "@/components/FacilitiesCard";
import RoomsCard from "@/components/RoomsCard";
import GalleryCard from "@/components/GalleryCard";
import LocationCard from "@/components/LocationCard";
import StickyCallBar from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <main className="max-w-md mx-auto p-3 pb-24">
        <HeroCard />
        <FacilitiesCard />
        <RoomsCard />
        <GalleryCard />
        <LocationCard />
      </main>

      <StickyCallBar />
    </>
  );
}
