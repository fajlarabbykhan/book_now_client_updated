import {
  faBed,
  faCalendarDays,
  faCar,
  faMagnet,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const header = () => {
  return (
    <div className="px-6 bg-[#40415a]  text-white">
      <div className=" flex justify-start">
        <div className="w-full max-w-5xl mt-5 mb-14 flex flex-wrap gap-10">
          <div className="flex items-center gap-2  border-2 border-indigo-600 rounded-full	p-3 cursor-pointer">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faMagnet} />
            <span>Attractions</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h1 className="text-4xl font-bold mb-3">Find your next stay</h1>
        <p className="text-xl">
          Search deals on hotels, homes, and much more...
        </p>
      </div>
      <div className="flex flex-wrap h-20 border-2 border-indigo-600 justify-around items-center  py-2 rounded-md	">
        <div>
          <FontAwesomeIcon icon={faBed} />
          <input type="text" placeholder="Where do you want to go ?" />
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>Check-in - Check-out</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPerson} />
          <span>2 adults 2 clidren 1 room</span>
        </div>
      </div>
    </div>
  );
};

export default header;
