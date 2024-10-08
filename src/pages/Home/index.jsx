import React, { useContext } from "react";
import Lmis from "../../assets/images/lmis-logo.png";
import MainSearchBox from "../../components/Home/MainSearchBox";
import KitStatus from "../../components/Home/KitStatus";
import SearchResult from "../../components/Home/SearchResult";
import { HomeContext } from "../../context/HomeContext";

const Home = () => {
  const { result, setResult } = useContext(HomeContext);
  return (
    <div className="relative flex items-start justify-center h-full w-full overflow-hidden">
      <KitStatus />
      <div className={`flex flex-col gap-2 items-center justify-center ${result?"mt-3":"mt-32"} ease-in-out duration-500`}>
        <img src={Lmis} alt="Lmis" className={`${result ? "w-44":"w-96"} ease-in-out duration-500`} />
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-black text-lg">
            Register Labor Biometrics
          </p>
          <p className="text-gray-500 text-sm text-center max-w-md">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing mockups.
          </p>
          <MainSearchBox />
           <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default Home;
