import React from "react";
import l from "../../../assets/images/FaceScan/l.svg";
import r from "../../../assets/images/FaceScan/r.svg";
import f from "../../../assets/images/FaceScan/f.svg";

const FacePreview = () => {
  return (
    <div className=" border border-[#115BA2] rounded-lg py-4 gap-4 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow max-w-xs">
          <img className="rounded-t-lg w-40 shadow" src={l} alt="" />
        </div>
        <span className="text-3xl font-bold text-[#115BA2]">L</span>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow max-w-xs">
          <img className="rounded-t-lg w-60 shadow" src={f} alt="" />
        </div>
        <span className="text-3xl font-bold text-[#115BA2]">F</span>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-gray-200 border border-gray-200 rounded-lg shadow max-w-xs">
          <img className="rounded-t-lg w-40 shadow" src={r} alt="" />
        </div>
        <span className="text-3xl font-bold text-[#115BA2]">R</span>
      </div>
    </div>
  );
};

export default FacePreview;
