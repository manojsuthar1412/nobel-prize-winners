import React, { useEffect, useState } from "react";
import Header from "./helpers/Header";
import ShowList from "./helpers/ShowList";
import SpecialList from "./helpers/SpecialList";
import priceList from "./helpers/util";

const Home = () => {
  const [list, setList] = useState([]);

  let dataList = [];

  const getList = async () => {
    // let data = await priceList();

    priceList()
      .then((data) => {
        console.log("DATA: ", data);

        // let dataList = [];
        // data = data.map((listItem) => {
        //   if (listItem.laureates) {
        //     listItem?.laureates?.map((item) => {
        //       dataList.push({
        //         key: key++,
        //         year: listItem.year,
        //         category: listItem.category,
        //         ...item,
        //       });
        //       return dataList;
        //     });
        //   }
        //   return dataList;
        // });
        // data = data.slice(0, 10);
        // console.log("FILTERED: ", data);
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
      {/* {console.log(list)} */}
      {list.length && <ShowList data={list} />}
      {/* <SpecialList data={list} /> */}
    </div>
  );
};

export default Home;
