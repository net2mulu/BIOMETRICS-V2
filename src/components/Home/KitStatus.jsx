import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { BsCameraFill } from "react-icons/bs";
import { GiServerRack } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

const KitStatus = () => {
  return (
    <nav className="absolute  flex shrink-0 grow-0 justify-around items-center gap-2 border-t border-gray-200 bg-white/50 p-2.5 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.18)] backdrop-blur-lg top-48 -translate-y-2/4 right-6 min-h-[auto] min-w-[64px] flex-col rounded-lg">
      <span className="text-xs font-bold pb-2 border border-x-0 border-t-0">
        Kit Status
      </span>
      <div className="relative rounded-full w-14 h-14 bg-[#115BA2]">
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-400 rounded-full -top-2 -right-2">
          <FaCheckCircle />
        </div>
        <div className="flex aspect-square min-h-[48px] flex-col items-center justify-center gap-1 text-white">
          <GiServerRack className="text-2xl" />
        </div>
      </div>
      <div className="relative rounded-full w-14 h-14 bg-[#115BA2]">
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-400 rounded-full -top-2 -right-2">
          <FaCheckCircle />
        </div>
        <div className="flex aspect-square min-h-[48px] flex-col items-center justify-center gap-1 text-white">
          <FaFingerprint className="text-2xl" />
        </div>
      </div>
      <div className="relative rounded-full w-14 h-14 bg-[#115BA2]">
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-400 rounded-full -top-2 -right-2">
          <FaCheckCircle />
        </div>
        <div className="flex aspect-square min-h-[48px] flex-col items-center justify-center gap-1 text-white">
          <IoIosEye className="text-2xl" />
        </div>
      </div>
      <div className="relative rounded-full w-14 h-14 bg-[#115BA2]">
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-400 rounded-full -top-2 -right-2">
          <FaCheckCircle />
        </div>
        <div className="flex aspect-square min-h-[48px] flex-col items-center justify-center gap-1 text-white">
          <BsCameraFill className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default KitStatus;