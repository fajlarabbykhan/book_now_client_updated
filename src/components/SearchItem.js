import React from "react";

const SearchItem = () => {
  return (
    <div
      className="border-2    border-indigo-600 p-3 rounded
flex justify-between flex-col md:flex-row gap-3 mb-5
    "
    >
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="h-[200px] w-[200px] object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-indigo-600">Tower Street Apartments</h1>
        <span className="text-xs ">500m from center</span>
        <span className="text-xs bg-[#1f214d] text-white w-max p-1 rounded">
          Free airport taxi
        </span>
        <span className="text-xs font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="text-xs">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="text-xs text-[#1f214d] font-bold">
          Free cancellation{" "}
        </span>
        <span className="text-xs text-[#1f214d]">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <span className="font-medium "> Excellent</span>
          <button className="bg-[#304c72] p-1 rounded text-white font-bold">
            8.9
          </button>
        </div>
        <div className="text-right flex flex-col gap-1">
          <span className="text-2xl">$112</span>
          <span className="text-xs text-[#1f214d]">
            Includes taxes and fees
          </span>
          <button className="bg-[#1f214d] p-1 rounded text-white outline-none font-medium">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
