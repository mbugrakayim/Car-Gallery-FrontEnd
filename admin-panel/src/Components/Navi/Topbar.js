import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import "./topbar.css";
import Sidebar from "./Sidebar";

function Topbar() {
  const [openModal, setOpenModal] = useState(false);
  const [showAdminBoard, setAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showEmpBoard, setShowEmpBoard] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowEmpBoard(user.roles.includes("ROLE_EMPLOYEE"));
      setAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setCurrentUser(AuthService.getCurrentUser());
    }
  }, []);
  const logout = () => {
    AuthService.logout();
    setShowEmpBoard(false);
    setAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="topbar">
      <div className="tWrapper">
        <div className="tLeft">
          <Link
            to="#"
            className="navbar-brand"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {" "}
            <span className="logo">Boss</span>
          </Link>

          {openModal && <Sidebar closeModal={setOpenModal} />}
        </div>
        <div className="tRight">
          <div className="Icons">
            <i className="far fa-bell fa-xs" />
            <span className="topIcon">2</span>
          </div>
          <div className="Icons">
            <i className="fas fa-cog fa-xs"></i>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vIfQPKsTMg4bKqoezWhZFBd8CWQIX4ie4g&usqp=CAU"
            className="avatar"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
