Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var array = this.initData();
      this.setData({array:array});
    
  },
  onLoad: function (options) {
    var array = this.initData();
    this.setData({ array: array });
  },
  initData: function () {
    var array = [];
    var object1 = new Object();
    object1.img = "../images/list4.png";
    object1.title = "东北大学秦皇岛分校";
    object1.type = "教改项目";
    object1.liulan = "1234浏览";
    object1.pinglun = "4评论";
    array[0] = object1;

    var object2 = new Object();
    object2.img = "../images/list5.png";
    object2.title = "东北大学秦皇岛分校";
    object2.type = "今日校园";
    object2.liulan = "1234浏览";
    object2.pinglun = "4评论";
    array[1] = object2;

    var object3 = new Object();
    object3.img = "../images/list6.png";
    object3.title = "东北大学秦皇岛分校";
    object3.type = "实验项目";
    object3.liulan = "1234浏览";
    object3.pinglun = "4评论";
    array[2] = object3;

    return array;
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})