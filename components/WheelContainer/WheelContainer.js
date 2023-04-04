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

export default function WheelContainer({ color1, color2, color3 }) {
  return (
    <StyledWheelContainer>
      <StyledBox1 color={color1} />
      <StyledBox2 color={color2} />
      <StyledBox3 color={color3} />
    </StyledWheelContainer>
  );
}
