var newnote = "";
var nickName = "w";
var imageurl = "x";
var indexData = require('../../../data/index-data.js');
var indexlist = indexData.indexList;
var tempFilePath
Page({
  data: {
    dianputupian: indexlist[0].dianputupian,
    imgSrc: indexlist[0].imgSrc,
    jiage: indexlist[0].price,
    dpname: indexlist[0].dpname,
    mingcheng: indexlist[0].mingcheng
  },
  // 输入完成
  confirm: function (e) {
    newnote = e.detail.value
  },
  //留言
  click: function (e) {
    var that = this
    wx.request({
      url: 'http://localhost:8080/yonghui/LoginServlet', //服务器留言地址
      data: {
        name: nickName,
        content: newnote,
        imageurl: imageurl
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        that.setData({
          name: res.data.name,
          image: res.data.image,
          content: res.data.content
        })
      }
    })

  },
  addCart: function () {
    wx.navigateTo({
      url: '../../cart/cart',
    })
  },
  //上传
  upload: function (e) {
    wx.uploadFile({
      url: 'http://localhost:8080/yonghui/ReceiveFileServlet',
      filePath: tempFilePath,
      name: 'file',
    }),
      wx.showModal({
        title: '提示',
        content: '是否继续上传'
      })
  }
})
