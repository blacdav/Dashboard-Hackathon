import React from "react";
import icon from "../images/logo.svg";
import dashboard from "../images/dashboard.svg";
import scaleup from "../images/trend-upd2.svg";
import profile from "../images/profile-2user.svg";
import box from "../images/box.svg";
import disc from "../images/discount-shape.svg";
import bright from "../images/light.svg";
import dark from "../images/dark.svg";
import info from "../images/info-circled7.svg";
import setting from "../images/setting.png";
import logout from "../images/logout.svg";
import login from "../images/arrow-rightarrowright.svg";

const Sidebar = ({ visible, display, setDisplay }) => {
  return (
    <>
    <div
      className={`${visible ? "hidden lg:flex transition ease-out delay-150" : "transition ease-in delay-150"} ${display ? 'bg-tertiary text-black transition ease-in delay-150' : 'bg-black text-tertiary'} flex flex-col w-1/2 lg:w-16 min-h-[90%] border-r border-light justify-between z-30 items-start absolute lg:relative bottom-0`}
    >
      <div className="flex flex-col w-full gap-3 items-end pl-5 lg:pl-0 mt-1 lg:mt-0">
        <img src={icon} alt="..." className="pt-5 mr-2 hidden lg:flex" />
        <ul className="flex flex-col items-center justify-center gap-3 cursor-pointer w-full">
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-2 lg:justify-center hover:border-primary hover:text-primary">
            <img src={dashboard} alt="..." width={40} className="h-8 w-8" />
            <span className="flex lg:hidden">Dashboard</span>
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-3 lg:justify-center hover:border-primary hover:text-primary">
            <img src={scaleup} alt="..." width={40} className="h-5 w-5 mx-1" />
            <span className="flex lg:hidden">Sales</span>
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-3 lg:justify-center hover:border-primary hover:text-primary">
            <img src={profile} alt="..." width={40} className="h-5 w-5 mx-1" />
            <span className="flex lg:hidden">Customers</span>
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-2 lg:justify-center hover:border-primary hover:text-primary">
            <img src={box} alt="..." width={40} className="h-8 w-8" />
            <span className="flex lg:hidden">Products</span>
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-3 lg:justify-center hover:border-primary hover:text-primary">
            <img src={disc} alt="..." width={40} className="h-5 w-5 mx-1" />
            <span className="flex lg:hidden">Discounts</span>
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-3 lg:justify-center hover:border-primary hover:text-primary">
            <img src={info} alt="..." width={40} className="h-5 w-5 mx-1" />
            <span className="flex lg:hidden">Information</span>
          </li>
        </ul>
        <ul className={`${display ? 'bg-light' : 'bg-dark'} justify-center p-1 w-fit mr-3 rounded-full grid gap-3 cursor-pointer`}>
          <li onClick={() => setDisplay(true)} className="w-full items-center h-8 flex justify-center">
            <img
              src={bright}
              alt="..."
              className={`${display ? 'bg-primary translate-y-10 duration-500' : 'bg-black -translate-y-0 duration-500'} rounded-full p-1`}
            />
          </li>
          <li onClick={() => setDisplay(false)} className="w-full items-center h-8 flex justify-center">
            <img src={dark} alt="..." className={`${display ? 'bg-dark -translate-y-10 duration-500' : 'bg-primary translate-y-0 duration-500'} rounded-full p-1`} />
          </li>
        </ul>
      </div>
      <ul className="flex flex-col gap-3 pl-5 lg:pl-0 items-center lg:mb-3 cursor-pointer w-full">
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-3 lg:justify-center hover:border-primary">
          <img src={login} alt="..." width={40} className="w-5 h-5 mx-1" />
          <span className="flex lg:hidden">Upgrade</span>
        </li>
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-2 lg:justify-center hover:border-primary">
          <img src={setting} alt="..." width={40} className="w-8 h-8" />
          <span className="flex lg:hidden">Settings</span>
        </li>
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-start gap-2 lg:justify-center hover:border-primary">
          <img src={logout} alt="..." width={40} className="w-8 h-8" />
          <span className="flex lg:hidden">Logout</span>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
