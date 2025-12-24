import React from "react";

export const Landing = () => {
  return (
    <div id="landing" className="h-[92vh] w-full relative px-5  ">
      <img
        className="rounded-xl "
        src="src/assets/hero-section1-BjHTfclZ.png"
        alt=""
      />
      <div className="text absolute z-10 top-1/2 left-30 w-[90%]">
        <h1 className="text-amber-50 text-[150px] uppercase tracking-widest leading-none ">
          design <br /> <span className="pl-60"> & Freedom</span>
        </h1>
        <div className="flex items-center justify-between pl-60 py-10 text-xl capitalize">
          <p className="text-neutral-400 w-[35%]">
            explore independence style by embracing uniqueness with our
            exclusive designer appeal
          </p>
          <div className="text-amber-50 flex items-center ">
            <p className="text-gray-50 h-12.5 w-12.5 bg-neutral-700 rounded-full mr-2 flex items-center justify-center border-2 border-gray-500">
              <i class="ri-arrow-down-long-fill"></i>
            </p>
            learn more
          </div>
        </div>
      </div>
    </div>
  );
};
