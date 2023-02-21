/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation";

import {AiTwotonePushpin} from 'react-icons/ai'
import {BsFillGearFill, BsClockFill, BsPeopleFill, BsBookmarkCheckFill} from 'react-icons/bs'
import {FaCalendarCheck, FaPencilAlt} from 'react-icons/fa'

const LandingComponent = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      {/* HEADER COMPONENT */}
      <div
        className="w-full h-[500px] relative"
        style={{
          backgroundImage: `url('golf-background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-[500px] bg-gradient-to-t from-white bg-opacity-50 flex items-center justify-center flex-col">
          <TypingAnimation
            text="Finally, booking done right."
            style="text-[45px] font-bold text-primary opacity-100 flex items-center"
          />
          <p className="font-bold text-slate-700 text-xl my-1">
            TeeFindr is the Pro Shop that's always open.
          </p>
          <p>Pay Monthly, reduce no-shows, and cancel anytime with no fees.</p>
          <button className="mt-5 p-2 border rounded border-primary text-primary  hover:bg-primary-50 hover:bg-opacity-20">
            Request A Demo
          </button>
        </div>
      </div>

      {/* BODY COMPONENT 1 */}
      <div className="flex w-full px-4 bg-gradient-to-b from-white bg-primary pb-10">
      {/* <div className="flex w-full h-[400px] px-4  bg-opacity-10 pb-10"> */}
        <CardGrid />
      </div>

      <div className="flex w-full h-fit pb-10 px-4 bg-primary">
        <div className="w-full flex justify-between px-20 text-xl bg-white text-primary min-h-[75px] h-fit items-center font-bold rounded flex-wrap">
					<span className="flex items-center"> <BsPeopleFill className="text-yellow-500 pr-2 w-8 h-8" />20K+ Golfers</span>
					<span className="flex items-center"> <BsBookmarkCheckFill className="text-yellow-500 pr-2 w-8 h-8" />100K+ Rounds Booked</span>
					<span className="flex items-center"> <AiTwotonePushpin className="text-yellow-500 pr-2 w-8 h-8" />7+ Locations</span>
				</div>
      </div>



    </div>
  );
};

function CardComponent({ title, message, icon }) {
  return (
    <div className="card h-[300px] flex flex-col items-center justify-between text-primary py-10 bg-white border  hover:bg-slate-600 hover:border-primary hover:text-white rounded-lg shadow-lg p-4 transition duration-200 transform hover:-translate-y-2 hover:shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
			{icon}
      <p className="text-center">{message}</p>
    </div>
  );
}


function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-fit">
      <CardComponent
        title="Always Open"
        message="24/7 real-time booking on mobile and desktop"
				icon={<BsClockFill className="w-20 h-20"/>}
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
