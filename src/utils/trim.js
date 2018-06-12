import {
  isString
} from '../type/index'
var validType = function (val) {
  if (isString(val)) {
    return true
  } else {
    console.error(`The value ${val} is not a String !`)
    return false
  }
}
var trim = function (val) {
  if (validType(val)) {
    return val.trim()
  } else {
    return val
  }
}

var trimStart = function (val) {
  if (validType(val)) {
    return val.trimStart()
  } else {
    return val
  }
}

var trimEnd = function (val) {
  if (validType(val)) {
    return val.trimEnd()
  } else {
    return val
  }
}

var replace = function (val) {
  
}

export {
  trim,
  trimStart,
  trimEnd
}