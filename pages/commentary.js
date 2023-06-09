import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

const StyledHeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  color: white;
  background-color: #8597e6;
  margin-bottom: 10px;
`;

const StyledFormular = styled.div`
  font-weight: 900;
  margin-left: 1rem;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
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
  margin-top: 1rem;
`;

const StyledComment = styled.div`
  display: flex;
  font-weight: 900;
`;

const StyledEmoji = styled.span`
  font-size: 100%;
  display: flex;
  flex-direction:
  font-weight: 900;
`;

const StyledOutput = styled.div`
  flex-wrap: wrap;
  overflow-wrap: break-word;
  align-content: flex-end;
  width: 90%;
  min-height: 80px;
  max-height: 160px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  border-radius: 10px;
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
  overflow: auto;
`;

const StyledHeadline = styled.div``;

const StyledSpan = styled.div``;

const StyledList = styled.div`

  height: 340px;
  overflow: auto;
  @media (min-width: 414px) {
    height: 570px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 120%;
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

const StyledLabel = styled.div``;

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Navigation() {
  const { data, isLoading, error, mutate } = useSWR("/api/commentary", fetcher);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);
    alert("Comment Submitted!");
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
    event.target.reset();
  }

  return (
    <>
      <StyledHeadlineContainer>
        <h1>Comments</h1>
      </StyledHeadlineContainer>
      <StyledFormular>
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Username</StyledLabel>
          <input
            id="name"
            name="name"
            type="text"
            style={{ width: "150px" }}
            required
          />
          <StyledLabel htmlFor="text"> Comment</StyledLabel>
          <StyledComment>
            <textarea
              id="text"
              name="text"
              style={{ width: "150px" }}
              required
            />
          </StyledComment>

          <StyledButton type="submit">
            <StyledEmoji>💾 Submit</StyledEmoji>
          </StyledButton>
        </form>
      </StyledFormular>
      <StyledList>
        <div>
          {!isLoading &&
            !error &&
            data.map((entry) => {
              return (
                <StyledOutput key={entry._id}>
                  <StyledHeadline>{entry.name}</StyledHeadline>
                  <StyledSpan>{entry.text}</StyledSpan>
                </StyledOutput>
              );
            })}
        </div>
      </StyledList>
      <NavigationWrapper>
        <StyledLink href={"/"}>🏠 Home </StyledLink>
        <StyledLink href={"/navigation"}>📼 Records</StyledLink>
      </NavigationWrapper>
    </>
  );
}
