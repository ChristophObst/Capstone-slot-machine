import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { uid } from "uid";

const StyledButton = styled.button`
  margin-top: 1rem;
  text-decoration: none;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 8px;
  gap: 8px;
  width: 30%;
  height: 30px;
  background-color: #e6e15b;
`;

const NavigationWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 8px;
  gap: 8px;
  width: 100%;
  height: 70px;
  background-color: #8597e6;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 8px;
  gap: 8px;
  width: 50%;
  height: 70px;
  background-color: #8597e6;
`;

export default function Navigation({ clearStorage, userName }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  return (
    <>
      <h2>Best of 5 Records</h2>
      <div>
        {storage.map((element, index) => (
          <div key={uid()}>
            <li>
              {element} tries -- {userName[index]}
            </li>
          </div>
        ))}
      </div>
      <StyledButton
        onClick={() => {
          clearStorage();
        }}
      >
        Reset Records
      </StyledButton>
      <NavigationWrapper>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/commentary"}>commentaries</StyledLink>
      </NavigationWrapper>
    </>
  );
}
