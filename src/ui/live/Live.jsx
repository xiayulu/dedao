import LiveCard from "./Card";

export default function Live() {
  return (
    <div>
      <h1>精彩直播</h1>
      <h4>直播都用大屏看，沉浸式学习享受</h4>

      <div className="mw-header d-flex mx-auto">
        {data.map((item, index) => (
          <LiveCard key={index}></LiveCard>
        ))}
      </div>
    </div>
  );
}

const data = [1, 2, 3, 4];
