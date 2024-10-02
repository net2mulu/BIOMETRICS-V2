import React from "react";
import left from "../../../assets/images/FaceScan/left.svg";
import right from "../../../assets/images/FaceScan/right.svg";
import front from "../../../assets/images/FaceScan/front.svg";
import { GrPowerReset } from "react-icons/gr";

const FaceToolBar = () => {
  return (
    <div className="h-full flex flex-col py-8 justify-between items-center">
      <div className="flex flex-col gap-16">
        <img src={left} alt="left" className="w-32" />
        <img src={front} alt="front" className="w-32" />
        <img src={right} alt="right" className="w-32  rounded-md border-2 border-[#115BA2] bg-[#115BA2]/10" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <GrPowerReset className="text-3xl" />
        <p>Reset</p>
      </div>
    </div>
  );
};

export default FaceToolBar;
