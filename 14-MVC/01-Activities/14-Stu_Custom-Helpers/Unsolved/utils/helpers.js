module.exports = {
  format_date: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    return date.setFullYear(date.getFullYear() + 5);
  },
};
