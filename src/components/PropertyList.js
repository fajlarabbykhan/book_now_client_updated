import React from "react";

const PropertyList = () => {
  return (
    <div className="w-full max-w-5xl	grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2 mt-3 ">
      <div className="rounded-lg overflow-hidden	cursor-pointer	">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
          className="w-full h-[150px] object-cover	"
        />
        <div className="">
          <h1 className=" font-bold">Hotels</h1>
          <h2 className="text-sm text-gray-500">233 hotels</h2>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden	cursor-pointer	">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
          className="w-full h-[150px] object-cover"
        />
        <div className="">
          <h1 className=" font-bold">Apartments</h1>
          <h2 className="text-sm text-gray-500">2331 hotels</h2>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden	cursor-pointer	">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="w-full h-[150px] object-cover"
        />
        <div>
          <h1 className=" font-bold">Resorts</h1>
          <h2 className="text-sm text-gray-500">2331 hotels</h2>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden	cursor-pointer	">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="w-full h-[150px] object-cover"
        />
        <div>
          <h1 className=" font-bold">Villas</h1>
          <h2 className="text-sm text-gray-500">2331 hotels</h2>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden	cursor-pointer	">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="w-full h-[150px] object-cover"
        />
        <div>
          <h1 className=" font-bold">Cabins</h1>
          <h2 className="text-sm text-gray-500">2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
