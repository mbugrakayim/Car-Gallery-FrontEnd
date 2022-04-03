import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar({ closeModal }) {
  return (
    <div className="sidebar">
      <button onClick={() => closeModal(false)} className="btn">
        <i className="fas fa-window-close fa-2x xIcon" />
      </button>

      <div className="sWrapper">
        <div className="sMenu">
          <h3 className="sTitle">Gösterge Paneli</h3>
          <ul className="sList">
            <li className="sListItem">
              <Link to={"/dashboard"} className="link">
                <i className="fas fa-home  Icon" />
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="sMenu">
          <h3 className="sTitle">Araçlar</h3>
          <ul className="sList">
            <li className="sListItem">
              <Link to={"/newUser"} className="link">
                <i className="fas fa-car  Icon"></i>
                Araç Listesi
              </Link>
            </li>
            <li className="sListItem">
              {" "}
              <Link className="link" to={"/newcar"}>
                <i className="fas fa-plus Icon"></i>
                Araç Ekle
              </Link>
            </li>
            <li className="sListItem">
              <i className="fas fa-oil-can Icon"></i>
              Araç Bakımları
            </li>
            <li className="sListItem">
              <i className="fas fa-clipboard  Icon"></i>
              Araç Cezaları
            </li>
          </ul>
        </div>
        <div className="sMenu">
          <h3 className="sTitle">Kiralama İşlemleri</h3>
          <ul className="sList">
            <li className="sListItem">
              <i className="fa fa-hourglass  Icon"></i>
              Teslim Süreci
            </li>
            <li className="sListItem">
              <i className="fa fa-file-contract  Icon"></i>
              Sözleşme
            </li>
            <li className="sListItem">
              <i className="fas fa-calendar-alt  Icon"></i>
              Rezervasyon
            </li>
            <li className="sListItem">
              <i className="fa fa-history  Icon"></i>
              Geçmiş
            </li>
          </ul>
        </div>
        <div className="sMenu">
          <h3 className="sTitle">Personel</h3>
          <ul className="sList">
            <li className="sListItem">
              <Link className="link" to={"/employees"}>
                <i className="fa fa-users  Icon"></i>
                Personel Listesi{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="sMenu">
          <h3 className="sTitle">Müşteri</h3>
          <ul className="sList">
            <li className="sListItem">
              <Link className="link" to={"/customerlist"}>
                <i className="fa fa-users  Icon"></i>
                Müşteri Listesi{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
