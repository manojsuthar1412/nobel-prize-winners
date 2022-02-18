export const priceList = () => {
  return fetch(`http://api.nobelprize.org/v1/prize.json`)
    .then((res) => res.json())
    .then((data) => {
      data = data.prizes.filter(
        (item) => item.year >= 1900 && item.year <= 2018
      );

      let dataList = [];

      data?.map((listItem) => {
        if (listItem.laureates) {
          listItem?.laureates?.map((item) => {
            dataList.push({
              year: listItem.year,
              category: listItem.category,
              ...item,
            });
            return dataList;
          });
        }
      });

      return dataList;
    })
    .catch((err) => console.log(err));
};

export default priceList;
