import styled from "styled-components";

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const WheelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;

const StyledBox1 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;
const StyledBox2 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;
const StyledBox3 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;
const StyledButton = styled.button`
  width: 50px;
  height: 25px;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>
      <WheelContainer>
        <StyledBox1 />
        <StyledBox2 />
        <StyledBox3 />
      </WheelContainer>
      <ButtonContainer>
        <StyledButton>Start</StyledButton>
      </ButtonContainer>
      <Component {...pageProps} />
    </>
  );
}
