import styled from "styled-components";

const StyledWheelContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSlotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

const StyledSlot = styled.div`
  font-size: 150%;
  display: flex;
  height: 240px;
  width: 6rem;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bababa;
  border-radius: 5px;
  background-color: #f8f8f8;
  @media (min-width: 414px) {
    font-size: 175%;
    border-radius: 30px;
    background-color: #f8f8f8;
    display: flex;
    width: 7.5rem;
    height: 280px;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid #bababa;
    border-radius: 5px;
  }
  @media (min-width: 700px) {
    font-size: 275%;
    border-radius: 30px;
    background-color: #f8f8f8;
    display: flex;
    width: 80%;
    height: 440px;
    align-items: center;
    margin-bottom: 50px;
    border: 2px solid #bababa;
    border-radius: 5px;
  }
`;

const StyledParagraph = styled.div`
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33.33%;
  overflow: hidden;
`;

const StyledButtonWheel = styled.button`
  color: white;
  padding: 1rem 0.7rem;
  width: 60px;
  background-color: #ff3a33;
  border: none;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 414px) {
    color: white;
    border-radius: 20px;
    background: red;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 75px;
  }

  @media (min-width: 700px) {
    color: white;
    border-radius: 20px;
    background: red;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 75px;
  }
`;

export default function WheelContainer({
  showFruit,
  amountprint1,
  amountprint2,
  amountprint3,
  onIsActive1,
  onIsActive2,
  onIsActive3,
  firstIncrementFruit,
  secondIncrementFruit,
}) {
  return (
    <StyledWheelContainer>
      <StyledSlotWrapper>
        <StyledSlot>
          <StyledParagraph>{showFruit(amountprint1)}</StyledParagraph>
          <StyledParagraph>{firstIncrementFruit(amountprint1)}</StyledParagraph>
          <StyledParagraph>
            {secondIncrementFruit(amountprint1)}
          </StyledParagraph>
        </StyledSlot>
        <StyledButtonWheel
          onClick={() => {
            onIsActive1(false);
          }}
        >
          STOP
        </StyledButtonWheel>
      </StyledSlotWrapper>
      <StyledSlotWrapper>
        <StyledSlot>
          <StyledParagraph>{showFruit(amountprint2)}</StyledParagraph>
          <StyledParagraph>{firstIncrementFruit(amountprint2)}</StyledParagraph>
          <StyledParagraph>
            {secondIncrementFruit(amountprint2)}
          </StyledParagraph>
        </StyledSlot>
        <StyledButtonWheel
          onClick={() => {
            onIsActive2(false);
          }}
        >
          STOP
        </StyledButtonWheel>
      </StyledSlotWrapper>
      <StyledSlotWrapper>
        <StyledSlot>
          <StyledParagraph>{showFruit(amountprint3)}</StyledParagraph>
          <StyledParagraph>{firstIncrementFruit(amountprint3)}</StyledParagraph>
          <StyledParagraph>
            {secondIncrementFruit(amountprint3)}
          </StyledParagraph>
        </StyledSlot>
        <StyledButtonWheel
          onClick={() => {
            onIsActive3(false);
          }}
        >
          STOP
        </StyledButtonWheel>
      </StyledSlotWrapper>
    </StyledWheelContainer>
  );
}
