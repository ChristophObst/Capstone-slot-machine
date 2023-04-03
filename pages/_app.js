import styled from "styled-components";
import WheelContainer from "../components/WheelContainer/WheelContainer";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>
      <WheelContainer />
      <ButtonContainer />
      <Component {...pageProps} />
    </>
  );
}
