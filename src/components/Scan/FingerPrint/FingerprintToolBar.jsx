import React from 'react'
import left4 from "../../../assets/images/Fingerprint/left-four.svg";
import right4 from "../../../assets/images/Fingerprint/right-four.svg";
import thumb from "../../../assets/images/Fingerprint/thumbs.svg";
import { GrPowerReset } from "react-icons/gr";

const FingerprintToolBar = () => {
  return (
    <div className="h-full flex flex-col py-8 justify-between items-center">
    <div className="flex flex-col gap-16">
      <img src={left4} alt="left" className="w-32 p-1 rounded-md border-2 border-[#115BA2] bg-[#115BA2]/10" />
      <img src={thumb} alt="right" className="w-32" />
      <img src={right4} alt="front" className="w-32" />
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
      <GrPowerReset className="text-3xl" />
      <p>Reset</p>
    </div>
  </div>
  )
}

export default FingerprintToolBar
