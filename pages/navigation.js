import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { uid } from "uid";

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: gold;
  font-weight: 900;
`;

export default function Navigation({ clearStorage, userName }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  return (
    <>
      <Link href={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>
      <StyledButton
        onClick={() => {
          clearStorage();
        }}
      >
        Reset Records
      </StyledButton>

      <div>
        best of 5 records, reverse ranking:{" "}
        {storage.map((element, index) => (
          <div key={uid()}>
            <li>
              {element} tries -- {userName[index]}
            </li>
          </div>
        ))}
      </div>
    </>
  );
}
