import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="bg-[#FAFAFA] shadow m-4 ml-28 mr-6 rounded-lg h-[86vh]">{children}</div>
    </>
  );
};

export default MainLayout;
