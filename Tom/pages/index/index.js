Page({

  /**
   * 页面的初始数据
   */
  data: {
  //汤姆猫的图片
    tomUrl:"../PublicTreasury/Animations/Angry/angry_0.jpg",
//汤姆猫的声音
    TomaudioUrl:'',
    action:{
      method:''
    },
    disabled:false
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

  },cymbal:function(){
    encapsulationTom(this,"cymbal",500,"Cymbal/cymbal_",12)
    console.log("====cymbal======")
  },drink: function (e) {
    //喝牛奶
    var that = this;
    that.setData({ TomaudioUrl:"../PublicTreasury/audio/pour_milk.wav"})
    setTimeout(function(){
      audioPlay(that)
      that.setData({ TomaudioUrl: "../PublicTreasury/audio/p_drink_milk.wav" })
    },1800);
    setTimeout(function(){
      audioPlay(that)
    },4000)
//图片播放
    ImgPlay(that,'Drink/drink_',80)
    console.log("====drink======")
  },eat: function (e) {
    encapsulationTom(this, "p_eat", 2000, "Eat/eat_", 39)
    //小鸟的点击事件
    console.log("====eat======")
  },fart: function (e) {
    //放屁的点击事件
    encapsulationTom(this, "fart001_11025", 500, "Fart/fart_", 27)
    console.log("====fart======")
  },pie: function (e) {
    //往窗户上仍烧饼的点击事件
    encapsulationTom(this, "slap6", 1500, "Pie/pie_", 23)
    console.log("====pie======")
  },scratch: function (e) {
    //爪子挠屏幕的点击事件
    encapsulationTom(this, "scratch_kratzen", 2200, "Scratch/scratch_", 55)
    console.log("====scratch======")
  },knockout: function (e) {
    //打脸的点击事件
    var that = this
    that.setData({TomaudioUrl:"../PublicTreasury/audio/slap1.wav"});
    setTimeout(function(){
      audioPlay(that)
      setTimeout(function(){
        encapsulationTom(that, "p_stars2s", 2000, "Knockout/knockout_",80)
      },200)
    }, 50)
    console.log("====knockout======")
  },stomach: function (e) {
    //摸肚子的点击事件
    encapsulationTom(this, "p_belly1", 200, "Stomach/stomach_", 33)
    console.log("====stomach======")
  }, footLeft: function (e) {
    //左脚的点击事件
    encapsulationTom(this, "p_foot3", 200, "FootLeft/footLeft_", 29)
    console.log("====footLeft======")
  }, footRight: function (e) {
    //右脚的点击事件
    encapsulationTom(this, "p_foot4", 200, "FootRight/footRight_", 29)
    console.log("====footRight======")
  },angry: function (e) {
    //尾巴的点击事件
    encapsulationTom(this, "p_noo", 1100, "Angry/angry_", 25)
    console.log("====angry======")
  }

});
function encapsulationTom(that, audio, audiotime, path, imgsize){
  //打锣的点击事件
  that.setData({
    TomaudioUrl: "../PublicTreasury/audio/"+audio+".wav"
  });
  setTimeout(function () {
    audioPlay(that)
  },audiotime)
  //遍历循环图片
  ImgPlay(that, path, imgsize)
}

//音乐播放
function audioPlay(that){
  that.setData({
    action: {
      method: "play"
    }
  })
}
//图片播放
function ImgPlay(that, path,imgsize){
  var i = 0;
  var Tomtime = setInterval(function () {
    that.setData({ tomUrl: "../PublicTreasury/Animations/" + path + i + ".jpg" });
    i++;
    if (i <= imgsize) {
      that.setData({ disabled: true })
    } else if (i > imgsize) {
      //清除定时器
      clearInterval(Tomtime)
      //是否可以点击
      that.setData({ disabled: false })
    }
  }, 100)
}