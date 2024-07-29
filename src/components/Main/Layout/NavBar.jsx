import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import LogoWhite from "../../../assets/images/lmis_white.png";

const NavBar = () => {
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
      <div className="mr-10 flex gap-2 text-white md:order-2">
        <div className="flex flex-col justify-end items-end">
          <p className="font-bold text-lg">Abebe kebede</p>
          <p className="text-xs">ID: EMVWG58592</p>
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
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>

          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default NavBar;
