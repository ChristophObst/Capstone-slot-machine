import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: gold;
  font-weight: 900;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Navigation() {
  const { data, isLoading, error, mutate } = useSWR("/api/commentary", fetcher);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);
    console.log(commentData);
    const response = await fetch("/api/commentary", {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
      mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      <Link href={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input id="name" name="name" type="text" required />
        <label htmlFor="text"></label>
        <textarea id="text" name="text" required />
        <button type="submit">submit</button>
      </form>
      <div>
        {!isLoading &&
          !error &&
          data.map((entry) => {
            return (
              <div key={entry._id}>
                <h3>{entry.name}</h3>
                <p>{entry.text}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
