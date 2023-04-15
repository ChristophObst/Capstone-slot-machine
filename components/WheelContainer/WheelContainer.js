import styled from "styled-components";
import React, { useState } from "react";

const StyledWheelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledBox1 = styled.div`
  background: ${(props) => props.color};
  width: 100px;
  height: 200px;
`;
const StyledBox2 = styled.div`
  background: ${(props) => props.color};
  width: 100px;
  height: 200px;
`;
const StyledBox3 = styled.div`
  background: ${(props) => props.color};
  width: 100px;
  height: 200px;
`;

const StyledSlot = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledButtonWheel = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
`;

export default function WheelContainer({
  color1,
  color2,
  color3,
  showFruit1,
  showFruit2,
  showFruit3,
  amountprint1,
  amountprint2,
  amountprint3,
  onIsActive1,
  onIsActive2,
  onIsActive3,
  firstIncrementFruit1,
  secondIncrementFruit1,
  firstIncrementFruit2,
  secondIncrementFruit2,
  firstIncrementFruit3,
  secondIncrementFruit3,
}) {
  return (
    <StyledWheelContainer>
      <StyledSlot>
        <p>{showFruit1(amountprint1)}</p>
        <p>{firstIncrementFruit1(amountprint1)}</p>
        <p>{secondIncrementFruit1(amountprint1)}</p>
        <StyledBox1 color={color1} />
        <StyledButtonWheel
          onClick={() => {
            onIsActive1(false);
          }}
        >
          Stop Wheel1
        </StyledButtonWheel>
      </StyledSlot>
      <StyledSlot>
        <p>{showFruit2(amountprint2)}</p>
        <p>{firstIncrementFruit2(amountprint2)}</p>
        <p>{secondIncrementFruit2(amountprint2)}</p>
        <StyledBox2 color={color2} />
        <StyledButtonWheel
          onClick={() => {
            onIsActive2(false);
          }}
        >
          Stop Wheel2
        </StyledButtonWheel>
      </StyledSlot>
      <StyledSlot>
        <p>{showFruit3(amountprint3)}</p>
        <p>{firstIncrementFruit3(amountprint3)}</p>
        <p>{secondIncrementFruit3(amountprint3)}</p>
        <StyledBox3 color={color3} />
        <StyledButtonWheel
          onClick={() => {
            onIsActive3(false);
          }}
        >
          Stop Wheel3
        </StyledButtonWheel>
      </StyledSlot>
    </StyledWheelContainer>
  );
}
