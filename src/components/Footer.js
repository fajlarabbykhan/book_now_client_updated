import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-5xl text-xs	mt-[50px] mb-[10px]">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-[50px] gap-5 p-2">
        <ul className="list-none p-0">
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Countries</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Regions</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Cities</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Districts</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Airports</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Hotels</li>
        </ul>
        <ul className="list-none p-0">
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Homes </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Apartments{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Resorts </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Villas</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Hostels</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Guest houses
          </li>
        </ul>
        <ul className="list-none p-0">
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Unique places to stay{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Reviews</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Unpacked: Travel articles{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Travel communities{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Seasonal and holiday deals{" "}
          </li>
        </ul>
        <ul className="list-none p-0">
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Car rental{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Flight Finder
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Restaurant reservations{" "}
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Travel Agents{" "}
          </li>
        </ul>
        <ul className="list-none p-0">
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Curtomer Service
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Partner Help
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">Careers</li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Sustainability
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Press center
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Safety Resource Center
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Investor relations
          </li>
          <li className="mb-[12px] text-[#40415a] cursor-pointer">
            Terms & conditions
          </li>
        </ul>
      </div>
      <div className="text-sm p-2">
        Copyright &copy; {new Date().getFullYear()} Book Now and Fajla Rabby
        Khan.
      </div>
    </div>
  );
};

export default Footer;
