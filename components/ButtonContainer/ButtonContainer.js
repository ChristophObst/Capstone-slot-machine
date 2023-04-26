import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;
//--------------...
const StyledButtonWheelStart = styled.button`
  color: white;
  padding: 1rem 0.7rem;
  background-color: #39bf68;
  border: none;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
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
  color: white;
  padding: 1rem 0.7rem;
  background-color: #ff3a33;
  border: none;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }

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
        STOP ALL
      </StyledButtonWheelStop>
      <StyledButtonWheelStart
        onClick={() => {
          onIsActive1(true);
          onIsActive2(true);
          onIsActive3(true);
        }}
      >
        START GAME
      </StyledButtonWheelStart>
    </StyledButtonContainer>
  );
}
