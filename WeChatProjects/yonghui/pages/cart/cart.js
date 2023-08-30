//index.js
//全局的 getApp() 函数,获取到小程序实例
var app = getApp()
Page({
  //初始化赋值
  data: {
    fei: '',
    fei2: '',
    userInfo: null
  },
  //计算处理函数

  formSubmit: function (e) {
    wx.redirectTo({
      url: '../pay/pay',
    })
  },
  //重置功能
  formReset: function () {
   wx.redirectTo({
     url: '../shouye/detail/detail',
   })
  },
  onLoad: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      fei: '￥666',
      fei2: '￥388'
    })
  },
  //表单提交
  formSubmit1: function (e) {
    var that = this
    var orderno = e.detail.value.orderno
    var orderdate = e.detail.value.orderdate
    var ordername = e.detail.value.ordername
    var ordertel = e.detail.value.ordertel
    var formid = e.detail.formId
    //校验输入
    if (orderno == "" || orderdate == "" || ordername == "" || ordertel == "") {
      wx.showModal({
        title: '提示',
        content: '不能为空！'
      })
    }
    else {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      }),
        wx.request({
          url: 'http://localhost:8080/Payservlet', //服务器信息
          data: {
            code: app.globalData.code,
            FORMID: formid,
            date: orderdate,
            no: orderno,
            name: ordername,
            tel: ordertel
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            console.log(res.data)
          }
        })
    };
    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 2000
    })

  },
  //表单重置
  formReset1: function () {
    this.setData({
      date: ''
    })
  },
})
