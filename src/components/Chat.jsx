import React, { useEffect, useState, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesRef = collection(db, "messages");
  const messagesEndRef = useRef(null); // Create a ref to scroll to the end

  const handleSubmit = async () => {
    const date = new Date();
    await addDoc(messagesRef, {
      text,
      email: user.email,
      logo: user.photoURL,
      name: user.displayName || "Anonymous",
      date,
    });
    setText("");
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesRef, (querySnapshot) => {
      const newMessages = querySnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.date - b.date);

      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    // Scroll to the last message after each update
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Only runs when messages change

  return (
    <div>
      <div className="justify-content-center">
        <h2 className="chat-title">Chat App</h2>
      </div>
      <div className="row mt-4">
        <div className="col-xl-4 col-lg-4 col-sm-3 col-2"></div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-8 chat-message">
          {/* Scrollable messages */}
          <div className="message-container">
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} user={user} />
            ))}
            {/* Reference for scrolling */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="message-input">
            <input
              type="text"
              className="form-control custom-border"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="send-btn ms-2" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
      <div id="copyright" className="mt-3 text-center">
        All Copyrights are reserved 2024
      </div>
    </div>
  );
}
