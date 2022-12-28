import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="mt-[60px] flex flex-col items-center">
        <h1 className="lg:w-[1024px] lg:p-2 text-2xl font-bold">
          Explore Bangladesh
        </h1>
        <h1 className="lg:w-[1024px] lg:p-2 text-sm text-gray-400  mb-2 lg:mb-0">
          These popular destinations have a lot to offer
        </h1>
        <Featured className="" />
        <h1 className="lg:w-[1024px] lg:p-2 text-2xl font-bold mt-2">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="lg:w-[1024px] lg:p-2 text-2xl font-bold mt-5">
          Stay at our top unique properties
        </h1>
        <h1 className="lg:w-[1024px] lg:p-2 text-sm text-gray-400  mb-2 lg:mb-0">
          From castles and villas to boats and igloos, we have it all
        </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
