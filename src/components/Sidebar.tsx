import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar__items">
     
        {location.pathname !== "/login" ? (
             <div className="sidebar__items">
             <Link
             to="/dashboard"
             className={location.pathname === "/dashboard" ? "sidebar_active" : ""}
           >
             Dashboard
           </Link>
           <Link
             to="/tabs"
             className={
               location.pathname.includes("/tabs") ? "sidebar_active" : ""
             }
           >
             Tabs Demo
           </Link>
   
           <Link
             to="/settings"
             className={location.pathname === "/settings" ? "sidebar_active" : ""}
           >
             Settings
           </Link>
          <button
            onClick={() => {
              localStorage.setItem("user", "");
              navigate("/login");
            }}
          >
            Logout
          </button>
          </div >
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "sidebar_active" : ""}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
