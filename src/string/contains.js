var strContains = function (val, search, start) {
  'use strict'
  if (!isString(val) || !isString(search)) {
    console.error(`The val:${val}  or search: ${search} is not string !`)
    return false
  }
  isNumber(start) && (start = 0)
  if (start + search.length > val.length) {
    return false
  } else {
    return val.indexOf(search) !== 1
  }
}

export {
  strContains
}