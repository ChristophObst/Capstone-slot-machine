import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

const ClearButton = styled.button`
  width: 50px;
  height: 25px;
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
        <button>Home</button>
      </Link>
      <button
        onClick={() => {
          clearStorage();
        }}
      >
        clear Storage
      </button>

      <p>best of 5 records, reverse ranking: {showStorage}</p>
    </p>
  );
}
