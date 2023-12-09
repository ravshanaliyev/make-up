const truncate = (str, wordcount) => {
  return str?.length > wordcount ? str.substr(0, wordcount) + "..." : str;
};

const formatmoney = (number) => {
  return Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const formatdate = (date) => {
  const dates = new Date(date).toLocaleDateString("uz-UZ").split("-");
  return `${dates[0]}-${dates[1]?.padStart(2, "0")}-${dates[2]?.padStart(
    2,
    "0"
  )}`;
};

export { truncate, formatmoney, formatdate };
