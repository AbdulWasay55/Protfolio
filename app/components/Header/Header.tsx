"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
const Header = () => {
  const [isOpenMenu, setIsOpenmenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenmenu(!isOpenMenu);
  };

  return (
    <div className="h-15 border-slate-900/10 border-b-2 flex items-center justify-between px-4 shadow-lg w-full">
      <Image
        className="animation-left"
        src="/logo.png"
        alt="web-logo"
        width={80}
        height={20}
      />
      <button
        className="block md:hidden text-slate-500 animate-item delay-1"
        onClick={toggleMenu}
      >
        {isOpenMenu ? (
          <HiX className="w-8 h-8" />
        ) : (
          <HiMenu className="w-8 h-8" />
        )}
      </button>
      <div className=" hidden md:flex font-semibold">
        <ul className="flex gap-3.5 text-slate-500">
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-1">
            Home
          </li>
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-2">
            <a href="#about">About us</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-3">
            {" "}
            <a href="mailto:wasayriirus@gmail.com">Contact</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer animate-item delay-4">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          isOpenMenu ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10`}
      >
        <ul className="flex flex-col items-center gap-3 py-4 text-slate-500">
          <li className="hover:text-slate-950 cursor-pointer">Home</li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="#about">About us</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="mailto:wasayriirus@gmail.com">Contact</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
