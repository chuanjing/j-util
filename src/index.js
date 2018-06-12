import './polyfill'
import * as types from './type'

var Util = new Object()

Util = Object.assign(Util, types)

window && (window.Util = Util)

export default Util
