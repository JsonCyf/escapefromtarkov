// pages/taskdetails/askdetails.js
var localData = require("../../data/task.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jsonData:"",
    index:"0",
    itemindex:"1",
    taskUrl:"",
    taskName:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options.index:"+options.index+"   options.itemindex:"+options.itemindex);
        this.setData({
          jsonData:localData.jsonData,
          index:options.index,
          itemindex:options.itemindex, 
        });
        // jsonData[0].id,
        // console.log("jsonData:"+this.data.jsonData[0].npcName);
        // console.log("jsonData:"+JSON.stringify(this.data.jsonData));
        var taskClss;
        switch(this.data.index){
          case "0":
          taskClss=this.data.jsonData[0].taskList[parseInt(this.data.itemindex)];
          //  taskClss.taskNme;
          //  taskClss.videoUrl;
          //  console.log("taskClss.taskNme:"+taskClss.taskNme+"   taskClss.videoUrl:"+taskClss.videoUrl);
          break;
          case "1":
            taskClss=this.data.jsonData[1].taskList[parseInt(this.data.itemindex)];
          break;
          case "2":
            taskClss=this.data.jsonData[2].taskList[parseInt(this.data.itemindex)];
          break;
          case "3":
            taskClss=this.data.jsonData[3].taskList[parseInt(this.data.itemindex)];
          break;
          case "4":
            taskClss=this.data.jsonData[4].taskList[parseInt(this.data.itemindex)];
          break;
          case "5":
            taskClss=this.data.jsonData[5].taskList[parseInt(this.data.itemindex)];
          break;
          case "6":
            taskClss=this.data.jsonData[6].taskList[parseInt(this.data.itemindex)];
          break;
          case "7":
            taskClss=this.data.jsonData[7].taskList[parseInt(this.data.itemindex)];
          break;
        }
        this.setData({
          taskName:taskClss.taskNme,
          taskUrl:taskClss.videoUrl,
        });
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