import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }
  return (
    <div className="dashboard-container">
      <h2>Welcome to your Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
