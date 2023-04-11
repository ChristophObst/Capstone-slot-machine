import WheelContainer from "../components/WheelContainer/WheelContainer";
import styled from "styled-components";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import Link from "next/link";

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

const NavigationButton = styled.button`
  width: 10spx;
  height: 20px;
`;

export default function HomePage({
  color1,
  color2,
  color3,
  onSpin,
  counting,
  resultText,
  trys,
  records,
  storageText,
}) {
  return (
    <div>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>
      <WheelContainer color1={color1} color2={color2} color3={color3} />
      <ResultContainer>
        <p>{resultText}</p>
        <p>{trys}</p>
      </ResultContainer>
      <ButtonContainer onSpin={onSpin} counting={counting} />
      <p>{storageText}</p>
      <p>{records}</p>

      <Link href={"/navigation"}>
        <NavigationButton>jump to records page</NavigationButton>
      </Link>
    </div>
  );
}
