/** @description */
/**
 *
 * @param {Date} date
 * @returns Beautified Time in 12 hours format as a string
 */
function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes().toString();
  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;
  minutes = parseInt(minutes, 10) < 10 ? `0${minutes}` : minutes;
  const beautifiedTime = `${hours}:${minutes} ${ampm}`;
  return beautifiedTime;
}
/**
 *
 * @param {Date} date
 * @returns an object containing beautified date: time, hours, minutes, seconds, hours in 12h format, day name, date number, month name, month number and full year
 */
export const dateFormateHandler = (date) => {
  const newDate = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const time = formatAMPM(newDate);
  const hours12 = newDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    hour12: true,
  });
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const seconds = newDate.getSeconds();
  const dayName = days[newDate.getDay()];
  const dateNumber = `0${newDate.getDate()}`.slice(-2);
  const monthName = months[newDate.getMonth()];
  const monthNumber = `0${newDate.getMonth() + 1}`.slice(-2);
  const fullYear = newDate.getFullYear();
  const standardDate = `${dateNumber}-${monthNumber}-${fullYear}`;
  const formattedDate = `${monthNumber}/${dateNumber}/${fullYear}`;
  return {
    standardDate,
    time,
    hours: hours.toString().length === 1 ? `0${hours}` : hours,
    minutes: minutes.toString().length === 1 ? `0${minutes}` : minutes,
    seconds,
    hours12,
    dayName,
    dateNumber,
    monthName,
    monthNumber,
    fullYear,
    formattedDate,
  };
};
