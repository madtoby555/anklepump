// subpage/sz.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "12:01",
    error:"false"
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
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

  },
  cleancache:function(){
    try { //清理缓存
      wx.clearStorageSync();
      wx.showToast({
        title: '成功',
      });
    } catch(e) {
      this.setData({
       error:"true"
      });
    }
  },

 unregister:function(){
  wx.clearStorageSync();//清除缓存
  wx.showToast({
     title: '退出登录成功',
     duration: 2000,
     success: function () {
        setTimeout(function () {
           //跳转到首页，强制重启
           wx.reLaunch({
              url: '/home/index',
           })
        }, 2000);
     }
  })
},
})