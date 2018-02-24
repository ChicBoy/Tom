// pages/welcome/welcome.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animation:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.animation = wx.createAnimation({
      //动画持续时间
      duration:2000,
      //动画的效果
      timingFunction:"linear",
      //动画延迟时间
      delay:100
    });
    //创建一个放大的动画 
    this.animation.scale(2).step()
    this.setData({animation: this.animation.export()})
    var that = this
    setTimeout(function(){
      that.animation.scale(1).step()
      that.setData({ animation: that.animation.export()})
    },500);
    setTimeout(function(){
      wx.navigateTo({
        url: '../index/index',
      })
    },3000)
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