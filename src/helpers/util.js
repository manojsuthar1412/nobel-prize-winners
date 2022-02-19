import axios from "axios";

export const priceList = async () => {
  // res.prizes.filter((item) => item.year >= 1900 && item.year <= 2018);
  let res = await axios.get(`https://api.nobelprize.org/v1/prize.json`);
  let data = res.data.prizes.filter(
    (item) => item.year >= 1900 && item.year <= 2018
  );
  let dataList = [];
  let key = 0;

  data = data.map((listItem) => {
    if (listItem.laureates) {
      listItem?.laureates?.map((item) => {
        dataList.push({
          key: key++,
          year: listItem.year,
          category: listItem.category,
          ...item,
        });
        return dataList;
      });
    }
    return dataList;
  });
  // data = data.slice(0, 10);
  // console.log("FILTERED: ", dataList);
  // })
  return dataList;
  // .catch((err) => console.log(err));
  // console.log(res.data.prizes);
  // res
  //   .then((data) => {
  //     data = data.prizes.filter(
  //       (item) => item.year >= 1900 && item.year <= 2018
  //     );

  //     // console.log("RAW: ", data);

  //     return data;
  //   })
  //   .catch((err) => console.log(err));
};

export default priceList;
