import styled from "styled-components";

export default function PartHeader({ title, detail }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Detail>{detail}</Detail>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 54px;
  font-weight: 600;
`;

const Detail = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

