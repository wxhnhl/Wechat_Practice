var indexData = require('../../data/index-data.js')
var indexlist = indexData.indexList
Page({
  //初始赋值
  data: {
    dianputupian: indexlist[0].dianputupian,
    imgSrc:indexlist[0].imgSrc,
    jiage: indexlist[0].price,
    dpname: indexlist[0].dpname,
    mingcheng: indexlist[0].mingcheng,
    // src: '../images/hk/c.png',
    btnc: 'active',
    btnd: 'inactive',
    btne: 'inactive',
    btnf: 'inactive',
    btng: 'inactive',
    btna: 'inactive',
    btnb: 'inactive'

  },
  //点击按钮C触发事件
  c: function () {
    this.setData({
      dianputupian: indexlist[1].dianputupian,
      imgSrc: indexlist[1].imgSrc,
      jiage: indexlist[1].price,
      dpname: indexlist[1].dpname,
      mingcheng: indexlist[1].mingcheng,
      // src: '../images/hk/c.png',
      btnc: 'active',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive',
      btna: 'inactive',
      btnb: 'inactive'
    })
  },

  d: function () {
    this.setData({
      dianputupian: indexlist[2].dianputupian,
      imgSrc: indexlist[2].imgSrc,
      jiage: indexlist[2].price,
      dpname: indexlist[2].dpname,
      mingcheng: indexlist[2].mingcheng,
      btnc: 'inactive',
      btnd: 'active',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive',
      btna: 'inactive',
      btnb: 'inactive'
    })
  },

  e: function () {
    this.setData({
      dianputupian: indexlist[0].dianputupian,
      imgSrc: indexlist[0].imgSrc,
      jiage: indexlist[0].price,
      dpname: indexlist[0].dpname,
      mingcheng: indexlist[0].mingcheng,
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'active',
      btnf: 'inactive',
      btng: 'inactive',
      btna: 'inactive',
      btnb: 'inactive'
    })
  },

  f: function () {
    this.setData({
      dianputupian: indexlist[3].dianputupian,
      imgSrc: indexlist[3].imgSrc,
      jiage: indexlist[3].price,
      dpname: indexlist[3].dpname,
      mingcheng: indexlist[3].mingcheng,
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'active',
      btng: 'inactive',
      btna: 'inactive',
      btnb: 'inactive'
    })
  },

  g: function () {
    this.setData({
      dianputupian: indexlist[4].dianputupian,
      imgSrc: indexlist[4].imgSrc,
      jiage: indexlist[4].price,
      dpname: indexlist[4].dpname,
      mingcheng: indexlist[4].mingcheng,
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'active',
      btna: 'inactive',
      btnb: 'inactive'
    })
  },


  a: function () {
    this.setData({
      dianputupian: indexlist[5].dianputupian,
      imgSrc: indexlist[5].imgSrc,
      jiage: indexlist[5].price,
      dpname: indexlist[5].dpname,
      mingcheng: indexlist[5].mingcheng,
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive',
      btna: 'active',
      btnb: 'inactive'
    })
  },


  b: function () {
    this.setData({
      dianputupian: indexlist[6].dianputupian,
      imgSrc: indexlist[6].imgSrc,
      jiage: indexlist[6].price,
      dpname: indexlist[6].dpname,
      mingcheng: indexlist[6].mingcheng,
      btnc: 'inactive',
      btnd: 'inactive',
      btne: 'inactive',
      btnf: 'inactive',
      btng: 'inactive',
      btna: 'inactive',
      btnb: 'active'
    })
  },
  addCart:function(){
    wx.navigateTo({
      url: '../cart/cart',
    })
  }
})

