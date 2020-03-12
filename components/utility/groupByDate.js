export default (arr, sortBy) => {
  return arr
    .map(i => {
      const date = i[sortBy];
      return {
        ...i,
        [sortBy]: date === undefined || date === null ? '' : date.slice(0, 4),
        date: date === undefined || date === null ? '' : date.slice(0, 4)
      };
    })
    .reduce((acc, obj) => {
      let key = obj[sortBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, []);
};
