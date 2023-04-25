import WheelContainer from "../components/WheelContainer/WheelContainer";
import styled from "styled-components";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import Link from "next/link";
import CommentaryList from "../components/CommentaryList";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ResultContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
//----------------------------------------
const NavigationWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 8px;
  gap: 8px;
  width: 100%;
  height: 70px;
  background-color: #8597e6;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HomePage({
  color1,
  color2,
  color3,
  resultText,
  trys,
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
    <>
      <HeadlineContainer>
        <h1>Slot Machine</h1>
      </HeadlineContainer>

      <StyledMain>
        <ResultContainer>
          <p>{resultText}</p>
          <p>{trys}</p>
        </ResultContainer>
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
        <ButtonContainer
          onIsActive1={onIsActive1}
          onIsActive2={onIsActive2}
          onIsActive3={onIsActive3}
        />

        <NavigationWrapper>
          <StyledLink href={"/navigation"}>records</StyledLink>
          <StyledLink href={"/commentary"}>commentary</StyledLink>
        </NavigationWrapper>
      </StyledMain>
    </>
  );
}
