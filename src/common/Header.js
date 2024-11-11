import React, { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import SidBar from "./SidBar";
const Header = () => {
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    const handelescroll=()=>{
      setSticky(window.scrollY>0)
    }
    window.addEventListener("scroll",handelescroll)
    return ()=>{
      window.removeEventListener("scroll",handelescroll)
    }
  },[])

  const [isSidBarOpen,setSedBarOpen]=useState(false)

  return (
    <div>
      <div
        className={`${
          sticky
            ? "flex items-center justify-between bg-orange-600 py-5 shadow-sm px-4"
            : "flex items-center justify-between px-4"
        }`}
      >
        {/* logo */}
        <div className="text-2xl font-bold ">
          <span>B</span>est<span>H</span>ouse
        </div>
        {/* links */}
        <div className="flex justify-around">
          {navbar.map((link) => (
            <div className="px-2" key={link.id}>
              <Link
                className="font-semibold text-xl hover:scale-105 hover:text-purple-400 transition-all"
                to={link.path}
              >
                {link.nav}
              </Link>
            </div>
          ))}
        </div>
        {/* cart and user */}
        <div className="flex gap-2 cursor-pointer">
          <div>
            <FaUser size={25} />
          </div>
          <div className="relative">
            <FaHeart size={25} />
            <span className="absolute flex justify-center items-center font-bold top-0 right-0 bg-red-600 w-4 h-4 rounded-full">
              1
            </span>
          </div>
          <Link
            to={""}
            onClick={() => setSedBarOpen(true)}
            className="relative"
          >
            <FaShoppingCart size={25} />
            <span className="absolute flex justify-center items-center font-bold top-0 right-0 bg-red-600 w-4 h-4 rounded-full">
              1
            </span>
          </Link>
        </div>
      </div>
      <div>
        <SidBar isOpen={isSidBarOpen} isClose={()=>setSedBarOpen(false)} />
      </div>
    </div>
  );
};

export default Header;
