import React, { useState, useEffect } from "react";
import RequestFormComponent from "@/components/RequestDemoComponent";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";
import PlayerCard from "@/components/PlayerCard";
import { AiTwotonePushpin } from "react-icons/ai";
import {
  BsFillGearFill,
  BsClockFill,
  BsPeopleFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import { FaCalendarCheck, FaPencilAlt } from "react-icons/fa";
// import classes from './LandingComponent.module.css'
import user1 from "../../public/user1.png";
import user2 from "../../public/user2.png";
import user3 from "../../public/user3.png";

const LandingComponent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["golf-background.jpeg", "simulator2.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 6000); // Change the interval time as needed
    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div className="flex justify-center items-center flex-col h-full">
      {/* HEADER COMPONENT */}
      <div
        className="w-full h-[500px] relative carousel-image transition-all"
        style={{
          backgroundImage: `url('${images[currentImage]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-[500px] bg-gradient-to-t from-white bg-opacity-0 flex items-center justify-center flex-col min-w-[400px]">
          <div className="p-5 bg-slate-800 rounded-xl shadow-2xl">
            <TypingAnimation
              text="Finally, booking done right."
              style="text-[45px] font-bold text-primary opacity-100 flex items-center"
            />
            <p className="font-bold text-white text-xl my-1 mt-4">
              TeeFindr is the Pro Shop thats always open.
            </p>
            <p className="text-white font-thin">
              Pay monthly, reduce no-shows, and cancel anytime with no fees.
            </p>
            <div className="w-full flex justify-center">
              <button className="mt-5 p-2 border rounded border-primary text-primary hover:bg-white transition duration-200 transform hover:scale-110">
                Request A Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BODY COMPONENT 1 */}
      <div className="flex w-full px-4 bg-gradient-to-b from-white bg-white pb-10">
        <CardGrid />
      </div>

      <InfoStrip />

      <div className="bg-white bg-gradient-to-t from-slate-400 w-full flex justify-around flex-wrap ">
        <PlayerCard
          name="Mary Jane"
          img={user1}
          title="NENY President"
          review="I love this software!"
        />

        <PlayerCard
          name="Tiger Woods"
          img={user2}
          title="The Bunker CEO"
          review="This software sucks!"
        />

        <PlayerCard
          name="Tom Mittler"
          img={user3}
          title="Homeless man"
          review="This software helps me play all day!"
        />
      </div>

      <div className="bg-slate-400 w-full pt-10 pb-20">
        <RequestFormComponent />
      </div>
    </div>
  );
};

function CardComponent({ title, message, icon }) {
  return (
    <div className="card h-[300px] flex flex-col items-center justify-between text-primary py-10 bg-white border  hover:bg-primary hover:border-primary hover:text-white rounded-lg shadow-lg p-4 transition duration-200 transform hover:-translate-y-2 hover:shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      {icon}
      <p className="text-center">{message}</p>
    </div>
  );
}

function InfoStrip() {
  return (
    <div className="flex w-full h-fit py-20 px-4l">
      <div className="shadow-xl mx-4 w-full flex justify-between px-20 text-xl bg-gray-200 text-slate-700 min-h-[75px] h-fit items-center font-bold rounded-xl flex-wrap">
        <span className="flex items-center  transition duration-200 transform hover:scale-110">
          {" "}
          <BsPeopleFill className="text-primary pr-2 w-8 h-8" />
          20K+ Golfers
        </span>
        <span className="flex items-center  transition duration-200 transform hover:scale-110">
          {" "}
          <BsBookmarkCheckFill className="text-primary pr-2 w-8 h-8" />
          100K+ Rounds Booked
        </span>
        <span className="flex items-center  transition duration-200 transform hover:scale-110">
          {" "}
          <AiTwotonePushpin className="text-primary pr-2 w-8 h-8" />
          7+ Locations
        </span>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-fit">
      <CardComponent
        title="Always Open"
        message="24/7 real-time booking on mobile and desktop"
        icon={<BsClockFill className="w-20 h-20" />}
      />
      <CardComponent
        title="Any Booking"
        message="Outdoor and Simulator bookings; leagues, lessons & more"
        icon={<BsFillGearFill className="w-20 h-20" />}
      />
      <CardComponent
        title="Reduce No-Shows"
        message="Automatic email and text notification and confirmation alerts"
        icon={<FaCalendarCheck className="w-20 h-20" />}
      />
      <CardComponent
        title="Easy Edits"
        message="Easily manage your teesheets, employees & more"
        icon={<FaPencilAlt className="w-20 h-20" />}
      />
    </div>
  );
}

export default LandingComponent;
