var defaultcity, getweather, gettemp, getwind, getpic, city, weather, temp, wind
var indexData = require('../../data/index-data.js')
var animation
var angle = 0
var x1, y1, x3, y3
//引入js
var util = require('judge.js')
 
Page
  ({
    data:
    {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    //创建动画
    onShow: function () {
      animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
    },

    //滑动开始
    start: function (e) {
      x1 = e.touches[0].clientX
      y1 = e.touches[0].clientY
    },
    //滑动结束
    end: function (e) {
      var that = this
      x3 = e.changedTouches[0].clientX
      y3 = e.changedTouches[0].clientY
      if (util.judgeturn(x1, y1, x3, y3)) {
        angle = angle + 35
        animation.rotate(angle).step()
        that.setData({
          anim: animation.export()
        })
      }
      else {
        angle = angle - 35
        animation.rotate(angle).step()
        that.setData({
          anim: animation.export()
        })
      }
    },
    //默认载入
  cityInfo:function(){
      var that = this
      var defaultcity1='朔州';
      wx.login({
        success: function (res) {
          wx.getUserInfo({
            success: function (res) {
                defaultcity1:res.userInfo.city 
            }
          })
        }
      })  
return defaultcity1;
    },
    onLoad: function (e) {
      this.setData({ indexList: indexData.indexList })
      defaultcity =this.cityInfo()
      var that = this
      var now = new Date()
      var date = now.getDate()
      console.log(date)
      that.setData({
        todaymonth:now.getMonth()+1,
        todaydate: date
      }), 
      wx.request
        ({
          url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=1a3cde429f38434f1811a75e1a90310c&location=' + defaultcity,
          success: function (res) {
            getweather = res.data.results[0].weather_data[0].weather
            gettemp = res.data.results[0].weather_data[0].temperature
            getwind = res.data.results[0].weather_data[0].wind
            getpic = res.data.results[0].weather_data[0].dayPictureUrl
            that.setData
              ({
                city: defaultcity,
                weather: getweather,
                temp: gettemp,
                wind: getwind,
                pic: getpic
              })
          }
        })
    },

    //获取输入
    bindKeyInput: function (e) {
      defaultcity = e.detail.value
    },

    //搜索城市
    search: function (e) {
      var that = this
      wx.request
        ({
          url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=1a3cde429f38434f1811a75e1a90310c&location=' + defaultcity,

          success: function (res) {
            getweather = res.data.results[0].weather_data[0].weather
            gettemp = res.data.results[0].weather_data[0].temperature
            getwind = res.data.results[0].weather_data[0].wind
            getpic = res.data.results[0].weather_data[0].dayPictureUrl
            that.setData
              ({
                city: defaultcity,
                weather: getweather,
                temp: gettemp,
                wind: getwind,
                pic: getpic
              })
          }
        })
    },
    enterStore: function (event) {
      wx.navigateTo({
        url: '../shouye/detail/detail'
      })
    },
    dateShow:function(e){
      var that = this
      
    }
  })