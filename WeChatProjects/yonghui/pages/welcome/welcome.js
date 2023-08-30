const ctx = wx.createCanvasContext('myCanvas')

Page({
  data:{
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onShow: function (e) {
    setInterval(show, 1000);//每秒执行1次
    function show() {
      secshow()
      minshow()
      houshow()
      backshow()
      numbershow()
      ctx.draw()
    }
  },
  onTab: function (event) {
    wx.switchTab({
      url: "../shouye/shouye"
    })
},
  onLoad:function(options){
    var that = this
    wx.login({
      success: function (res) {
        wx.getUserInfo({
          success: function (res) {
            
            that.setData({
              userName:res.userInfo.nickName,
              imagesrc:res.userInfo.avatarUrl,
              
            })
          }
        })
      }
    })  
  }
})
//秒针
function secshow() {
  var now = new Date()
  var sec = now.getSeconds()
  //角度弧度
  var angle = sec * Math.PI / 30
  var x = 100 * Math.sin(angle) + 150
  var y = 150 - 100 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(1)
  ctx.setStrokeStyle('red')
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()


}
//分针
function minshow() {
  var now = new Date()
  var min = now.getMinutes()
  var sec = now.getSeconds()
  var angle = (min + sec / 60) * Math.PI / 30
  var x = 80 * Math.sin(angle) + 150
  var y = 150 - 80 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(5)
  ctx.setStrokeStyle('black')
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()

}
//时针
function houshow() {
  var now = new Date()
  var hou = now.getHours()
  hou = hou % 12 //24小时制，取余数
  var min = now.getMinutes()
  var sec = now.getSeconds()
  var angle = (hou + min / 60 + sec / 3600) * Math.PI / 6
  var x = 50 * Math.sin(angle) + 150
  var y = 150 - 50 * Math.cos(angle)
  ctx.beginPath()
  ctx.setLineWidth(8)
  ctx.moveTo(150, 150)
  ctx.lineTo(x, y)
  ctx.closePath()
  ctx.stroke()

}
//表盘
function backshow() {
  ctx.beginPath()
  ctx.setLineWidth(3)
  ctx.arc(150, 150, 110, 0, 2 * Math.PI)
  ctx.closePath()
  ctx.stroke()

}
//数字
function numbershow() {
  ctx.beginPath()
  ctx.setFontSize(20)
  for (var i = 1; i < 13; i++) {
    var angle = i * Math.PI / 6
    var x = 100 * Math.sin(angle) + 145//微调
    var y = 155 - 100 * Math.cos(angle)
    ctx.fillText(i, x, y)
  }
  ctx.closePath()
  ctx.stroke()
}

