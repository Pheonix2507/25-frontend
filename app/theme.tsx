import Head from "next/head";
import bgImg from "../assets/backgroundP2.jpeg";
import Image from "next/image";
import image3 from "../assets/image3.png";
import themeImg from "../assets/Theme.png";

export default function ThemeHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Starry night sky with bridge silhouette"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center">
        {/* Theme Image */}
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[200px] ">
          <Image
            src={themeImg}
            alt="Theme Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Theme Description */}
        <p className="mx-auto max-w-3xl text-sm text-white/90 sm:text-lg md:text-xl leading-relaxed">
          Step into a magical realm of enchantment and wonder as our college
          festival transforms into the Wizarding Whirl. This year&apos;s theme
          celebrates the magic of diversity, creativity, and camaraderie.
          Immerse yourself in a spellbinding array of events, performances, and
          experiences that highlight the vibrant spirit of our magical
          community. From mesmerizing musical performances by enchanted choirs
          to interactive potion-making workshops, let the dazzling spells of the
          Wizarding Whirl captivate your senses and awaken your inner wizard.
          Join us on this thrilling adventure where every twist and turn unveils
          a new charm of excitement, making this festival an unforgettable
          celebration of unity in magic.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute w-[100vh] bottom-0 sm:w-full">
        <Image
          src={image3}
          alt="Merge Effect Image"
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
