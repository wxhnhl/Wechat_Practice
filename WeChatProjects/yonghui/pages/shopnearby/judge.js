//顺时针还是逆时针
function judgeturn(x1, y1, x3, y3) {
  var x2 = 150
  var y2 = 150
  if ((x2 - x1) * (y3 - y2) - (y2 - y1) * (x3 - x2) > 0)
    return false
  else return true
}
module.exports = {
  judgeturn: judgeturn
}