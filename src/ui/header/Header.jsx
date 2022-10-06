export default function Header() {
  return (
    <header className="mx-header fixed-top px-8 h-16 bg-white d-flex align-items-center justify-content-between">
      <h1 className="mb-0 me-8">
        <img
          src="https://piccdn2.umiwi.com/fe-oss/default/MTYzNzA0MzE4NTc3.png"
          srcset="https://piccdn2.umiwi.com/fe-oss/default/MTYzNzA0MzE4NTgz.png 1x, https://piccdn2.umiwi.com/fe-oss/default/MTYzNzA0MzE4NTc3.png 2x, https://piccdn2.umiwi.com/fe-oss/default/MTYzNzA0MzE4NTMy.png 3x"
          alt="知识就在得到"
        />
      </h1>
      <form className="flex-grow-1 input-group">
        <input
          type="search"
          className="form-control"
          placeholder="你想学什么?"
        />
        <button className="btn btn-chief text-white">得到一下</button>
      </form>
      <nav className="mx-5">
        <a href="#" className="btn">
          <i className="iconfont iget-icon-xunlian me-1"></i>
          <span className="text">得到训练</span>
        </a>
        <a href="#" className="btn">
          <i className="iconfont iget-icon-knowledge me-1"></i>
          <span className="text">知识城邦</span>
        </a>
      </nav>
      <div className="me-6">
        <button className="btn iconfont iget-icon-update-reminder"></button>
      </div>
      <div className="">
        <div className="btn border border-light text-chief">
          <span>登录</span> <span>|</span> <span>注册</span>
        </div>
      </div>
    </header>
  );
}
