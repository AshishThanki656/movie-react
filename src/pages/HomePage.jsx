import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome Stranger</h1>

      <button onClick={() => navigate("/loginpage")}>Go To Login Page</button>
    </div>
  );
}

export default HomePage;
