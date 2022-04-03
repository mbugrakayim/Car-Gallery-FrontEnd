import React from "react";
import styles from "./Home.module.css";
import video1 from "../../images/video/porshe.mp4";
import CustomerRegister from "../Register/CustomerRegister";

function Home() {
  return (
    <div>
      <div className={styles.intro}>
        <div className="video"></div>
        <video
          id="background-video"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <section id="section-about" className={styles.sectionPadding}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "LEVIBRUSH",
                  fontSize: "500%",
                }}
                className="logoTitle"
              >
                Araba Galerisi
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p
                style={{
                  fontSize: "125%",
                  textAlign: "center",
                  color:"#41454d",
                }}
              >
                <br />
                Oto Galeri Uygulamasına Hoşgeldiniz, bu uygulama tamamen
                ücretsizdir.
                <br />
                <br />
                Bu proje,{" "}
                <a href="https://www.linkedin.com/in/furkankayim/">
                  Furkan Kayim
                </a>{" "}
                Tarafından verilen "Full Stack Developer" için tekrar ve
                geliştirme projesi amacıyla oluşturulmuştur. Proje, Araba Galeri
                sistemi olup, Araç kiralama, araç rezervasyonu ve Admin paneli
                özelliklerine sahiptir. Admin panelinde, araç ekleme/çıkarma,
                rezervasyon yönetimi, araç detayları, kiralık araç yönetimi,
                personel yönetimi, kullanıcı yetkilendirme, muhasebe detayları
                gibi özelliklere sahiptir.
                <br />
                <br />
                Araba Galeri uygulamasına{" "}
                <a href="https://github.com/mbugrakayim">github</a> üzerinden
                ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section id="register">
        <div className="container">
          <CustomerRegister />
          <div className="row">
            <div className="col-sm-12">
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
