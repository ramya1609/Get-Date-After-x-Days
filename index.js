const addDays = require("date-fns/addDays");

function extraDays(days) {
  const newFormat = addDays(new Date(2020, 7, 22), days);
  return `${newFormat.getDate()}-${
    newFormat.getMonth() + 1
  }-${newFormat.getFullYear()}`;
}

module.exports = extraDays;
