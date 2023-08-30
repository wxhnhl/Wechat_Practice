var arrayincp = []
var arraycp = []
var array
var array1
Page({
  data: {
    array: arrayincp,
    array1: arraycp,
    condition1: true,
    condition2: false,
    input: false,
    nav1: "nav1",
    nav2: "nav2"
  },
  

  onLoad: function (options) {

    wx.getStorage({
      key: 'array',
      success: function (res) {
        var arraystore = res.data
        arrayincp = arraystore[0]
        arraycp = []
      }
    })
  },
 
  click1: function (e) {

    this.setData({
      condition1: true,
      condition2: false,
      nav1: "nav1",
      nav2: "nav2",
      input: false
    })
  },

  
  click2: function (e) {

    this.setData({
      condition1: false,
      condition2: true,
      nav1: "nav2",
      nav2: "nav1",
      input: false
    })
  },

  
  short: function (e) {
    var id = e.target.id
    var newitem = arrayincp[id]
    arrayincp.splice(id, 1)
    arraycp.push(newitem)
    this.setData({
      array: arrayincp,
      array1: arraycp,
    })
  },
 
  click: function (e) {
    this.setData({
      input: true,
      condition1: false,
      condition2: false,
      nav1: "nav2",
      nav2: "nav2",
    })

  },
  
  confirm: function (e) {
    arrayincp.push(e.detail.value)
    this.setData({
      array: arrayincp,
      input: false,
      condition1: true,
      condition2: false,
      nav1: "nav1",
      nav2: "nav2",
    })
  },

  
  onUnload: function () {
    var arraystore = [arrayincp, arraycp]
    wx.setStorage({
      key: "array",
      data: arraystore
    })
  },
})