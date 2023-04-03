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

export default function ButtonContainer() {
  return (
    <StyledButtonContainer>
      <StyledButton>Start</StyledButton>
    </StyledButtonContainer>
  );
}
