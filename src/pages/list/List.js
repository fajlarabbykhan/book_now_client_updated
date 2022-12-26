import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <p>This is list page</p>
    </div>
  );
};

export default List;
