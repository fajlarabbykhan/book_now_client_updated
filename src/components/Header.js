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
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="px-6 bg-[#40415a]  text-white ">
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
      <div className="grid grid-cols-1 md:grid-cols-4 h-25  border-2 border-indigo-600  py-2 rounded-md mb-[-60px] bg-white relative">
        <div className="flex items-center gap-5 m-3 ">
          <FontAwesomeIcon icon={faBed} className="text-gray-500" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="border-none	outline-none	text-gray-500"
          />
        </div>
        <div className="flex items-center gap-5 m-3 ">
          <FontAwesomeIcon icon={faCalendarDays} className="text-gray-500" />
          <span
            className="text-gray-500  cursor-pointer"
            onClick={() => setOpenDate(!openDate)}
          >
            {/* Check-in - Check-out */}
            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="absolute top-28 md:top-16"
            />
          )}
        </div>
        <div className="flex items-center gap-5 m-3 ">
          <FontAwesomeIcon icon={faPerson} className="text-gray-500" />
          <span className="text-gray-500  cursor-pointer ">
            2 adults 2 clidren 1 room
          </span>
        </div>
        <div className="flex items-center justify-start md:justify-center ml-3 gap-5  ">
          <button className="btn btn-primary w-3/6 ">Search</button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Header;
