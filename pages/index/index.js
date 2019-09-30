//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
      val:'',
      list:[],
    weizhi:"郑州",
      active: 0
  },
  onChange(event) {
    wx.showToast({
      icon: 'none',
      title: `切换至第${event.detail}项`
    })
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  tao(e){
    let id = e.target.dataset.id
    console.log(id)
    wx.navigateTo({
      url: "../about/about?id=" + id
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类'
    })
    var _this = this 
    wx.request({
      url: 'http://jx.xuzhixiang.top/ap/api/productlist.php',
      method: "GET",
      data: { uid: 25290,pagesize:10 },
      success: function (data) {
       _this.setData({
         list:data.data.data
       })

        console.log(_this.data.list)
      }
    })
  },

})
