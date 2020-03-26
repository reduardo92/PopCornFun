export default startYear => {
  const currentYear = new Date().getFullYear();
  const years = [];
  startYear = startYear || 1900;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};
