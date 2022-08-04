// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: { //url请求参数对象
      day: '',
      offset: 0,
      limit: 20,
      districtId: -1,
      lineId: -1,
      hallType: -1,
      brandId: -1,
      serviceId: -1,
      areaId: -1,
      stationId: -1,
      item: '',
      updateShowDay: false
    },
    cinemas:[],
  },

  getToday:function(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;
    return today;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.data.params.day = this.getToday();

    // https://m.maoyan.com/ajax/cinemaList 获取影院列表
    wx.request({
      url:'https://m.maoyan.com/ajax/cinemaList',
      params:this.data.params,
      success:res =>{
        this.setData({
          cinemas:res.data.cinemas
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