import React from "react";

const MailList = () => {
  return (
    <div className="w-full mt-[50px] bg-[#40415a] text-white flex flex-col items-center gap-5 p-5">
      <h1
        className="text-3xl font-light

 "
      >
        Save time, save money!
      </h1>
      <span className="font-light">
        Sign up and we'll send the best deals to you
      </span>
      <div>
        <input
          type="text"
          placeholder="Your Email"
          className="w-[300px] h-[40px] p-5 outline-none	mr-[10px] rounded-md	"
        />
        <button className="h-[40px] text-white font-medium outline-none rounded-md cursor-pointer bg-indigo-600 p-2	">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default MailList;
