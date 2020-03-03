export default data => {
  const getdata = data.filter(item => item.iso_3166_1 === 'US');
  if (getdata.length === 0) return 'N/A';

  const getdatace = getdata[0].release_dates.filter(
    ({ certification }) => certification !== ''
  );

  if (getdatace.length === 0) return 'N/A';

  return getdatace[0].certification;
};
