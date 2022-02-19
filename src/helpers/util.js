export const priceList = () => {
  return fetch(`http://api.nobelprize.org/v1/prize.json`)
    .then((res) => res.json())
    .then((data) => {
      data = data.prizes.filter(
        (item) => item.year >= 1900 && item.year <= 2018
      );
      let dataList = [];

      // console.log("RAW: ", data);

      return data;
    })
    .catch((err) => console.log(err));
};

export default priceList;
