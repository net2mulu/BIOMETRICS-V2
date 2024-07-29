import React, { useContext } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSignsPost } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { TbFaceId } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbScanEye } from "react-icons/tb";
import { TbFingerprintScan } from "react-icons/tb";
import { HomeContext } from "../../context/HomeContext";

const SearchResult = () => {
    const { result, setResult } = useContext(HomeContext);

  return (
    <div className={`${result? "flex " : "hidden "} ease-in duration-1000 relative bg-white flex flex-col gap-4 rounded-lg p-6 w-[50vw] overflow-hidden shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]`}>
      <div onClick={() => setResult(false)} className="absolute bg-red-400 right-0 top-0 w-10 inline-flex justify-center items-center text-white cursor-pointer hover:bg-white hover:text-red-400">
        x
      </div>
      <h2 className="text-xl font-medium  px-2 border-y-0 border-r-0 border-4 border-[#115BA2] text-[#115BA2] rounded  mb-4">
        Labor Details
      </h2>

      <div className="w-full  flex gap-2">
        <div className="w-[60%] bg-[#F9F9F9] rounded-xl">
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
                <p className="text-black font-medium">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">Middle Name</span>
                <p className="text-black font-medium">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">Last Name</span>
                <p className="text-black font-medium">Alemayehu</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የመጀመሪያ ስም</span>
                <p className="text-black font-medium">አለማየሁ</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የአባት ስም</span>
                <p className="text-black font-medium">እሸቴ</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs text-black/80">የአያት ስም</span>
                <p className="text-black font-medium">ሹሉካዳም</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-[#eeeeee] border-y-0 border-r-0 gap-4  px-4 w-[40%] flex flex-col my-2">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-black/80">Birth Date</span>
            <p className="text-black font-medium">June 12, 2022</p>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-black/80">Birth Place</span>
            <p className="text-black font-medium">Addis Ababa, Kolfe Keranio</p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between gap-4">
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2">
          <p className="font-medium tracking-wide">Residence</p>
          <div className="grid grid-cols-2 gap-2">
            <span className="text-sm text-black/80">
              Sub city : Kolfe Keranio
            </span>
            <span className="text-sm text-black/80">Woreda: 01</span>
            <span className="text-sm text-black/80">Zone : Addis Ababa</span>
            <span className="text-sm text-black/80">House no: 054</span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2">
          <p className="font-medium tracking-wide">Contact Info</p>
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 text-sm text-black/80">
              <FaPhoneSquareAlt className="text-[#115BA2] text-xl" />
              <span>+251911088748</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-black/80">
              <MdEmail className="text-[#115BA2] text-xl" />
              <span>nati2mulugeta@gmail.com</span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-black/80">
              <FaSignsPost className="text-[#115BA2] text-xl" />
              <span>10000</span>
            </span>
          </div>
        </div>
        <div className="bg-[#F9F9F9] rounded-md flex-1 flex flex-col gap-4 h-40 px-4 p-2">
          <p className="font-medium tracking-wide">Education Status</p>
          <span className="inline-flex items-center gap-2 text-sm text-black/80">
            <FaGraduationCap className="text-[#115BA2] text-xl" />
            <span>B.A Degree</span>
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-black/80">
            <MdAccessTimeFilled className="text-[#115BA2] text-xl" />
            <span>6 Years Experience</span>
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-black/80">
            <GiProgression className="text-[#115BA2] text-xl" />
            <span>3 work places</span>
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between gap-4">
        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_15px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4">
            <div className="flex items-center justify-start gap-2 w-full">
              <TbFaceId className="bg-blue-100 text-5xl text-[#115BA2] rounded-md" />
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#115BA2] font-bold">Face Camera</p>
                <span className="text-gray-500 text-xs">
                  {" "}
                  face scan of labor
                </span>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer">
            <span>Register</span>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_15px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4">
            <div className="flex items-center justify-start gap-2 w-full">
              <TbScanEye className="bg-blue-100 text-5xl text-[#115BA2] rounded-md" />
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#115BA2] font-bold">Iris Scan</p>
                <span className="text-gray-500 text-xs">
                  {" "}
                  Both eyes to be scanned
                </span>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer">
            <span>Register</span>
            <FaArrowRightLong />
          </div>
        </div>

        <div className="h-40 bg-white shadow-[rgba(0,0,0,0.35)_0px_5px_15px] rounded-md flex-1 flex flex-col gap-4 overflow-hidden">
          <div className="h-[60%] p-4">
            <div className="flex items-center justify-start gap-2 w-full">
              <TbFingerprintScan className="bg-blue-100 text-5xl text-[#115BA2] rounded-md" />
              <div className="flex flex-col items-start justify-center">
                <p className="text-[#115BA2] font-bold">Face Camera</p>
                <span className="text-gray-500 text-xs">
                  {" "}
                  Fingerprint scan
                </span>
              </div>
            </div>
          </div>
          <div className="inline-flex text-white bg-[#115BA2] hover:bg-[#115BA2]/60 h-[40%] gap-2 justify-center items-center cursor-pointer">
            <span>Register</span>
            <FaArrowRightLong />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default SearchResult;
