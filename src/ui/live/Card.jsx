export default function LiveCard() {
  return (
    <div className="me-5">
      <div class="text-center">
        <i class="iconfont iget-icon-clock iget-common-f3 preview-clock"></i>
        今日 20:00
      </div>
      <div class="live-card iget-common-b9 live-card-hover">
        <div class="live-card-tag iget-common-c9 iget-common-f6 preview-tag">
          直播预告
        </div>
        <div class="live-card-cover">
          <img
            alt="四季度目标，用OKR怎么定？封面图"
            class="cover-img home-img"
            data-src="https://piccdn3.umiwi.com/img/202209/30/202209300646054665542994.jpeg?x-oss-process=image/crop,h_608/resize,w_1080,h_608,m_fill"
            src="https://piccdn3.umiwi.com/img/202209/30/202209300646054665542994.jpeg?x-oss-process=image/crop,h_608/resize,w_1080,h_608,m_fill"
            lazy="loaded"
          />
        </div>
        <div class="live-card-detail">
          <div class="live-card-title iget-common-f4">
            四季度目标，用OKR怎么定？
          </div>
          <div class="live-card-intro">
            <div class="intro-text iget-common-f6 iget-common-c2">
              得到高研院出品——国庆充电计划来了！10月7日20:00-21:30，《管理者OKR实战课》第二次陪跑直播：四季度目标，用OKR怎么定？邀请你来看。
            </div>
            <div class="privilege-tag iget-common-c9 privilege-tag-none">
              直播
            </div>
          </div>
          <div class="live-card-learners iget-common-c3">4832人已预约</div>
          <div class="live-card-btn-container iget-common-b7">
            <div class="live-card-btn-mask"></div>
            <button class="live-card-btn iget-common-c10 iget-common-f5">
              查看直播
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
