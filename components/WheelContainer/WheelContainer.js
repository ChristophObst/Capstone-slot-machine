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
  @media (min-width: 400px) {
    font-size: 150%;
    border-radius: 30px;
    background-color: #f8f8f8;
    display: flex;
    width: 80%;
    height: 280px;
    align-items: center;
    margin-bottom: 50px;
    border: 1px solid #bababa;
    border-radius: 5px;
  }
  @media (min-width: 700px) {
    font-size: 250%;
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

  @media (min-width: 400px) {
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
          <p>{showFruit(amountprint1)}</p>
          <p>{firstIncrementFruit(amountprint1)}</p>
          <p>{secondIncrementFruit(amountprint1)}</p>
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
          <p>{showFruit(amountprint2)}</p>
          <p>{firstIncrementFruit(amountprint2)}</p>
          <p>{secondIncrementFruit(amountprint2)}</p>
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
          <p>{showFruit(amountprint3)}</p>
          <p>{firstIncrementFruit(amountprint3)}</p>
          <p>{secondIncrementFruit(amountprint3)}</p>
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
