// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    list:[],
    biao:[], 
    val:1,
    weizhi:'郑州',
    movies: [

      { url: '../../img/1.jpg' },

      { url: '../../img/2.jpg' },

      { url: '../../img/3.jpg' },
    ],
    circular:true
  },
  bei(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(res)
        wx.openLocation({
          latitude,
          longitude,
          scale:15,
          
        })
      }
    })

  },
  onSearch(){
    wx.navigateTo({
      url:'../components/sou/sou'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我买网'
    })
    var _this = this
    wx.request({
      url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
      method:"GET",
      data:{uid:25290,pagesize:10},
      success:function(data){
  
        let arr = data.data.data
        _this.setData({
          list:arr,
          biao:arr
        })
        console.log(arr)
      }
    })
  },
  tiao(e) {
    let id = e.target.dataset.id
    console.log(id)
    wx.navigateTo({
      url: "../about/about?id="+id
    })
  },
  jian(e){
    let id = e.target.dataset.id
    console.log(id)
    wx.navigateTo({
      url: "../about/about?id=" + id
    })
  },
  onChange(e){
    this.setData({
      val:e.detail
    })

  },
  gou(e){
      let num = this.data.val
      let id = e.target.dataset.id
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/add-product.php',
      method: "GET",
      data: { uid: 25290,pid:id,pnum:num},
      success: function (data) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
        console.log(data)
      }
    })
    console.log(e.target.dataset.id)
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