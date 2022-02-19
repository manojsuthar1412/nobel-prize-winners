import axios from "axios";

export const priceList = async () => {
  // res.prizes.filter((item) => item.year >= 1900 && item.year <= 2018);
  let res = await axios.get(`http://api.nobelprize.org/v1/prize.json`);
  return res.data.prizes.filter(
    (item) => item.year >= 1900 && item.year <= 2018
  );
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
