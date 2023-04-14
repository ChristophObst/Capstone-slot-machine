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
}) {
  return (
    <StyledWheelContainer>
      <StyledSlot>
        <p>{showFruit1()}</p>
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
        <p> {showFruit2()}</p>
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
        <p> {showFruit3()}</p>
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
