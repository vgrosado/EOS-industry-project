import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";

const WebsiteChatbot = () => {
  const [messages, setMessages] = useState([]);

  const messageHandler = (newMessage) => {
    const messageHandler = (newMessage) => {
      const userMessage = newMessage.message.toLowerCase();

      // Check user's message and provide appropriate responses
      if (userMessage.includes("book")) {
        const response = {
          id: "2",
          text: "Welcome to our flight booking! Please provide your departure and destination cities.",
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      } else if (
        userMessage.includes("departure") &&
        userMessage.includes("destination")
      ) {
        const response = {
          id: "3",
          text: "Great! When do you want to depart and return?",
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      } else if (userMessage.includes("dates")) {
        const response = {
          id: "4",
          text: "Perfect! How many travelers are flying with you?",
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      } else if (userMessage.includes("travelers")) {
        const response = {
          id: "5",
          text: "Awesome! Here are some available flights for your selected dates.",
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      } else {
        const response = {
          id: "6",
          text: "I'm here to help you with flight booking. Feel free to ask any questions!",
        };
        setMessages((prevMessages) => [...prevMessages, response]);
      }
    };
  };

  return (
    <div className="chatbot-container">
      <Chatbot config={{}} messageHandler={messageHandler} />
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteChatbot;
