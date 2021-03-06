export default (count, total) => {
  const percentage = count / total * 100;

  if (percentage) {
    if (percentage % 1 !== 0) return percentage.toFixed(2);

    return percentage;
  }

  return 0;
};
