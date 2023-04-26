import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: gold;
  font-weight: 900;
`;

const StyledFormular = styled.div`
  font-weight: 900;
`;

const StyledComment = styled.div`
  display: flex;
  font-weight: 900;
`;

const StyledList = styled.div`
  margin-top: 80px;
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
      <StyledFormular>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="text"></label>
          <StyledComment>
            <p>Comment</p>
            <textarea id="text" name="text" required />
          </StyledComment>
          <button type="submit">submit</button>
        </form>
      </StyledFormular>
      <StyledList>
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
      </StyledList>
    </>
  );
}
