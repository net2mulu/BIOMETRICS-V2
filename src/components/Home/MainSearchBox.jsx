import React, { useContext } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { HomeContext } from "../../context/HomeContext";

const MainSearchBox = () => {
  const { setResult } = useContext(HomeContext);
  const theFunc = () => {
    setResult("loading");
    setTimeout(() => {
      setResult(true);
    }, 3000);
  };
  return (
    <div className="flex items-center  mx-auto">
      <label for="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <span className="text-2xl font-bold text-black/60">#</span>
        </div>
        <input
          type="text"
          id="voice-search"
          className="shadow-[inset_0_0_6px_#babebf] bg-white border-none text-gray-900 text-sm rounded-lg block  ps-10 p-2.5 w-[600px] h-12"
          placeholder="Biometric ID"
          required
        />

        <button
          type="button"
          onClick={() => theFunc()}
          className="absolute inset-y-0 end-0 inline-flex items-center gap-2 h-8 my-2 mx-2 px-3 text-sm font-medium text-white bg-[#115BA2] rounded border border-[#115BA2] hover:bg-[#115BA2]"
        >
          <RiUserSearchFill />
          Search
        </button>
      </div>
    </div>
  );
};

export default MainSearchBox;
