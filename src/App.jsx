import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import MoviesDetailsPage from "./pages/MoviesDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <MoviesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <ProtectedRoute>
              <MoviesDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
