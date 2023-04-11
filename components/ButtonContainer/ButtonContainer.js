import styled from "styled-components";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 50px;
  height: 25px;
`;

//how to utilze this outsourced code, prop drilling not working!?
/* const handleSpin = () => {
  onSpin();
  counting();
}; */

export default function ButtonContainer({ onSpin, counting }) {
  return (
    <StyledButtonContainer>
      <StyledButton
        onClick={() => {
          onSpin();
          counting();
        }}
      >
        Start
      </StyledButton>
    </StyledButtonContainer>
  );
}
