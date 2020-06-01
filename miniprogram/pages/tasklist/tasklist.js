// pages/tasklist/tasklist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemindex: -1,
    taskList: [],
    praporList: ["首秀", "考验", "硝烟野餐", "往事速递", "罪证", "冰淇淋蛋筒", "邮递特派员 Part.1",
      "探囊取物", "石油存储", "惩罚者 Part.1", "惩罚者 Part.2", "惩罚者 Part.3",
      "惩罚者 Part.4", "惩罚者 Part.5", "惩罚者 Part.6","Polikhim流浪汉","大客户","无意冒犯","掷弹兵",
      "左右逢源","彻夜难眠", "试驾 Part.1","材料控制"],
    theraistList: [ "短缺", "卫生标准 Part.1", "卫生标准 Part.2", "水瓶座行动 Part.1", "卫生标准 Part.2",
      "止痛药", "药剂师", "供给计划", "一般储备", "汽车修理","医疗隐私 Part.1", "医疗隐私 Part.2",
      "医疗隐私 Part.3", "医疗隐私 Part.4", "医疗隐私 Part.5","邮递特派员 Part.2","出于好奇", "重获信任", 
      "私人诊所", "运动员", "灭虫服务", "一天一个苹果-医生远离我"],
    fenceList: ["收藏家"],
    skierList: ["供应商", "敲诈者", "风波", "U盘里有什么", "金色失物", "化学品 Part.1", "化学品 Part.2", "化学品 Part.3",
      "化学品 Part.4", "西方来客 Part.1", "西方来客 Part.2", "维他命 Part.1", "维他命 Part.2","租借法案", "情报就是力量", 
      "愿者上钩", "暗中破坏","大音希声","坚如燧石","一派胡言","借刀杀人"],
    peacekeeperList: ["渔具", "猎虎行动", "破铜烂铁", "鹰眼", "人道主义援助","邪教 Part.1","邪教 Part.2",
    "海边假期 Part.1", "海边假期 Part.2", "海边假期 Part.3","海边假期 Part.4", "海边假期 Part.5", "海边假期 Part.6",
    "海边假期 Part.7","神秘货物 Part.1","神秘货物 Part.2", "神秘货物 Part.3", "神秘货物 Part.4", "湿活 Part.1", "湿活 Part.2", "湿活 Part.3", "湿活 Part.4", "湿活 Part.5",
      "湿活 Part.6", "租借法案 Part.2","向导","维和任务", "导师"],
    mechanicList: ["介绍", "挖矿 Part.1", "挖矿 Part.2", "挖矿 Part.3", "挖矿 Part.4", "信号 Part.1", "信号 Part.2", "信号 Part.3",
      "信号 Part.4", "不良嗜好", "侦查", "圈内人", "天才射手", "狙击疯魔", "肥料", "进口", "枪匠 Part.1", "枪匠 Part.2", "枪匠 Part.3", "枪匠 Part.4", "枪匠 Part.5",
      "枪匠 Part.6", "枪匠 Part.7", "枪匠 Part.8", "枪匠 Part.9", "枪匠 Part.10", "枪匠 Part.11", "枪匠 Part.12", "枪匠 Part.13",
      "枪匠 Part.14", "枪匠 Part.15", "枪匠 Part.16",],
    ragmanList: ["生意至上", "Make ULTRA Great Again", "大甩卖", "战争之血", "盛装杀戮", "数据库 Part.1", "数据库 Part.2", "临行密密缝 Part.1",
      "临行密密缝 Part.2", "临行密密缝 Part.3", "临行密密缝 Part.4", "成功的关键", "风流倜傥", "暗度陈仓", "感恩的心", "大放送之夜", "财务总监",
      "战争之血 Part.2", "战争之血 Part.3", "奢侈无罪", "奢侈无罪 Part.2", "火线速递", "微型客车", "垃圾佬", "那个时髦的人", "纺织业 Part.1", "纺织业 Part.2"],
    jaegerList: ["熟人", "塔科夫神射手 Part.1", "塔科夫神射手 Part.2", "塔科夫神射手 Part.3", "塔科夫神射手 Part.4", "塔科夫神射手 Part.5", "塔科夫神射手 Part.6",
      "塔科夫神射手 Part.7", "塔科夫神射手 Part.7", "生存之路-危险零距离", "生存之路-省吃俭用", "生存之路-Zhivchik", "生存之路-受伤的野兽", "生存之路-硬汉",
      "生存之路-冷血", "生存之路-座头市", "生存之路-雕鸮", "生存之路-战地军医", "猎人之路-周边安全", "猎人之路-战利品", "猎人之路-杀戮深林", "猎人之路-控制者",
      "猎人之路-脱销", "猎人之路-森林管理员", "猎人之路-正义", "猎人之路-邪恶守望者", "猎人之路-蒸发密令", "救护车", "礼节性拜访", "卑鄙的交易", "怀旧之情", "鱼塘", "狩猎之旅",
      "保留",],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      itemindex: options.index,
    });
    switch (this.data.itemindex) {
      case "0":
        this.setData({
          taskList: this.data.praporList
        });
        console.log("case  0");
        break;
      case "1":
        this.setData({
          taskList: this.data.theraistList
        });
        break;
      case "2":
        this.setData({
          taskList: this.data.fenceList
        });
        break;
      case "3":
        this.setData({
          taskList: this.data.skierList
        });
        break;
      case "4":
        this.setData({
          taskList: this.data.peacekeeperList
        });
        break;
      case "5":
        this.setData({
          taskList: this.data.mechanicList
        });
        break;
      case "6":
        this.setData({
          taskList: this.data.ragmanList
        });
        break;
      case "7":
        this.setData({
          taskList: this.data.jaegerList
        });
        break;
      default:
        console.log("end=" + this.data.index);
        break;
    };
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