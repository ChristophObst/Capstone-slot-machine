import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  align-items: center;
  gap: 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
`;

const StyledButtonWheel = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
`;

export default function ButtonContainer({
  onSpin,
  counting,
  onIsActive1,
  onIsActive2,
  onIsActive3,
}) {
  return (
    <StyledButtonContainer>
      <StyledButton
        onClick={() => {
          onSpin();
          counting();
        }}
      >
        Start *old mechanic*
      </StyledButton>
      <StyledButtonWheel
        onClick={() => {
          onIsActive1(false);
          onIsActive2(false);
          onIsActive3(false);
        }}
      >
        Stop all Wheels
      </StyledButtonWheel>
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
