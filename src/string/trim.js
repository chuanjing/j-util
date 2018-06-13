import {
  isString,
  isNumber
} from '../type/index'
var validType = function (val) {
  if (isString(val)) {
    return true
  } else {
    console.error(`The value ${val} is not a String !`)
    return false
  }
}
var strTrim = function (val) {
  if (validType(val)) {
    return val.trim()
  } else {
    return val
  }
}

var strTrimStart = function (val) {
  if (validType(val)) {
    return val.trimStart()
  } else {
    return val
  }
}

var strTrimEnd = function (val) {
  if (validType(val)) {
    return val.trimEnd()
  } else {
    return val
  }
}

export {
  strTrim,
  strTrimStart,
  strTrimEnd
}