// pages/buyTicket/buyTicket.js
// 获取全局变量
let app =getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinemaData:{},
    movies:[],
    oldClass:'banner_img',
    newClass:'click_banner_img',
    clickId:'',
    showID:0,
    showOldClass:'dateshow',
    showNewClass:'dateNewshow',
  },
  ChangeClsss:function(e){
    // 根据id来判断是否点击并切换class样式
    this.setData({
      clickId:e.currentTarget.id
    })
  },
  changeShow:function(e){
    this.setData({
      showID:e.currentTarget.id
    })
  },
  showToast:function(e){
    wx.showToast({
      title:'学习使用，未开放',
      icon:'error',
      duration: 2000
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if(options.movieId==undefined){
      options.movieId = app.globalData.cinema_id;
    }
    this.setData({
      clickId:options.movieId,
      scroll:options.movieId
    })
    // https://m.maoyan.com/ajax/cinemaDetail?cinemaId= id是影院id
    wx.request({
      url:"https://m.maoyan.com/ajax/cinemaDetail?cinemaId="+options.cinemaId,
      success:(res) =>{
        console.log(res);
        this.setData({
          cinemaData:res.data.cinemaData,
          movies:res.data.showData.movies,
        })
      }
    })

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