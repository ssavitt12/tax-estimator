/**
 * 
 * @param {object} obj Object
 * @param {string[]} per Array
 * @returns {object} final 
 */
 export default function permissions(obj, per) {
  let final = {}
  for (const property of per) {
      final[property] = obj[property]
  }
  return final
}