import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: gold;

  font-weight: 900;
`;

export default function Navigation({ clearStorage, list }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  const { data, error, isLoading } = useSWR(
    "https://randomuser.me/api",
    fetcher
  );

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  console.log(data);

  if (!hasMounted) {
    return null;
  }

  const name = error
    ? "Error"
    : isLoading
    ? "loading..."
    : data.results.length > 0
    ? data.results[0].name.first
    : null;

  const showStorage = storage.map((array) => (
    <div key={list}>
      <li>
        {array} tries -- {name}
      </li>
    </div>
  ));

  /*  const showNames = data.results[0].map((name) => (
    <div key={list2}>
      <li>{name}</li>
    </div>
  )); */

  return (
    <p>
      <Link href={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>
      <StyledButton
        onClick={() => {
          clearStorage();
        }}
      >
        clear Storage
      </StyledButton>

      <p>best of 5 records, reverse ranking: {showStorage}</p>
      {/* <p> {showNames}</p> */}
    </p>
  );
}
