import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../../data/data";
import { useStateContext } from "../../context/ContextProvider";

const Sidebar = () => {
  const { isActiveMenu, setisActiveMenu, setscreenSize, screenSize } =
    useStateContext();
  const activeLink =
    "flex items-center flex-row-reverse gap-5 pr-4 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-yellow-400 text-right";
  const normalLink =
    "flex items-center flex-row-reverse gap-5 pr-4 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md  text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 hover:bg-yellow-50";

  const handleCloseMobile = () => {
    if (isActiveMenu && screenSize <= 900) {
      setisActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen overflow-auto ">
      <div className="flex flex-row-reverse justify-between items-center">
        <Link
          to={"/"}
          onClick={() => {
            setisActiveMenu(false);
          }}
          className="items-center flex  flex-row-reverse justify-center gap-3 mr-3 mt-4 text-xl font-extrabold tracking-wide dark:text-white text-slate-900"
        >
          <SiShopware /> <span>moham</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            setisActiveMenu((prev) => !prev);
          }}
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block  md:hidden"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-10 mr-4 mb-6">
        {links.map((item, index) => (
          <div key={index}>
            <p className="text-gray-400 m-3  mt-4 uppercase text-right">
              {item.title}
            </p>
            {item.links.map((link, index) => (
              <NavLink
                to={`/${link.route}`}
                key={index}
                onClick={handleCloseMobile}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {link.icon}
                <span className="capitalize">{link.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
