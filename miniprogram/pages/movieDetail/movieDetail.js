// pages/movieDetail/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    bgcImg: "",
    infoArr: [],
    stars: [],
    shareInfo_content: "",
  },
  //预览图片
  previewImage(e) {
    const currentIndex = e.currentTarget.id;
    const urls = this.data.infoArr.photos.map(item => item.replace('180w_140h', '375w_250h'))
    wx.previewImage({
      urls,
      current: urls[currentIndex]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })

    wx.request({
      // 电影详情https://m.maoyan.com/ajax/detailmovie?movieId=? 参数：movieId ⇒ 电影ID
      url: 'https://m.maoyan.com/ajax/detailmovie?movieId=' + options.id + '',
      success: (res) => {
        // 格式化星星
        let stars = new Array(5).fill('star-empty');
        let sc = res.data.detailMovie.sc;
        const fullNum = Math.floor(sc / 2);//满星个数
        const halfNum = sc % 1 ? 'star-half' : 'star-empty';//半星个数最多1个
        stars.fill('star-full', 0, fullNum);//从0开始放入满星个数
        if (fullNum < 5) {
          stars[fullNum] = halfNum;//满星后的位置放入半星
        }
        let shareInfo_content = res.data.detailMovie.shareInfo.content.slice(3);
        // 设置数据
        this.setData({
          bgcImg: res.data.detailMovie.img,
          infoArr: res.data.detailMovie,
          stars: stars,
          shareInfo_content
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