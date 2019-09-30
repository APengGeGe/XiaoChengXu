// pages/components/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yin:false,
    cang:true,
    username:'',
    passwod:'',
  }, 
  onChange4(e){
    console.log(e.detail);
    this.setData({
      password: e.detail
    })
  },
  onChange3(e) {
    console.log(e.detail);
      this.setData({
      username: e.detail
    })
  },
  zhi(){
    this.setData({
      yin: true,
      cang: false
    })
  },
  zhu(){
    let name = this.data.username
    let word = this.data.password
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/reg.php',
      method: "GET",
      data: { username:name, password:word},
      success: function (data) {
        if (data.data.code ==1){
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          })
              _this.setData({
                yin:true,
                cang:false,
                username: '',
                passwod: '',
              })
          }
        console.log(data.data)
      }
    })
  },
  deng(){
    let name = this.data.username
    let word = this.data.password
    console.log(wx.getStorageSync('name'))
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/login.php',
      method: "GET",
      data: { username: name, password: word },
      success: function (data) {
        if (data.data.code == 1) {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          })
          _this.setData({
            username: '',
            passwod: '',
          })
          wx.setStorageSync("token",data.data.data.token)
          wx.setStorageSync("name", '阿鹏')
          wx.switchTab({
            url: '../../wode/wode'
          })
        }
        console.log(data.data)
      }
    })
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

  }
})