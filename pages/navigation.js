import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

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
  const showStorage = storage.map((array) => (
    <div key={list}>
      <li>{array} tries</li>
    </div>
  ));

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
    </p>
  );
}
