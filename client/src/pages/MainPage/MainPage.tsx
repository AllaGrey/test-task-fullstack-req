import { FC, useState } from "react";
import { RequestForm } from "../../components/RequestForm";
import { RequestList } from "../../components/RequestList";
import { Container } from "./MainPage.styled";
import { sendAllRequests } from "../../utils";

const MainPage: FC = () => {
  const [requests, setRequests] = useState<string[]>([]);
  const [isLoadingRequest, setIsLoadingRequest] = useState<boolean>(false);

  const handleClick = async (value: string) => {
    console.log("Form submitted:", value);

    try {
      setIsLoadingRequest(true);
      await sendAllRequests(Number(value), (newRequest: string) => {
        setRequests((prevRequests) => [...prevRequests, newRequest]);
      });
    } catch (error) {
      console.error("Error during requests:", error);
    } finally {
      setIsLoadingRequest(false);
    }
  };

  return (
    <Container>
      <RequestForm onclick={handleClick} isLoadingRequest={isLoadingRequest} />
      <RequestList requests={requests} />
    </Container>
  );
};

export default MainPage;
