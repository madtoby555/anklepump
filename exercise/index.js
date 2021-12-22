// exercise/index.js


Page({
  data: {
    radioItems: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '未知设备'},
    ]
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            [`formData.radio`]: e.detail.value
        });
    }
    
  ,
  lanya1:function(){
    var that = this;
    wx.openBluetoothAdapter({
    success: function (res) {
    console.log('初始化蓝牙适配器返回' + JSON.stringify(res))
    },
    fail:function(res){
    console.log('初始化蓝牙适配器失败' + JSON.stringify(res))
    }
    })
    wx.startBluetoothDevicesDiscovery({
        success: function (res) {
        console.log('搜索设备返回' + JSON.stringify(res))
        }
        })
    wx.getBluetoothDevices({
      success: (res) => {
          
          var radioItems =[];
          for (let i = 0;i<res.devices.length;i++)
          {   console.log(res.devices[i].name,res.devices[i].deviceId)
            var name = res.devices[i].name;
            var value = res.devices[i].value;
            radioItems.push({name,value})
          }
          this.setData({
            radioItems:radioItems
          })
      },
    })
  }

})
