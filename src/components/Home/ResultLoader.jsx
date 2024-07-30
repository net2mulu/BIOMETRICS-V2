import React, { useContext } from "react";
import { HomeContext } from "../../context/HomeContext";

const ResultLoader = () => {
  const { result, setResult } = useContext(HomeContext);
 
  return (
    <div
      className={`${
        result ? "flex " : "hidden "
      } ease-in duration-1000 relative bg-white flex flex-col gap-4 rounded-lg p-6 w-[60vw] overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]`}
    >
      <div
        onClick={() => setResult(false)}
        className="absolute bg-red-400 right-0 top-0 w-10 inline-flex justify-center items-center text-white cursor-pointer hover:bg-white hover:text-red-400"
      >
        x
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gray-100 rounded-md animate-pulse mr-6"></div>
        <div className="relative z-10 p-4">
          <p className="text-xl font-medium px-2 border-y-0 border-r-0 border-4 border-[#115BA2] text-[#115BA2] rounded" />
        </div>
      </div>

      <div class="px-2 w-full flex gap-2">
        <div class="w-[60%] bg-[#F9F9F9] rounded-md">
          <div class="flex gap-2 p-2 py-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 bg-size-200 animate-pulse">
            <div class="w-16 h-16 rounded-full overflow-hidden m-2 border border-gray-200 bg-gray-200"></div>
            <div class="grid grid-cols-3 gap-4 w-full">
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
              <div class="flex flex-col gap-1">
                <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
                <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-[#eeeeee] rounded-md border-y-0 border-r-0 gap-4 px-4 w-[40%] flex flex-col my-4 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 bg-size-200 animate-pulse">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
            <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs text-black/80 bg-gray-200 w-16 h-4 block animate-pulse"></span>
            <div class="bg-gray-200 w-full h-5 block animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="px-2 w-full flex justify-between gap-4">
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2 animate-pulse">
          <p className="font-medium tracking-wide bg-gray-200 h-4 w-32 rounded"></p>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-sm text-black/80 bg-gray-200 h-4 w-28 rounded"></span>
            <span className="text-sm text-black/80 bg-gray-200 h-4 w-28 rounded"></span>
            <span className="text-sm text-black/80 bg-gray-200 h-4 w-28 rounded"></span>
            <span className="text-sm text-black/80 bg-gray-200 h-4 w-28 rounded"></span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2 animate-pulse">
          <p className="font-medium tracking-wide bg-gray-200 h-4 w-32 rounded"></p>
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
            <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
            <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2 animate-pulse">
          <p className="font-medium tracking-wide bg-gray-200 h-4 w-32 rounded"></p>
          <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
          <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
          <span className="inline-flex items-center gap-2 text-sm text-black/80 bg-gray-200 h-4 w-40 rounded"></span>
        </div>
      </div>

      <div className="px-2 w-full flex justify-between gap-6">
        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_10px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4 animate-pulse">
            <div className="flex items-center justify-start gap-2 w-full">
              <div className="bg-blue-100 text-5xl text-[#115BA2] rounded-md w-12 h-12"></div>
              <div className="flex flex-col items-start justify-center">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-32 h-3 bg-gray-200 rounded mt-2"></div>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer animate-pulse">
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_10px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4 animate-pulse">
            <div className="flex items-center justify-start gap-2 w-full">
              <div className="bg-blue-100 text-5xl text-[#115BA2] rounded-md w-12 h-12"></div>
              <div className="flex flex-col items-start justify-center">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-32 h-3 bg-gray-200 rounded mt-2"></div>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer animate-pulse">
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_10px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4 animate-pulse">
            <div className="flex items-center justify-start gap-2 w-full">
              <div className="bg-blue-100 text-5xl text-[#115BA2] rounded-md w-12 h-12"></div>
              <div className="flex flex-col items-start justify-center">
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-32 h-3 bg-gray-200 rounded mt-2"></div>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer animate-pulse">
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultLoader;
