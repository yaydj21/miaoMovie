// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    hotMovie:[],
    comingMovie:[],
    winHeight:0,
    expectedlist:[],
    comingList:[]
  },
  changeSwiperIndex:function(e){
    let id = e.currentTarget.id;//点击的current值
      this.setData({
        currentIndex:id,
      })
  },
  swiperChange:function(e){
    let id = e.detail.current;
    this.setData({
      currentIndex:id,
    })
  },
  goMovieDetail:function(e){
    wx.navigateTo({
      url:'/pages/movieDetail/movieDetail?id=' + e.currentTarget.id  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // https://m.maoyan.com/ajax/movieOnInfoList 正在热映api
    wx.request({
      url:'https://m.maoyan.com/ajax/movieOnInfoList',
      // method:get 默认是get
      success:res =>{
        this.setData({
          hotMovie:res.data.movieList,
          winHeight:res.data.movieList.length*228,
        })
      }
    });

    //https://m.maoyan.com/ajax/mostExpected?limit=10&offset=0&token= 最受欢迎mostExpected
    wx.request({
      url:'https://m.maoyan.com/ajax/mostExpected?limit=10&offset=0&token=',
      success:res =>{
        res = res.data.coming.map((val,key) =>{
          val.comingTitle = val.comingTitle.split(' ');//按空格分割开
          val.comingTitle = val.comingTitle[0];//把分割开的第一个赋值回去
          return val;
        });
        this.setData({
          expectedlist:res
        })
      }
    });
    https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10 即将上映comingList
    wx.request({
      url:'https://m.maoyan.com/ajax/comingList?ci=10&token=&limit=9',
      success:res =>{
        this.setData({
          comingList:res.data.coming
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