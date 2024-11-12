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
    <>
      <div
        className={`${sticky ? "header py-4 sticky top-0 z-50 shadow-xl" : ""}`}
      >
        <div className="flex justify-between w-10/12 m-auto py-4 items-center">
          {/* logo */}
          <div className="text-2xl font-bold ">
            <span>B</span>est<span>H</span>ouse
          </div>
          {/* links */}
          <div className="flex justify-around">
            {navbar.map((link) => (
              <div className="px-2" key={link.id}>
                <Link
                  className="active link-hover  transition-all"
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
      </div>
      <div>
        <SidBar isOpen={isSidBarOpen} isClose={() => setSedBarOpen(false)} />
      </div>
    </>
  );
};

export default Header;
