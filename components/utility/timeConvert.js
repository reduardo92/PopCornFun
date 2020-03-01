export default time => {
  const hours = time / 60;
  const rhours = Math.floor(hours);
  const minutes = Math.round((hours - rhours) * 60);

  return `${rhours}h ${minutes}m`;
};
