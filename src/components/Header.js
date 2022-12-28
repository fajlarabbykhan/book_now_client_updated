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
const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operations === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="px-6 bg-[#40415a]  text-white ">
      <div className=" flex justify-start">
        <div
          className={
            type === "list"
              ? "w-full max-w-5xl mt-5 mb-1 flex flex-wrap gap-10"
              : "w-full max-w-5xl mt-5 mb-14 flex flex-wrap gap-10"
          }
        >
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

      {type !== "list" && (
        <>
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
            <div className="flex items-center gap-5 m-3 z-30">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-gray-500"
              />
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
            <div className="flex items-center gap-5 m-3 z-30">
              <FontAwesomeIcon icon={faPerson} className="text-gray-500" />
              <span
                className="text-gray-500  cursor-pointer "
                onClick={() => setOpenOptions(!openOptions)}
              >
                {`${options.adult} Adult. ${options.children} Children. ${options.room} Room`}
              </span>
              {openOptions && (
                // <span className="absolute top-36 md:top-16 bg-red-800">
                //   Options
                // </span>

                <div className="absolute top-36 md:top-16 bg-white text-gray-500  drop-shadow-2xl">
                  <div className="w-[300px] flex justify-between m-3">
                    <span className="optionstext">Adult</span>
                    <div className="flex items-center gap-3">
                      <button
                        className="btn btn-square btn-xs"
                        onClick={() => handleOption("adult", "d")}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span className="optioncounternumber">
                        {options.adult}
                      </span>
                      <button
                        className="btn btn-square btn-xs"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[300px] flex justify-between m-3">
                    <span className="optionstext">Children</span>
                    <div className="flex items-center gap-3">
                      <button
                        className="btn btn-square btn-xs"
                        onClick={() => handleOption("children", "d")}
                        disabled={options.children <= 0}
                      >
                        -
                      </button>
                      <span className="optioncounternumber">
                        {options.children}{" "}
                      </span>
                      <button
                        className="btn btn-square btn-xs"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[300px] flex justify-between m-3">
                    <span className="optionstext">Room</span>
                    <div className="flex items-center gap-3">
                      <button
                        className="btn btn-square btn-xs"
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optioncounternumber">
                        {options.room}
                      </span>
                      <button
                        className="btn btn-square btn-xs"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-start md:justify-center ml-3 gap-5  ">
              <button className="btn btn-primary w-3/6 bg-[#40415a]">
                Search
              </button>
            </div>
          </div>
        </>
      )}
      <br />
    </div>
  );
};

export default Header;
