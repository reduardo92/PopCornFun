export default arry => {
  const arrData = arry.reduce((acc, obj) => {
    let key = obj.name;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, []);

  const joinData = Object.entries(arrData)
    .map(([key, value]) => {
      let department = value.map(item => item.department);
      let item = arrData[key].map(item => ({ ...item, department }));
      return item;
    })
    .sort((a, b) => b.length - a.length);

  // console.log(joinData);
  return joinData;
};
