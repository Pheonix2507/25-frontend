// pages/theme.js

import Head from "next/head";
import bgImg from "../assets/backgroundP2.jpeg";
import Image from "next/image";
import aboutus from "../assets/aboutus.png";

export default function About() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-black">
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center">
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[200px] ">
          <Image
            src={aboutus}
            alt="Theme Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mx-auto max-w-2xl text-sm text-white/90  sm:text-xl">
          Synapse, DAIICT’s annual college fest, unites global artists and
          creative minds to showcase unique collages, share creative
          processes, and transforms into a vibrant night of live music, DJ
          performances, and dance parties, fostering creative connections and
          celebrating artistic expression.
        </p>
      </div>
    </div>
  );
}
