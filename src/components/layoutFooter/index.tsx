import { Row } from "antd";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Layoutfooter = () => {
  const steps = [
    {
      id: "0",
      message: "Hey Welcome to BBJ, how can I help you?",
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message: " Sure, Will Guide you with Assistance",
      trigger: "3",
    },
    {
      id: "3",
      user: true,
      trigger: "4",
    },
    {
      id: "4",
      message: "Thanks",
      end: true,
    },
  ];

  const theme = {
    background: "#ffffff",
    headerBgColor: "#2A7DBC",
    headerFontSize: "20px",
    botBubbleColor: "#2A7DBC",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#c0c0c0",
    userFontColor: "black",
  };

  const config = {
    floating: true,
  };
  return (
    <Row className="justify-end">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          {...config}
          className="absolute bottom-0 right-0 "
        />
      </ThemeProvider>
    </Row>
  );
};

export default Layoutfooter;
