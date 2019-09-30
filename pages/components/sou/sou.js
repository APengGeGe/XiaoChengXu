// pages/components/sou/sou.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    sou:true,
    lie:false,
    list1:[],
    lishi:'',
    jilu:[],
    arr:[],
    value:''
  },
  liebiao(e){
    let id = e.target.dataset.id
    // console.log(id)
    wx.navigateTo({
      url: "../../about/about?id="+ id
    })
  },
  onSearch(){
    let arr = this.data.arr
    arr.push(this.data.lishi)
    this.setData({
      jilu:arr,
      value: ''
    })
    console.log(arr)
  },
  dian(){

  },
  shan(){
    this.setData({
      jilu:[]
    })
  },
  change(e){
    if(e.detail==''){
      this.setData({
        sou:true,
        lie:false
      })
    }else{
      this.setData({
        sou:false,
        lie:true
      })
    }
    this.setData({
      lishi: e.detail
    })
    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
      method: "GET",
      data: {uid:25290},
      success: function (data) {
        let val = e.detail
        // console.log(val)
        // console.log(data.data.data)
        let arr = data.data.data
        let list = arr.filter(item=>item.pname.indexOf(val) != -1)
        _this.setData({
          list:list
        })
        // console.log(list)
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索',
    })

    var _this = this
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
      method: "GET",
      data: { uid: 25290,pagesize:8 },
      success: function (data) {
        _this.setData({
          list1: data.data.data
        })
        // console.log()
      }
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