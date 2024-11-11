import React from "react";
import { IoCloseSharp } from "react-icons/io5";
const SidBar = ({ isClose, isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 transition-all duration-300  `}
    >
      <div className="  right-0 bg-slate-200 p-2 relative  shadow-lg h-full ">
        <div>
          <h1>Your Cart</h1>
        </div>

        <span
          className="cursor-pointer absolute top-0 right-0 p-2"
          onClick={isClose}
        >
          <IoCloseSharp />
        </span>
        <div>
          <h1>your cart is not Product</h1>
        </div>
      </div>
    </div>
  );
};

export default SidBar;
