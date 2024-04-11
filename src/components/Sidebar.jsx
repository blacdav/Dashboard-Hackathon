import React, { useState } from "react";
import icon from "../images/Vectorlogo.svg";
import dashboard from "../images/Frame 12dashboard.svg";
import scaleup from "../images/trend-upd2.svg";
import profile from "../images/profile-2user.svg";
import box from "../images/Frame 12box.svg";
import disc from "../images/discount-shape.svg";
import bright from "../images/Grouplight.svg";
import dark from "../images/Vectordark.svg";
import info from "../images/info-circled7.svg";
import setting from "../images/Frame 12setting.png";
import logout from "../images/Frame 12logout.svg";
import login from "../images/arrow-rightarrowright.svg";

const Sidebar = ({ visible, onChange }) => {
  const [theme, setTheme] = useState(true)
  return (
    <div
      className={`${
        !visible ? "hidden" : ""
      }
      ${!theme ? 'bg-black text-secondary' : 'bg-tertiary text-black'} flex flex-col pl-2 w-14 lg:w-16 h-[90%] border-r border-light justify-between z-30 items-start fixed md:absolute md:bottom-0`}
      id="togglebar"
    >
      <div className="flex flex-col w-full gap-3 items-end mt-1 lg:mt-0">
        <img src={icon} alt="..." className="pt-3 hidden lg:flex" />
        <ul className="flex flex-col items-center justify-center gap-3 cursor-pointer w-full">
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={dashboard} alt="..." width={40} className="h-8 w-8" />
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={scaleup} alt="..." width={40} className="h-5 w-5" />
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={profile} alt="..." width={40} className="h-5 w-5" />
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={box} alt="..." width={40} className="h-8 w-8" />
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={disc} alt="..." width={40} className="h-5 w-5" />
          </li>
          <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
            <img src={info} alt="..." width={40} className="h-5 w-5" />
          </li>
        </ul>
        <ul className={`${theme ? 'bg-light' : 'bg-dark'} justify-center p-1 w-fit mr-2 rounded-full grid gap-3 cursor-pointer`}>
          <li onClick={() => setTheme(true)} className="w-full items-center h-8 flex justify-center">
            <img
              src={bright}
              alt="..."
              className={`${theme ? 'bg-primary' : 'bg-black'} rounded-full p-1`}
            />
          </li>
          <li onClick={() => setTheme(false)} className="w-full items-center h-8 flex justify-center">
            <img src={dark} alt="..." className={`${!theme ? 'bg-light' : 'bg-dark'} rounded-full p-1`} />
          </li>
        </ul>
      </div>
      <ul className="flex flex-col gap-3 items-center lg:mb-3 cursor-pointer w-full">
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
          <img src={login} alt="..." width={40} className="w-5 h-5" />
        </li>
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
          <img src={setting} alt="..." width={40} className="w-8 h-8" />
        </li>
        <li className="w-full items-center hover:border-r-4 h-8 flex justify-center hover:border-primary">
          <img src={logout} alt="..." width={40} className="w-8 h-8" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
