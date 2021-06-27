/**
 *
 * @param {String} key - Referencia del objeto buscado en local storage
 * @returns {Object, null} data del objeto o null
 */

export const getLSItemData = (key) => JSON.parse(localStorage.getItem(key));
export const saveLSItemData = (key, data) =>
  
  JSON.stringify(localStorage.setItem(key, data));
