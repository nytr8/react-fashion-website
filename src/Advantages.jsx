import React from "react";

const Advantages = () => {
  return (
    <div className="w-full text-white px-5">
      <h1 className="text-[50px] uppercase px-15 py-15 pb-10">
        our advantages
      </h1>
      <div className="flex w-full gap-5">
        <div className="w-1/2 rounded-lg overflow-hidden">
          <img src="public\advantage-1-DlbU4hRO.jpg" alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="h-1/2 bg-neutral-800 rounded-lg p-15 flex justify-between gap-5">
            <div className="w-[75%] flex flex-col justify-between">
              <h2 className="text-2xl uppercase">independent designers</h2>
              <p className="text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi similique assumenda minus expedita voluptates animi,
                obcaecati facere natus tenetur temporibus iusto, delectus
                quisquam culpa ab atque! Maxime laudantium voluptate earum quod,
                nam, eum vero odio atque quaerat repudiandae omnis! Iure.
              </p>
            </div>
            <div className="w-[20%] text-neutral-400 flex items-center uppercase self-end justify-end">
              <p className="text-gray-50 h-10 w-10 bg-gray-700 rounded-full mr-2 flex items-center justify-center border-2 border-gray-500">
                <i class="ri-arrow-right-up-long-line"></i>
              </p>
              explore
            </div>
          </div>
          <div className="h-1/2 bg-neutral-800 rounded-lg p-15 flex justify-between gap-5">
            <div className="w-[75%] flex flex-col justify-between">
              <h2 className="text-2xl uppercase">exclusive & uniquity</h2>
              <p className="text-neutral-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi similique assumenda minus expedita voluptates animi,
                obcaecati facere natus tenetur temporibus iusto, delectus
                quisquam culpa ab atque! Maxime laudantium voluptate earum quod,
                nam, eum vero odio atque quaerat repudiandae omnis! Iure.
              </p>
            </div>
            <div className="w-[20%] text-neutral-400 flex items-center uppercase self-end justify-end">
              <p className="text-gray-50 h-10 w-10 bg-gray-700 rounded-full mr-2 flex items-center justify-center border-2 border-gray-500">
                <i class="ri-arrow-right-up-long-line"></i>
              </p>
              explore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
