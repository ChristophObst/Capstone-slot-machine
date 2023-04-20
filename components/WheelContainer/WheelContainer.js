import styled from "styled-components";
import React, { useState } from "react";

const StyledWheelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 35px;

  align-items: center;
`;
//------
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
  border: 2.5px solid orange;
  @media (min-width: 400px) {
    font-size: 150%;
    border-radius: 30px;    
    background: gold;
    display: flex
    width: 80%;
    height: 280px;
    align-items: center;
    margin-bottom: 50px;   
    border: 5px solid orange
  }
  @media (min-width: 700px) {
    font-size: 250%;
    border-radius: 30px;    
    background: gold;
    display: flex
    width: 80%;
    height: 440px;
    align-items: center;
    margin-bottom: 50px;   
    border: 5px solid orange
  }
  
`;

const StyledButtonWheel = styled.button`
  display: flex;
  align-items: center;
  color: white;
  background: red;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 75px;

  @media (min-width: 400px) {
    color: white;
    height: 40px;
    width: 80px;
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
      <StyledSlot>
        <p>{showFruit(amountprint1)}</p>
        <p>{firstIncrementFruit(amountprint1)}</p>
        <p>{secondIncrementFruit(amountprint1)}</p>
        <StyledBox1 />
        <StyledButtonWheel
          onClick={() => {
            onIsActive1(false);
          }}
        >
          Stop Wheel1
        </StyledButtonWheel>
      </StyledSlot>
      <StyledSlot>
        <p>{showFruit(amountprint2)}</p>
        <p>{firstIncrementFruit(amountprint2)}</p>
        <p>{secondIncrementFruit(amountprint2)}</p>
        <StyledBox2 />
        <StyledButtonWheel
          onClick={() => {
            onIsActive2(false);
          }}
        >
          Stop Wheel2
        </StyledButtonWheel>
      </StyledSlot>
      <StyledSlot>
        <p>{showFruit(amountprint3)}</p>
        <p>{firstIncrementFruit(amountprint3)}</p>
        <p>{secondIncrementFruit(amountprint3)}</p>
        <StyledBox3 />
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
