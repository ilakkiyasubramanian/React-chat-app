import React from "react";

export default function ChatMessage({ text, name, logo, email, user }) {
  // Debug logs
  console.log("Message Props:", { text, name, logo, email, user });

  // Fallback logo in case the user's logo is missing or invalid
  const defaultLogo = "https://via.placeholder.com/100";

  return (
    <div>
      {user.email === email ? (
        <div className="d-flex  right-content">
          <div className="message-name">{name || "You"}</div>
          <span className="message-right">
            <span className="message-text">{text}</span>
            <img
              src={logo || defaultLogo}
              alt={`${name || "Your"} logo`}
              className="logo-icon"
              onError={(e) => {
                e.target.src = defaultLogo;
              }}
            />
          </span>
        </div>
      ) : (
        <div className="d-flex  left-content">
          <div className="message-name">{name || "Unknown User"}</div>
          <span className="message-left">
            <img
              src={logo || defaultLogo}
              alt={`${name}'s logo`}
              className="logo-icon"
              onError={(e) => {
                e.target.src = defaultLogo;
              }}
            />

            <div className="message-text">{text}</div>
          </span>
        </div>
      )}
    </div>
  );
}
