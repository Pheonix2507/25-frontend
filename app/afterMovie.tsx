import rightDragon from "./assets/dragonRight.png";
import Image from "next/image";

export default function ThemeHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex justify-center items-center">
      <div className="relative  w-[70%] h-[70%] border-2 border-orange-600 rounded-lg">
        <Image
          src={rightDragon}
          alt="Starry night sky with bridge silhouette"
          fill
          className="absolute "
          priority
        />
      </div>
    </div>
  );
}
