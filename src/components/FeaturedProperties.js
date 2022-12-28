import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="w-full max-w-5xl	grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 mt-3">
      <div className="flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="font-bold">Aparthotel Stare Miasto</span>
        <span className="font-light	">Dhaka</span>
        <span className="font-medium	">Starting from $120</span>
        <div className="fpRating">
          <button className="bg-[#40415a] text-white p-1 mr-[10px] font-bold">
            8.9
          </button>
          <span className="text-sm	">Excellent</span>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="font-bold">Comfort Suites Airport</span>
        <span className="font-light	">Dhaka</span>
        <span className="font-medium	">Starting from $140</span>
        <div>
          <button className="bg-[#40415a] text-white p-1 mr-[10px] font-bold">
            9.3
          </button>
          <span className="text-sm	">Exceptional</span>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="font-bold">Four Seasons Hotel</span>
        <span className="font-light">Rangamati</span>
        <span className="font-medium">Starting from $99</span>
        <div className="fpRating">
          <button className="bg-[#40415a] text-white p-1 mr-[10px] font-bold">
            8.8
          </button>
          <span className="text-sm	">Excellent</span>
        </div>
      </div>
      <div className="flex flex-col">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <span className="font-bold">Hilton Garden Inn</span>
        <span className="font-light">Sylhet</span>
        <span className="font-medium">Starting from $105</span>
        <div className="fpRating">
          <button className="bg-[#40415a] text-white p-1 mr-[10px] font-bold">
            8.9
          </button>
          <span className="text-sm	">Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
