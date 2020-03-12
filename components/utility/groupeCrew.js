import groupByDate from './groupByDate';

export default (arry, sortBy, sortDate) => {
  const sortDepart = arry.reduce((acc, obj) => {
    let key = obj[sortBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);

  const arr = Object.entries(sortDepart).map(([key, value]) => ({
    [key]: groupByDate(value, sortDate)
  }));

  const arrLength = arr.length - 1;
  let newData = {};

  for (let i = 0; i < arrLength; i++) {
    newData = { ...newData, ...arr[i] };
  }

  return newData;
};
