import React from "react";
// import { FaUser } from "react-icons/fa";
import Image from "next/image";

const PlayerCard = ({ name, img, title, review }) => {
  return (
    <div class="mb-20 mt-2 w-[350px] bg-clear">
      <Image
        className="rounded-full -mb-[75px] mx-auto w-[150px] h-[150px]"
        src={img}
        alt={name}
      />
      <div className="max-w-sm rounded-xl shadow-lg bg-slate-800 text-white pt-[75px]">
        <div className="px-6 py-4">
          <div className="font-bold text-xl">{name}</div>
          <div className="font-thin text-xs mb-2">{title}</div>
          <p className="text-base italic text-center mt-6 text-wrap">
            "{review}"
          </p>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #foxrungolfclub
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #neny
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #simulators
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default PlayerCard;
