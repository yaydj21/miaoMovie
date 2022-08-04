// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showToast: function () {
    wx.showToast({
      title: '暂未开放',
      icon: 'error',
      duration: 2000
    })
  },
  onShareAppMessage(res) {
    return {
      title: '精仿猫眼电影',
      path: 'pages/tabBar/movie/movie'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.login({
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})