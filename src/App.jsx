import { useState } from "react";
import chatLogo from "./assets/chat-app-logo-icon-vector.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Object:", result.user); // Debugging line
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      {user ? (
        <Chat user={user} />
      ) : (
        <div className="p-5 text-center">
          <div>
            <img
              src={chatLogo}
              alt="logo"
              width={400}
              height={400}
              className="pr-2"
              style={{ borderRadius: 200 }}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              style={{ marginTop: "50px" }}
              onClick={handleSignIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
