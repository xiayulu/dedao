import styled from "styled-components";

export default function LiveCard() {
  return (
    <Container>
      <ClockWrapper>
        <Clock className="iconfont iget-icon-clock"></Clock>
        今日 20:00
      </ClockWrapper>
      <Card>
        <Tag>
          直播中&nbsp;
          <svg
            height="12"
            width="12"
            viewBox="0 0 12 12"
            stroke="#fff"
            strokeWidth={1.5}>
            <line x1="2" y1="13" x2="2" y2="3">
              <animate
                attributeName="y2"
                dur="500ms"
                repeatCount="indefinite"
                keyTimes="0;0.17;0.5;0.67;1"
                values="3;1;5;7;3"></animate>
            </line>
            <line x1="6" y1="13" x2="6" y2="6">
              <animate
                attributeName="y2"
                dur="500ms"
                repeatCount="indefinite"
                keyTimes="0;0.17;0.67;0.84;1"
                values="6;8;2;4;6"></animate>
            </line>
            <line x1="10" y1="13" x2="10" y2="5">
              <animate
                attributeName="y2"
                dur="500ms"
                repeatCount="indefinite"
                keyTimes="0;0.14;0.5;0.85;1"
                values="5;3;8;3;5"></animate>
            </line>
          </svg>
        </Tag>
        <Cover
          src="https://piccdn3.umiwi.com/img/202210/08/202210080905207645338753.jpeg?x-oss-process=image/crop,h_608/resize,w_1080,h_608,m_fill"
          alt="day30：职场演讲，怎么学会讲故事？封面图"></Cover>

        <Body>
          <Title>{"day30：职场演讲，怎么学会讲故事？"}</Title>
          <Intro>
            "高管口才答疑咨询开播啦！周一至周五19:00-21:00，教练天团现场答疑，高效解决你的口才难题，快来咨询吧。"
          </Intro>
          <Number>{"93人在线"}</Number>
          <Button>进入直播</Button>
        </Body>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  width: 285px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 20px;
  padding-left: 4px;

  position: relative;

  &::before {
    position: absolute;
    top: 20px;
    content: " ";
    height: 1px;
    width: calc(100% + 20px);
    background-color: #e9e9e9;
  }
`;

const ClockWrapper = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 32px;
  padding: 0 15px;
  height: 40px;
  font-size: 16px;
  line-height: 39px;
  background-color: #f3f3f3;
  border-radius: 36px;
  z-index: 10;
`;

const Clock = styled.i`
  color: #ff8830;
  margin-right: 5px;
`;

const Card = styled.div`
  transition: all 0.5s ease;

  position: relative;

  &:hover {
    cursor: pointer;
    transform: translate(0, -6px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06);
    transition: all 0.5s ease;
  }
`;

const Tag = styled.div`
  position: absolute;
  top: 8px;
  left: -4px;

  display: inline-flex;
  align-items: center;

  font-size: 12px;
  height: 20px;
  line-height: 20px;
  color: #fff;

  background: linear-gradient(95.7deg, #2ada3b -0.75%, #0bb861 92.9%);
  padding: 0 8px 0 5px;
  border-radius: 0 10px 10px 0;

  &::before {
    position: absolute;
    bottom: -2px;
    left: 0;
    content: "";
    margin: 0 0 -2px 0;
    border-width: 2px;
    border-style: solid;
    border-color: #0a4e3f #0a4e3f transparent transparent;
  }
`;

const SVG = styled.svg`
  display: inline-block;
  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 1.5;
  fill: none;
`;

const Cover = styled.img`
  border-radius: 8px 8px 0 0;
`;

const Body = styled.div`
  background-color: #fff;
  padding: 16px 16px 20px;
  border-radius: 0 0 8px 8px;
`;

const Title = styled.h4`
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin-bottom: 4px;

  // 以下实现文本溢出省略号
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 溢出几行
  -webkit-box-orient: vertical;
`;

const Intro = styled.p`
  height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: #666;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 溢出几行
  -webkit-box-orient: vertical;
`;

const Number = styled.p`
  font-size: 11px;
  line-height: 18px;
  height: 18px;
  color: #999;
`;

const Button = styled.button`
  width: 100%;
  background-color: #f7f7f7;
  color: #ff6b00;
  border: none;
  border-radius: 6px;

  margin-top: 20px;
  padding: 5px;

  &:hover {
    color: #fff;
    background-color: #ff6b00;
  }
`;
