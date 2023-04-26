import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  @media (min-width: 414px) {
    margin-top: 1.5rem;
`;

const StyledButtonWheelStart = styled.button`
  color: white;
  padding: 1rem 0.7rem;
  background-color: #39bf68;
  border: none;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 414px) {
    margin-top: 0.4rem;
    width: 120px;
    heigth: 80px;
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

  @media (min-width: 414px) {
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
