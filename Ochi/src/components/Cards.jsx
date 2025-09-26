import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex gap-5 items-center px-20 -mt-20">
      <div className="card-container h-[50vh] w-1/2">
        <div className=" relative card w-full h-full rounded-xl flex justify-center items-center">
          <img 
            src="https://shekunj.s3.amazonaws.com/media/blog_images/Website_Banner_22_nrNWmOc.png"
            alt=""
          />
          
        </div>
      </div>
      <div className="card-container h-[50vh] w-1/2 flex gap-5 items-center justify-center">
        <div className="card w-1/2 h-full bg-green-900 rounded-xl relative flex items-center justify-center">
          <img
            src="https://i.ibb.co/cXr00Rd9/Gemini-Generated-Image-aqyudtaqyudtaqyu.png"
            alt=""
          />
        </div>
        <div className="card w-1/2 h-full  bg-green-900 rounded-xl relative items-center justify-center flex">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-6 bottom-6 px-6 py-1 border-2 rounded-full">
            &copy;2025
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
