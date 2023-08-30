
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {


    require('sdk-v1.1.1.js')
    let clientID = 'wx71149189acd922d5'
    wx.BaaS.init(clientID)
    wx.BaaS.login()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  wxpay: function (e) {
    let params = {}
    params.totalCost = 0.01
    params.merchandiseDescription = '测试'

    wx.BaaS.pay(params).then((res) => {
     
      
      console.log(res)
    }, (err) => {
      // 未完成用户授权或发生网络异常等
      console.log(err)
    });


wx.navigateTo({
  url: '../order/order',
})
  },
  zgyhpay:function(e){
    var that = this
    wx.request({
      url: 'http://localhost:8080/yonghui/PayServlet',
      data: {
        name: "w",
        totalCost:20.00,
        orderid:123
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          resultInfo:res.data
        })
      }
    })

  },
  addCardPay:function(e){
    var that = this
    wx.request({
      url: 'http://localhost:8080/yonghui/AddcardServlet',
      data: {
        cardname:'中国农业银行',
        cardid: 622848,
        username: 'w'},
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
         bindInfo:res.data
        }),
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
      }
    })
    
  }


})
