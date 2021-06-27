import moment from "moment";
//moment lang config
/* import "moment/locale/es";
moment.locale("es"); */

/**
 * Date formater
 * @param {Number} date date in miliseconds
 * @returns {String} string date in the next format: dddd-DD-MMMM
 */

export const formatedTime = (date) => moment.unix(date).format("DD-MM-YYYY");
export const formatTime = (date) => moment(date).format("DD-MM-YYYY");

/**
 * Current date formater
 * @returns {String} current date in the next format: dddd-DD-MMMM
 */
export const getCurrentTimeFormated = () => moment().format("DD-MM-YYYY");
