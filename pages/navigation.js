import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { uid } from "uid";

const StyledHeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: white;
  background-color: #8597e6;
  margin-bottom: 10px;
`;

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
  width: 35%;
  height: 30px;
  background-color: #e6e15b;
  margin-left: 1rem;
`;

const NavigationWrapper = styled.footer`
  position: fixed;
  color: white;
  font-weight: bold;
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
  font-size: 120%;
  font-weight: bold;
  color: white;
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

const StyledOutput = styled.div`
  flex-wrap: wrap;
  overflow-wrap: break-word;
  align-content: flex-end;
  width: 90%;
  min-height: 120px;
  max-height: 160px;
  padding-left: 6%;
  padding-right: 2.5%;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  border-radius: 10px;
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
  overflow: auto;
`;

const StyledEmoji = styled.span`
  font-size: 100%;
  display: flex;
  flex-direction:
  font-weight: 900;
`;

export default function Navigation({ clearStorage, userName }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  return (
    <>
      <StyledHeadlineContainer>
        <h1>Best of 5 Records</h1>
      </StyledHeadlineContainer>
      <StyledOutput>
        {storage.map((element, index) => (
          <div key={uid()}>
            <li>
              {element} tries -- {userName[index]}
            </li>
          </div>
        ))}
      </StyledOutput>
      <StyledButton
        onClick={() => {
          clearStorage();
        }}
      >
        <StyledEmoji>🗑️ Reset Records</StyledEmoji>
      </StyledButton>
      <NavigationWrapper>
        <StyledLink href={"/"}>🏠 Home</StyledLink>
        <StyledLink href={"/commentary"}>🧾 Comments</StyledLink>
      </NavigationWrapper>
    </>
  );
}
