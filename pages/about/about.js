// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[], 
    val:1,
    num:'',
    show:true
  }, 
  guan(){
      this.setData({
        show: false
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '详情'
    })
    var _this = this
    let id = options.id
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/detail.php',
      method: "GET",
      data: { id:id },
      success: function (data) {
       
        _this.setData({
          arr: data.data.data
        })
         console.log(_this.data.arr)
      }
    })
  },
  onChange(e){
    this.setData({
      val: e.detail
    })
  },
adds(e){
  this.setData({
    show:true
  })
  console.log(e.target.dataset.id)
  console.log(this.data.val)
  let id = e.target.dataset.id
  let vals = this.data.val
   wx.request({
     url: 'http://jx.xuzhixiang.top/ap/api/add-product.php',
     method: "GET",
     data: {uid:25290,pid:id,pnum:vals},
    success: function (data) {
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })

     console.log(data)
     }
   })
},
  onClickIcon(){
    wx.switchTab({
      url: '../cart/cart'
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
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/cart-list.php',
      method: "GET",
      data: {id:25290},
      success: function (data) {

        let arr = data.data.data
        let pnum = 0
        arr.map((item)=>{
            pnum+=Number(item.pnum)
        })
        _this.setData({
          num:pnum
        })
        console.log(pnum)
        console.log(arr)
      }
    })
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