import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import LogoWhite from "../../../assets/images/lmis_white.png";
import { AuthContext } from "../../../context/AuthContext";

const NavBar = () => {
  const { user_data, user_data_loading, logOut } = useContext(AuthContext);
  const user = user_data?.registration_namespace?.labors[0];

  return (
    <Navbar fluid className="bg-[#115BA2] rounded-b-xl rounded-t-none py-4">
      <Navbar.Brand>
        <div className="flex flex-col pl-4 pr-10 border border-y-0 border-l-0 border-white/20 ">
          <img src={LogoWhite} className="w-36" alt="Lmis Logo" />
          <p className="ml-12 -mt-1 whitespace-nowrap text-xs font-bold text-white tracking-wide">
            Biometrics Registration
          </p>
        </div>
      </Navbar.Brand>
      {user_data_loading ? (
        <div className="mr-10 rounded-md max-w-xs w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="h-2 bg-gray-400 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-400 rounded col-span-2 max-w-sm"></div>
                  <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                </div>
              </div>
            </div>
            <div className="rounded-full bg-gray-400 h-10 w-10"></div>
          </div>
        </div>
      ) : (
        <div className="mr-10 flex gap-2 text-white md:order-2">
          <div className="flex flex-col justify-end items-end">
            <p className="font-bold text-lg">
              {user?.first_name +
                " " +
                user?.first_name +
                " " +
                user?.grand_father_name}
            </p>
            <p className="text-xs">ID: {user?.labor_id}</p>
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                bordered
                size="md"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">OSSC Operator</span>
              <span className="block truncate text-sm font-medium">
                {user?.user_info?.phoneNumber}
              </span>
            </Dropdown.Header>

            <Dropdown.Item>
              <a href="https://lmis.gov.et" target="_blank" rel="noreferrer">
                Go to LMIS
              </a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
