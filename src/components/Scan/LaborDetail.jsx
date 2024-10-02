import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSignsPost } from "react-icons/fa6";

const LaborDetail = () => {
  return (
    <div className="shadow-xl w-full bg-white rounded-xl flex flex-col gap-4 p-4">
      <h2 className="text-md font-medium  px-2 border-y-0 border-r-0 border-4 border-[#115BA2] text-[#115BA2] rounded ">
        Labor Details
      </h2>

      <div className="px-2 w-full  flex gap-2">
        <div className="w-full bg-[#F9F9F9] rounded-xl">
          <div className="flex gap-2 p-2 py-4">
            <div className="w-16  h-16 rounded-full overflow-hidden m-2 border border-[#115BA2]">
              <img
                src="https://via.placeholder.com/150"
                className=""
                alt="Profile"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">First Name</span>
                <p className="text-black font-medium text-sm">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">Middle Name</span>
                <p className="text-black font-medium text-sm">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">Last Name</span>
                <p className="text-black font-medium text-sm">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የመጀመሪያ ስም</span>
                <p className="text-black font-medium text-sm">አለማየሁ</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የአባት ስም</span>
                <p className="text-black font-medium text-sm">እሸቴ</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የአያት ስም</span>
                <p className="text-black font-medium text-sm">ሹሉካዳም</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 w-full flex justify-between gap-4">
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-2  px-4 p-2">
          <p className="font-medium tracking-wide">Residence</p>
          <div className="flex flex-col gap-2 items-start justify-center">
            <span className="text-xs text-black/80">
              Sub city : Kolfe Keranio
            </span>
            <span className="text-xs text-black/80">Woreda: 01</span>
            <span className="text-xs text-black/80">Zone : Addis Ababa</span>
            <span className="text-xs text-black/80">House no: 054</span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 px-4 p-2">
          <p className="font-medium tracking-wide">Contact Info</p>
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-xs text-black/80">
              <FaPhoneSquareAlt className="text-[#115BA2] text-xl" />
              <span>+251911088748</span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-black/80">
              <MdEmail className="text-[#115BA2] text-xl" />
              <span>nati2mulugeta@gmail.com</span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-black/80">
              <FaSignsPost className="text-[#115BA2] text-xl" />
              <span>10000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaborDetail;
