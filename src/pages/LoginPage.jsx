import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    console.log("Username:", username);
    navigate("/movies");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Welcomee {username}!!</h1>
        <p>Enter your name To Log-In :</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
