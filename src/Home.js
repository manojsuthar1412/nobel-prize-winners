import React, { useEffect, useState } from "react";
import Header from "./helpers/Header";
import ShowList from "./helpers/ShowList";
import priceList from "./helpers/util";

const Home = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    priceList().then((data) => {
      console.log("DATA: ", data);

      setList(data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>List of All Nobel Prize Winners</h1>
      {list.length && <ShowList data={list} />}
    </div>
  );
};

export default Home;
