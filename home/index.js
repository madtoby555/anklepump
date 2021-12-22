Page({
  data: {
    condition:'',
    shownewslist:'',
    subpageNavSubject:[
      { 
        id :"1.wxml",
        icon :'/source/帮助.png',
        title:'帮助'
      },
      {
      id:"2.wxml",
      icon:"/source/考核.png",
      title:"情况"
      }
      ,
      {
        id:"3.wxml",
        icon:'/source/菜单管理.png',
        title:"菜单"
        },
        {
          id:"4.wxml",
          icon:'/source/设置.png',
          title:"设置"
        },
        {
          id:"5.wxml",
          icon:'/source/通知.png',
          title:"通知"
        }

    ],

    background:[
      { src:'/source/cat.jpg'},
      {src:"/source/travel.png"},
      {src:"/source/star.jpg"}
    ],
  },
onLoad(){
  //获取新闻
  var that = this;
  wx.cloud.database().collection("users")
  .where({userid:"test"}).get().then(res=>{
    console.log(res.data[0].exercise)
    that.setData({
      condition:res.data[0].exercise,
      shownewslist:getApp().globaldata.shownewslist.slice(0,3)
    })
  })
  .catch(err=>{
    console.log(err)
  })
}
})
