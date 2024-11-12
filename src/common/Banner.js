import React from "react";
import { banners } from "../data/Data";
import Slider from "react-slick";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { GiSofa } from "react-icons/gi";
import { Link } from "react-router-dom";
const Banner = () => {
  var setting = {
    dots: false,
    infinity: true,
    speed: 500,
    SlideToShow: 1,
    SlideToScroll: 1,
    prevArrow: <IoMdArrowRoundBack />,
    nextArrow: <IoMdArrowRoundForward />,
  };
  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div className="mb-10">
          <div className="header-text">
            <h1 className="flex items-center">
              <span className="text-white mr-4 common-hover text-4xl rounded-3xl p-3 px-4">
                <GiSofa />
              </span>{" "}
              Elevate Your LifeStyle
            </h1>
            <h1>With Our Furniture</h1>
            <h1>
              Creation{" "}
              <Link to={""}>
                <span className="text-white mr-4 common-hover text-4xl rounded-3xl px-3">
                  Shop Now
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div>
          <Slider {...setting}>
            {banners.map((val, indx) => (
              <div key={indx}>
                <img src={val.banner} alt={indx} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
