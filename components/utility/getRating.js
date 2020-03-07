export default data => {
  if (data.length === 0) return 'N/A';

  const getdata = data.filter(item => item.iso_3166_1 === 'US');
  if (getdata.length === 0) return data[0].rating || data[0].certification;

  if (Object.keys(getdata[0])[1] === 'rating') {
    return getdata[0].rating;
  } else {
    const getdatace = getdata[0].release_dates.filter(
      ({ certification }) => certification !== ''
    );

    if (getdatace.length === 0) return 'N/A';

    return getdatace[0].certification;
  }
};
