import React from "react";
import { category } from "../data/Data";

const Categoryi = () => {
  return (
    <div>
      <div className="w-10/12 m-auto mt-10">
        <div className=" w-full h-full flex justify-between gap-4 items-center">
          {category.map((val, idx) => (
            <div key={idx}>
              {val.img && (
                <div className="relative rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
                  <img src={val.img} alt="img" />
                  <span className="absolute bottom-0 left-0 px-3 bg-white rounded-3xl">
                    {val.name}
                  </span>
                </div>
              )}
              <div className="h-full w-full overflow-hidden rounded-md gap-2  flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 ">
                {val.imgs &&
                  val.imgs.map((itm, idx) => (
                    <div
                      key={idx}
                      className=" h-full relative rounded-3xl overflow-hidden  "
                    >
                      <img src={itm.img} alt="itm.name" />
                      <span className="absolute bottom-0 left-0 px-3 bg-white rounded-3xl">
                        {itm.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categoryi;
