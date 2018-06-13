import './polyfill'
import * as types from './type'
import * as strings from './string'

var Util = new Object()

Util = Object.assign(Util, types, strings)

console.log(Util)

window && (window.Util = Util)

export default Util
