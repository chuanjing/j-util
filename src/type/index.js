var isString = function (val) {
  return Object.prototype.toString.call(val) === '[object String]'
}
var isDate = function (val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}
var isNumber = function (val) {
  return Object.prototype.toString.call(val) === '[object Number]'
}
var isArray = function (val) {
  return Object.prototype.toString.call(val) === '[object Array]'
}
var isObject = function (val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}
var isUndefined = function (val) {
  return Object.prototype.toString.call(val) === '[object Undefined]'
}
var isNull = function (val) {
  return Object.prototype.toString.call(val) === '[object Null]'
}
var isEmpty = function (val) {
  return isNull(val) || isUndefined(val) || (isString(val) && val === '')  || (isArray(val) && val.length === 0) || (isObject && val === {})
}

export {
  isString,
  isDate,
  isNumber,
  isArray,
  isObject,
  isUndefined,
  isEmpty
}