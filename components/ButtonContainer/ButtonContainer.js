import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  align-items: center;
  gap: 10px;
`;
//--------
const StyledButtonWheel = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
  background: green;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 400px) {
    background: green;
    color: white;
    font-weight: bold;
    height: 80px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 100%;
  }
`;

const StyledButtonWheelStop = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
  background: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 400px) {
    background: red;
    color: white;
    height: 80px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    font-size: 100%;
  }
`;

export default function ButtonContainer({
  onIsActive1,
  onIsActive2,
  onIsActive3,
}) {
  return (
    <StyledButtonContainer>
      <StyledButtonWheelStop
        onClick={() => {
          onIsActive1(false);
          onIsActive2(false);
          onIsActive3(false);
        }}
      >
        Stop all Wheels
      </StyledButtonWheelStop>
      <StyledButtonWheel
        onClick={() => {
          onIsActive1(true);
          onIsActive2(true);
          onIsActive3(true);
        }}
      >
        Start Game
      </StyledButtonWheel>
    </StyledButtonContainer>
  );
}
