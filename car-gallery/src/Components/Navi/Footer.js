import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{ padding: "20px 0", background: "black" }}
      >
        <div style={{ position: "fixed", bottom: "30px", right: "30px" }}>
          <a href="https://github.com/mbugrakayim">
            <i className="fab fa-github fa-3x" />
          </a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <h3 style={{ color: "white" }}>Rezervasyon İşlemleri</h3>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <Link to={"/"}>Anasayfa</Link>
                </li>
                <li>
                  <Link to={"/"}>Araç Kirala</Link>
                </li>
                <li>
                  <Link to={"/"}>Rezervasyon Sorgula</Link>
                </li>
                <li>
                  <Link to={"/"}>Üye Giriş/Kayıt</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <h3 style={{ color: "white" }}>Hakkımızda</h3>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <Link to={"/"}>Hakkımzda</Link>
                </li>
                <li>
                  <Link to={"/"}>Kiralama Koşulları</Link>
                </li>
                <li>
                  <Link to={"/"}>Duyurular</Link>
                </li>
                <li>
                  <Link to={"/"}>Bize Ulaşın</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <h3 style={{ color: "white" }}>Sosyal Medya</h3>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <a href="https://www.linkedin.com/in/mbugrakayim/">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mbugrakayim">
                    <i className="fab fa-github fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mbugrakayim">
                    <i className="fab fa-youtube fa-2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mbugrakayim">
                    <i className="fab fa-twitter fa-2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <div>
            <p style={{ color: "white" }}>@2022 Araba Galerisi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
