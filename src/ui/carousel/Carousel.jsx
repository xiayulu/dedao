import { useEffect, useState } from "react";

export default function Carousel() {
  const [curr, setCurr] = useState(0);
  const total = data.length;

  function toNext() {
    setCurr((curr + 1) % total);
  }

  function toPre() {
    setCurr((((curr - 1) % total) + total) % total);
  }

  useEffect(() => {
    const timer = setInterval(toNext, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [curr]);

  return (
    <div className="carousel mx-auto" onClick={(e) => toNext()}>
      <img src={data[curr].img} alt="" />
    </div>
  );
}

const data = [
  {
    link: "",
    img: "https://piccdn3.umiwi.com/img/202205/25/202205251610307740597311.jpeg",
  },
  {
    link: "",
    img: "https://piccdn3.umiwi.com/img/202203/21/202203210643366536423266.jpeg",
  },
];
