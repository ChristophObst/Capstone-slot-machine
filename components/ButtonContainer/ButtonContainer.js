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

export default function ButtonContainer({ onSpin }) {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={onSpin}>Start</StyledButton>
    </StyledButtonContainer>
  );
}
