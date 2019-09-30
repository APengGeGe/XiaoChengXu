// pages/wode/wode.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      wode:false,
      xiao:true, 
      name:''
  }, 
  zh(){
    wx.navigateTo({
      url:'../components/zhanghao/zhanghao',
    })
  },
  deng(){
    wx.navigateTo({
      url: '../components/login/login',
    })
  },
  dan(){
    wx.navigateTo({
      url: '../components/dan/dan?id='+0,
    })
  } ,
  dan1() {
    wx.navigateTo({
      url: '../components/dan/dan?id=' +1,
    })
  },
  dan2() {
    wx.navigateTo({
      url: '../components/dan/dan?id='+2,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的',  
    })

   
   this.setData({
     name: wx.getStorageSync('name')
   })
    
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
    if (wx.getStorageSync('token')) {
      this.setData({
        wode: true,
        xiao: false
      })
    } else {
      this.setData({
        wode: false,
        xiao: true
      })
    }
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