import React from "react";

const Achivment = () => {
  return (
    <div className="w-full px-5 flex items-center text-center h-40">
      <div className="w-1/2 flex justify-around leading-12">
        <div>
          <p className="text-neutral-400 uppercase">Designers</p>
          <h2 className="text-white text-[60px]">150+</h2>
        </div>
        <div>
          <p className="text-neutral-400 uppercase">clients</p>
          <h2 className="text-white text-[60px]">500+</h2>
        </div>
      </div>
      <div className="w-1/2 flex justify-around leading-12">
        <div>
          <p className="text-neutral-400 uppercase">masterpieces</p>
          <h2 className="text-white text-[60px]">20K+</h2>
        </div>
        <div>
          <p className="text-neutral-400 uppercase">events</p>
          <h2 className="text-white text-[60px]">50+</h2>
        </div>
      </div>
    </div>
  );
};

export default Achivment;
