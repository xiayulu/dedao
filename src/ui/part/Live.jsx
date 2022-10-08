import LiveCard from "./Card";
import PartHeader from "./Header";

export default function Live() {
  return (
    <div>
      <PartHeader
        title={"精彩直播"}
        detail={"直播都用大屏看，沉浸式学习享受"}></PartHeader>
      <div className="mw-header d-flex mx-auto">
        {data.map((item, index) => (
          <LiveCard key={index}></LiveCard>
        ))}
      </div>
    </div>
  );
}

const data = [1, 2, 3, 4];
