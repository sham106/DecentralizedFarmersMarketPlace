import { useState } from "react";
import { Box, Input, Button, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import ContactPage from "./components/Contact";

const Chat = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: message, sender: "admin" },
      ]);
      setMessage("");
    }
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Box
            p={4}
            border="1px solid #ccc"
            borderRadius="md"
            height="300px"
            overflowY="auto"
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                style={{
                  textAlign: chat.sender === "admin" ? "right" : "left",
                }}
              >
                {chat.text}
              </div>
            ))}
          </Box>
          <Input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button colorScheme="green" onClick={handleSendMessage}>
            Send
          </Button>
        </VStack>
      </Box>
      <Box>
        <ContactPage />
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Chat;
