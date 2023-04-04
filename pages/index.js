import WheelContainer from "../components/WheelContainer/WheelContainer";
import styled from "styled-components";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export default function HomePage({
  color1,
  color2,
  color3,
  onSpin,
  resultText,
}) {
  return (
    <div>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>
      <WheelContainer color1={color1} color2={color2} color3={color3} />
      <ResultContainer>
        <p>{resultText}</p>
      </ResultContainer>
      <ButtonContainer onSpin={onSpin} />
    </div>
  );
}
