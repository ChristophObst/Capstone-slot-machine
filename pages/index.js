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
//----------------------------------------
const ContainerNavigation = styled.div`
  display: flex;
  justify-content: center;
`;

const NavigationButton = styled.button`
  width: 10spx;
  height: 20px;
  background-color: gold;
  display: flex;
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
  showFruit,
  firstIncrementFruit,
  secondIncrementFruit,
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
        showFruit={showFruit}
        onIsActive1={onIsActive1}
        onIsActive2={onIsActive2}
        onIsActive3={onIsActive3}
        firstIncrementFruit={firstIncrementFruit}
        secondIncrementFruit={secondIncrementFruit}
      />
      <ResultContainer>
        <p>{resultText}</p>
        <p>{trys}</p>
      </ResultContainer>
      <ButtonContainer
        onIsActive1={onIsActive1}
        onIsActive2={onIsActive2}
        onIsActive3={onIsActive3}
      />
      <p>{storageText}</p>
      <p>{records}</p>

      <Link href={"/navigation"}>
        <ContainerNavigation>
          <NavigationButton>jump to records page</NavigationButton>
        </ContainerNavigation>
      </Link>
      <Link href={"/commentary"}>
        <ContainerNavigation>
          <NavigationButton>jump to commentary page</NavigationButton>
        </ContainerNavigation>
      </Link>
    </div>
  );
}
