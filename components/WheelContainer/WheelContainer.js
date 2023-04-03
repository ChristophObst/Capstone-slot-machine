import styled from "styled-components";

const StyledWheelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledBox1 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;
const StyledBox2 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;
const StyledBox3 = styled.div`
  background: lightgrey;
  width: 100px;
  height: 200px;
`;

export default function WheelContainer() {
  return (
    <StyledWheelContainer>
      <StyledBox1 />
      <StyledBox2 />
      <StyledBox3 />
    </StyledWheelContainer>
  );
}
