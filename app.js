App({
  globaldata:{
    shownewslist:""
  },
  onLaunch: function () {
    wx.cloud.init({
      env:"anklepump-4gf77qbh3550e2e5"});
    var that = this;
    wx.cloud.database().collection("newslist")
    .get({
      success(res){
        let showdata = res.data[0].newslist;
        getApp().globaldata.shownewslist = showdata;
        },
      fail(err){
        console.log("请求失败",err)
        }
      })
  }
})
