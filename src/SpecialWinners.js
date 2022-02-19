import React, { useEffect, useState } from "react";
import Header from "./helpers/Header";
import ShowList from "./helpers/ShowList";
import SpecialList from "./helpers/SpecialList";
import priceList from "./helpers/util";

const SpecialWinners = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    priceList()
      .then((listData) => {
        let duplicateID = listData
          .map((e) => e["id"])
          .filter((item, index, arr) => arr.indexOf(item) !== index);

        listData = listData.filter((obj) => {
          return (
            duplicateID.includes(obj?.id) &&
            obj?.firstname?.length > 0 &&
            obj?.surname?.length > 0
          );
        });
        listData = listData.sort((a, b) => {
          return a.year - b.year;
        });

        setList(listData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // getList();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <h1>Special Winners</h1>
      <p>(Awarded multiple times)</p>

      {/* {list.length && <SpecialList data={list} />} */}
      {/* <SpecialList data={list} /> */}
    </div>
  );
};

export default SpecialWinners;
