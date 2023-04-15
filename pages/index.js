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
  onIsActive1,
  onIsActive2,
  onIsActive3,
  amountprint1,
  amountprint2,
  amountprint3,
  showFruit1,
  showFruit2,
  showFruit3,
  firstIncrementFruit1,
  secondIncrementFruit1,
  firstIncrementFruit2,
  secondIncrementFruit2,
  firstIncrementFruit3,
  secondIncrementFruit3,
}) {
  return (
    <div>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>
      <WheelContainer
        color1={color1}
        color2={color2}
        color3={color3}
        amountprint1={amountprint1}
        amountprint2={amountprint2}
        amountprint3={amountprint3}
        showFruit1={showFruit1}
        showFruit2={showFruit2}
        showFruit3={showFruit3}
        onIsActive1={onIsActive1}
        onIsActive2={onIsActive2}
        onIsActive3={onIsActive3}
        firstIncrementFruit1={firstIncrementFruit1}
        secondIncrementFruit1={secondIncrementFruit1}
        firstIncrementFruit2={firstIncrementFruit2}
        secondIncrementFruit2={secondIncrementFruit2}
        firstIncrementFruit3={firstIncrementFruit3}
        secondIncrementFruit3={secondIncrementFruit3}
      />
      <ResultContainer>
        <p>{resultText}</p>
        <p>{trys}</p>
      </ResultContainer>
      <ButtonContainer
        onSpin={onSpin}
        counting={counting}
        onIsActive1={onIsActive1}
        onIsActive2={onIsActive2}
        onIsActive3={onIsActive3}
      />
      <p>{storageText}</p>
      <p>{records}</p>

      <Link href={"/navigation"}>
        <NavigationButton>jump to records page</NavigationButton>
      </Link>
    </div>
  );
}
