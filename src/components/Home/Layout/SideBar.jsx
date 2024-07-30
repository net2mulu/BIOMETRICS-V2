import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const SideBar = () => {
  return (
    <nav className="z-20 flex shrink-0 grow-0 justify-start gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 left-6 min-h-[80%] my-2 -ml-6 rounded-l-none  min-w-[64px] flex-col rounded-lg border">
      <Link
        to="/home"
        className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-[#115BA2] text-white hover:bg-[#115BA2]/60"
      >
        <FaHome />
        <small className="text-center text-xs font-medium"> Home </small>
      </Link>

      <Link
        to="#"
        className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-[#115BA2] hover:bg-[#115BA2]/10 hover:text-[#115BA2]"
      >
        <FaUsers />
        <small className="text-center text-xs font-medium"> Labors </small>
      </Link>
    </nav>
  );
};

export default SideBar;
