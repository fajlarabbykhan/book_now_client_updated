import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchItem from "../../components/SearchItem";

const List = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5 ">
        <div className="w-full max-w-5xl grid md:grid-cols-3 gap-5 p-2">
          <div className=" bg-[#304c72] rounded-md p-3 md:sticky md:top-2 h-[500px] relative">
            <h1 className="text-xl text-white mb-2">Search</h1>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-white ">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="text-gray-500 p-1 outline-none h-8"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-white ">Check-in Date</label>
              <span
                className="text-gray-500  cursor-pointer h-8 bg-white p-1"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  // editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  // moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="absolute top-[178px] md:top-[178px]"
                />
              )}
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-white ">Options</label>
              <div className="flex justify-between mb-2 text-white">
                <span className="text-sm">
                  Min Price (<small>per night</small>)
                </span>
                <input
                  type="number"
                  min={10}
                  placeholder="Starts from $10"
                  className="w-1/2 outline-none p-1 text-gray-500"
                />
              </div>
              <div className="flex justify-between mb-2 text-white">
                <span className="text-sm">
                  Max Price (<small>per night</small>)
                </span>
                <input
                  type="number"
                  className="w-1/2 outline-none p-1 text-gray-500"
                />
              </div>
              <div className="flex justify-between mb-2 text-white">
                <span className="text-sm">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="w-1/2 outline-none p-1 text-gray-500"
                  placeholder={options.adult}
                />
              </div>
              <div className="flex justify-between mb-2 text-white">
                <span className="text-sm">Children</span>
                <input
                  type="number"
                  min={0}
                  className="w-1/2 outline-none p-1 text-gray-500"
                  placeholder={options.children}
                />
              </div>
              <div className="flex justify-between mb-2 text-white">
                <span className="text-sm">Room</span>
                <input
                  type="number"
                  min={1}
                  className="w-1/2 outline-none p-1 text-gray-500"
                  placeholder={options.room}
                />
              </div>
              <button className="bg-[#1f214d] p-3 text-white outline-none font-medium">
                Search
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
