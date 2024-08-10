import { FC } from "react";
import { RequestForm } from "../../components/RequestForm";
import { RequestList } from "../../components/RequestList";
import { Container } from "./MainPage.styled";

const MainPage: FC = () => {
  const handleClick = (value: string) => {
    console.log("Form submitted:", value);
  };

  return (
    <Container>
      <RequestForm onclick={handleClick} />
      <RequestList />
    </Container>
  );
};

export default MainPage;
