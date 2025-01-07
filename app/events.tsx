import bgImg from "../assets/backgroundP2.jpeg";
import Image from "next/image";
import image4 from "../assets/image4.png";
import events from "../assets/events.svg";
import shadow from "../assets/shadow.svg";
import Redflag from "../assets/Redflag.svg";
import Blueflag from "../assets/Blueflag.svg";

export default function Events() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Background"
        fill
        className="object-cover bg-origin-padding"
        priority
      />

      {/* Centered Div */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] flex items-center flex-1  h-52 gap-6">
        {/* Left Section (Banner and Shadow) */}
        <div className="flex flex-col items-center w-[60%] relative border-3">
          {/* Banner */}
          <div className="absolute top-0 left-0 z-10">
            <Image src={events} alt="Events Banner" className="w-full h-auto" />
          </div>

          {/* Shadow */}
          <div className="absolute top-7 left-0">
            <Image
              src={shadow}
              alt="Shadow Effect"
              className="w-full h-auto bg-blend-overlay"
            />
          </div>

          {/* Flags and Line */}
          <div className="flex flex-col items-center absolute top-7 gap-1">
            {/* Flags Row */}
            <div className="flex items-center justify-center gap-4 ">
              <Image src={Redflag} alt="Red Flag" className="w-28 h-auto" />
              <Image src={Blueflag} alt="Blue Flag" className="w-28 h-auto" />
              <Image src={Redflag} alt="Red Flag" className="w-28 h-auto" />
              <Image src={Blueflag} alt="Blue Flag" className="w-28 h-auto" />
            </div>
          </div>
        </div>

        {/* Right Section (Heading) */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold text-white">Events Theme</h1>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full">
        <Image
          src={image4}
          alt="Merge Effect Image"
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
