import React, { useEffect, useState } from "react";
import Header from "./helpers/Header";
import ShowList from "./helpers/ShowList";
import priceList from "./helpers/util";

const Home = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    priceList()
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>List of All Nobel Prize Winners</h1>

      <ShowList data={list} />
    </div>
  );
};

export default Home;
