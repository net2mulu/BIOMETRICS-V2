import React from "react";
import BreadCrumb from "./BreadCrumb";
import LaborDetail from "./LaborDetail";
import vector from "../../assets/images/vector.svg";

const ScanLayout = ({
  children,
  toolBarContent,
  control,
  title,
  description,
}) => {
  return (
    <div className="w-full h-full flex items-center gap-4 justify-center">
      <div className=" w-2/5 h-full flex flex-col gap-4 py-6 px-2">
        <BreadCrumb />
        <LaborDetail />
        {control}
      </div>
      <div className="w-3/5 h-full flex justify-between gap-4 py-6 px-2">
        <div className="w-full h-full space-y-4">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-[#115BA2]  font-bold">{title}</h1>
              <p className="text-sm text-gray-400 max-w-sm">{description}</p>
            </div>
            <div className="flex flex-col">
              <button className="rounded px-8 py-3 text-[#115BA2] border border-[#115BA2] hover:text-white hover:bg-[#115BA2]">
                Finish
              </button>
            </div>
          </div>
          {children}
        </div>
        <div className="relative w-32 shadow-[rgba(0,0,0,0.35)_0px_5px_10px] bg-white h-full p-6 rounded-xl overflow-hidden">
          {toolBarContent}
          <img
            src={vector}
            alt="vector"
            className="absolute  bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ScanLayout;
