import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useStateContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { isActiveMenu, setisActiveMenu } = useStateContext();
  const NavButton =
    "p-2 bg-red-400 rounded-md  border-none shadow-md text-white mx-4";
  const NavLogo = "p-2 bg-yellow-400 rounded-md shadow-xl text-white";
  return (
    <div className="w-full h-16 bg-slate-300  flex justify-between items-center p-2">
      <article className="flex">
        <button className={NavButton}>help raham</button>
        <span className={NavLogo}>logo</span>
      </article>

      <article className=" flex">
        <h1 className="text-2xl tracking-widest text-yellow-600 font-bold mx-4">
          mohak
        </h1>
        <span
          className="text-3xl mx-4 cursor-pointer"
          onClick={() => setisActiveMenu((prev) => !prev)}
        >
          {isActiveMenu ? <ImCancelCircle /> : <GiHamburgerMenu />}
        </span>
      </article>
    </div>
  );
};

export default Navbar;
