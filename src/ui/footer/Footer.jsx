export default function Footer() {
  return (
    <footer>
      <div className="d-flex px-8 pt-10 mw-xxl mx-auto">
        <div className="w-5f12 px-2d5">
          <h5 className="fs-lg mb-4">联系我们：</h5>
          <p className="fs-xs mb-3">客服电话: 400-0526-000</p>
          <p className="fs-xs mb-3">邮箱: iget@luojilab.com</p>
        </div>
        <div className="w-4f12 px-2d5">
          <h5 className="fs-lg mb-4">相关链接：</h5>
          <p className="fs-xs mb-3">
            <a
              href="https://www.igetget.com/"
              target="_blank"
              className="link-text">
              得到官网
            </a>
          </p>
          <p className="fs-xs mb-3">
            <a
              href="https://qy.igetget.com/"
              target="_blank"
              className="link-text">
              得到企业版
            </a>
          </p>
          <p className="fs-xs mb-3">
            <a
              href="https://www.umiwi.com/"
              target="_blank"
              className="link-text">
              时间的朋友
            </a>
          </p>
        </div>
        <div className="w-3f12">
          <h5 className="fs-lg mb-4">了解更多：</h5>
          <div className="d-flex">
            <figure>
              <img
                alt="得到App"
                className="w-25 p-2"
                data-src="data:image/png;base64,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"
                src="data:image/png;base64,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"
                lazy="loaded"
              />
              <figcaption className="qrcode-desc">下载「得到App」</figcaption>
            </figure>
            <figure className="">
              <img
                src="https://piccdn2.umiwi.com/fe-oss/default/MTYwODYzMTk2Nzg1.png"
                alt="得到公众号"
                className="w-25"
              />
              <figcaption className="qrcode-desc qrcode-follow-bg iget-common-f6 iget-common-c9">
                关注微信公众号
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="permits">
        <p className="detail iget-common-f6 iget-common-c2">
          <span className="detail-item">社会信用代码 91110108662186561M</span>
          <span className="detail-item">
            出版物经营许可证 新出发京零字第海200073号
          </span>
          <span className="detail-item">
            广播电视节目制作经营许可证 （京）字第01204号
          </span>
          <span className="detail-item">
            增值电信业务经营许可证 京ICP证090644号
          </span>
          <span className="detail-item detail-noline detail-item-hover">
            信息网络传播视听节目许可证 0110567
          </span>
        </p>
        <p className="detail iget-common-f6 iget-common-c2">
          <a
            href="https://zt.igetget.com/visual/1Onn4gr8OJT0QjGzq0O6.html"
            target="_blank"
            className="detail-item">
            用户协议
          </a>
          <a
            href="https://www.igetget.com/html/p/9MGZRxz/QlqnY8M8RzcKWG77q7Ln.html"
            target="_blank"
            className="detail-item">
            隐私政策
          </a>
          <a href="javaScript:;" className="detail-item">
            知识产权声明
          </a>
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            className="detail-item">
            京ICP备05039090号-10
          </a>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502042303"
            target="_blank"
            className="detail-item detail-noline">
            京公网安备 11010502042303号
          </a>
        </p>
        <p className="detail iget-common-f6 iget-common-c2">
          <span className="detail-item">北京优视米网络科技有限公司</span>
          <span>Copyright © 2022 All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
