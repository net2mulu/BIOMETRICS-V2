import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="bg-white text-[#115BA2] font-semibold shadow-xl flex gap-4 items-center justify-center w-max rounded-lg p-6">
      <FaHome className="text-lg" />
      <p className="cursor-pointer hover:underline">Home</p>
      <MdOutlineKeyboardArrowRight />
      <p className="cursor-pointer hover:underline">Alemayehu</p>
      <MdOutlineKeyboardArrowRight />
      <p className="cursor-pointer hover:underline">Face scan</p>
    </div>
  );
};

export default BreadCrumb;
