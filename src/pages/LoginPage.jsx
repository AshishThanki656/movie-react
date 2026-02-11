import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("admin", username);
    console.log("Username:", username);
    navigate("/MoviesPage");
  };

  return (
    <div>
      <h1> Welcomee!! {username}</h1>
      <p>Enter your name To Log-In :</p>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
