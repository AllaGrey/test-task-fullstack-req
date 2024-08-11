import { FC, useState } from "react";
import { RequestForm } from "../../components/RequestForm";
import { RequestList } from "../../components/RequestList";
import { Container } from "./MainPage.styled";
import { sendAllRequests } from "../../utils";

const MainPage: FC = () => {
  const [requests, setRequests] = useState<string[]>([]);

  const handleClick = async (value: string) => {
    console.log("Form submitted:", value);
    await sendAllRequests(Number(value), (newRequest: string) => {
      setRequests((prevRequests) => [...prevRequests, newRequest]);
    });
  };

  return (
    <Container>
      <RequestForm onclick={handleClick} />
      <RequestList requests={requests} />
    </Container>
  );
};

export default MainPage;
