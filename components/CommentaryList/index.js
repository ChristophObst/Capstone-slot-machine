import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { StyledList } from "./CommentaryList.styled";

export default function CommentaryList() {
  const router = useRouter();
  const { data } = useSWR("/api/commentaries");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((commentary) => (
        <li key={commentary._id}>
          <StyledButton
            type="button"
            onClick={() => router.push(`/${commentary._id}`)}
          >
            {commentary.name}
          </StyledButton>
        </li>
      ))}
    </StyledList>
  );
}
