// pages/cart/cart.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    checkeds:false,
    money:0
  },
xiang(e){
    let id = e.target.dataset.id
    wx.navigateTo({
      url: '../about/about?id='+id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
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
      data: { id:25290},
      success: function (data) {
        let acc = data.data.data
        acc.map((item)=>{
          item.select=false
        })
        _this.setData({
          list: acc
        })
        console.log(_this.data.list)
      }
    })
  },
  
  onChange(e){
    console.log(e.detail)
    console.log(e.target.dataset.id)
      let id = e.target.dataset.id
      let num = e.detail
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
      method: "GET",
      data: {uid: 25290,pid:id,pnum:num },
      success: function (data) {
        console.log(data)
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 1000
        })
        // let acc = data.data.data
        // acc.map((item) => {
        //   item.select = false
        // })
        // _this.setData({
        //   list: acc
        // })
        // console.log(_this.data.list)
      }
    })

  },
  dingdan(){
    let arr = this.data.list;
    let acc = []
    arr.map((item) => {
      if (item.select == true) {
        acc.push(item)
      }
    })
    console.log(acc)
    wx.setStorageSync('list',acc)
  },
  zong(){ 
    let zong = 0;
    let att = this.data.list
    att.map((item)=>{
      if(item.select== true){
        zong += parseInt(item.pnum) * parseInt(item.pprice)
      }
     
    })
    this.setData({
      money:zong
    })

  },

  dan(e){
    let arr1 = this.data.list
    let index = e.target.dataset.id
    arr1[index].select = !arr1[index].select 
    let acc = arr1.filter(item=>item.select== true)
    if(acc.length == arr1.length){
      this.setData({
        list :arr1,
        checkeds:true
      })
    }else{
      this.setData({
        list: arr1,
        checkeds: false
      })
    }
    this.zong()
  },
  quan(){
      let quan = this.data.list
    this.data.checkeds = !this.data.checkeds
    if (this.data.checkeds==true){
        quan.map((item)=>{
          item.select = true
        })
      this.setData({
        list: quan,
        checkeds:true
      })
    }else{
      quan.map((item) => {
        item.select = false
      })
      this.setData({
        list: quan,
        checkeds:false
      })
    }
    
    this.zong()
  },
  dels(e){
    let id = e.target.dataset.id
    let index = e.target.dataset.index
    let arr1 = this.data.list
    let _this = this
    console.log(arr1)
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
      method: "GET",
      data: { uid: 19802,pid:id },
      success: function (data) {
        wx.showToast({
          title: '删除成功',
          icon: 'success',
          duration: 2000
        })
          arr1.splice(index,1)
          _this.setData({
            list:arr1
          })
        console.log(data)
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