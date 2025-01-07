// pages/theme.js

import Head from "next/head";
import bgImg from "../assets/backgroundP2.jpeg";
import Image from "next/image";
import aboutus from "../assets/AboutUs-Synapse'25.png";
import image3 from "../assets/image3-white.png";
import CircleLogo from "../assets/SVGID.png";

export default function MainAboutUS() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Background"
        fill
        className="object-cover bg-origin-padding opacity-95"
        priority
      />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-4 md:p-6">
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src={CircleLogo}
              alt="Synapse Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Menu Button */}
        <div>
          <button className="text-white text-lg bg-black/40 hover:bg-black/60 px-4 py-2 rounded-md focus:outline-none transition duration-300">
            Menu
          </button>
        </div>
      </nav>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start w-100 text-center 1">
        {/* About Us Image */}
        <div className="relative w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] ">
          <Image
            src={aboutus}
            alt="Theme Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* About Us Text */}
        <p className="mx-auto max-w-2xl text-sm text-white/90 sm:text-lg md:text-xl leading-relaxed sm:w-[80%] bg-red-500 px-10">
          Step into the enchanting realm of Synapse'25, Gujarat's biggest and
          most spellbinding annual cultural festival! Organized by the whimsical
          and wildly creative Synapse Committee, this four-day carnival will
          leave you bewitched and bedazzled. From 20th to 23rd February 2025,
          Synapse'25 transforms into a magical Mystic Woods, a celebration of
          art, culture, and eerie delights. With three spellbinding concert
          nights featuring artists who'll enchant your soul, a cackle-worthy
          stand-up comedy night, and over 25 thrilling events that will test
          your wits and charm, this fest is straight out of a fairy tale (or a
          slightly spooky dream). Prepare for mesmerizing performances,
          enigmatic vibes, and a cauldron full of creativity and laughter.
          Whether you're a music wizard, a comedy conjurer, or a seeker of
          mystical adventures, Synapse'25 is your portal to another dimension.
          So, scribble it in your spell book and get ready to embrace the mystic
          magic of Synapse. Dare to enter the woods and uncover an extraordinary
          journey brimming with eerie excitement and enchanting memories. We
          can’t wait to summon you!
        </p>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full">
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
