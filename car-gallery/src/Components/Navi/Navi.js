import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomerLogin from "../Register/CustomerLogin";
import styles from "./Navi.module.css";

function Navi() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-black fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to={"/"}>
              <span className={styles.logo}>Mustafa</span>
            </Link>
            
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className="active">
                <Link className="navbar-brand" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="active">
                <a className="navbar-brand" href="#register">
                  Register
                </a>
              </li>
              <li className="active">
                <a
                  href="#login"
                  className="navbar-brand"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Login
                </a>
                {openModal && <CustomerLogin closeModal={setOpenModal} />}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
