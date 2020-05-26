// pages/npcitem/npcitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      itemList:[{title:'PraPor',imgSrc:'../../images/PraPor.jpg'},
      {title:'Therapist',imgSrc:'../../images/Therapist.jpg'},
      {title:'Fence',imgSrc:'../../images/Fence.png'},
      {title:'Skier',imgSrc:'../../images/Skier.jpg'},
      {title:'Peacekeeper',imgSrc:'../../images/Peacekeeper.jpg'},
      {title:'Mechanic',imgSrc:'../../images/Mechanic.jpg'},
      {title:'Ragman',imgSrc:'../../images/Ragman.jpg'},
      {title:'Jaeger',imgSrc:'../../images/Jaeger.jpg'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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