import React from "react";

const Section1 = () => {
  return (
    <div className="w-full text-white flex gap-5 px-5  py-10">
      <div className="w-1/2 bg-neutral-800 p-15 rounded-lg">
        <p className="uppercase">about</p>
        <h1 className="text-[50px] uppercase leading-[1.1] pt-20">
          where fashion meets freedom
        </h1>
        <div className="flex justify-between pt-15 ">
          <p className="text-neutral-400 w-[46%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            modi necessitatibus asperiores neque, sapiente at quod nihil
            doloremque quasi, est tempore, optio aut provident dignissimos
            possimus soluta laudantium dolore rerum hic unde? Ut fugiat numquam
            molestiae voluptatem consectetur inventore pariatur cupiditate esse
            voluptatum eveniet laborum, nostrum recusandae suscipit! Reiciendis,
            aliquam.
          </p>
          <p className="text-neutral-400 w-[46%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            debitis rem accusantium facilis asperiores nemo. Culpa soluta modi
            repudiandae laboriosam consectetur sapiente accusamus? Id, tempore
            doloribus? Cum dolor debitis, quod tenetur amet perferendis quos,
            tempore sed deleniti corporis expedita labore earum. Corrupti esse
            doloremque, commodi fuga repellat magni eius minima!
          </p>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden rounded-lg">
        <img src="public\hero-section2-CuCiP9uH.png" alt="" />
      </div>
    </div>
  );
};

export default Section1;
