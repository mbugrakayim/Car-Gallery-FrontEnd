import React, { useState } from "react";
import CustomerService from "../../Services/CustomerService";
import "./newCustomer.css";
import alertify from "alertifyjs";

function NewCustomer({ customerCloseModel }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [drivingLicence, setDrivingLicence] = useState("");
  const [tcNo, setTcNo] = useState("");
 

  const createCustomer = (e) => {
    e.preventDefault();
    const customer = {
      firstName,
      lastName,
      email,
      phoneNo,
      address,
      age,
      drivingLicence,
      tcNo,
    };
    CustomerService.createCustomer(customer)
      .then((res) => {
        alertify.success("Kaydedildi.");
      })
      .catch((err) => {
        alertify.danger("Hatalı işlem.");
        console.log(err);
      });
  };

  return (
    <div className="customer">
      <div className="popup">
        <button onClick={() => customerCloseModel(false)}>
          <i className="fas fa-window-close fa-2x xIcon" />
        </button>
        <div className="userUpdate">
          <span className="userUpdateTitle">Müşteri Ekle</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Adı:</label>
                <input
                  type="text"
                  placeholder="Adı.."
                  name="firstName"
                  value={firstName}
                  className="userUpdateInput"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Soyadı:</label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Soyadı.."
                  className="userUpdateInput"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="admin@boss.com"
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefon Numarası:</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={phoneNo}
                  placeholder="+90 123 456 67"
                  className="userUpdateInput"
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Adres:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  placeholder="Bilgisayar Mühendisi"
                  className="userUpdateInput"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Yaş:</label>
                <input
                  type="text"
                  name="age"
                  value={age}
                  placeholder="6350"
                  className="userUpdateInput"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>TC No:</label>
                <input
                  type="text"
                  name="prize"
                  value={tcNo}
                  placeholder="TC No"
                  className="userUpdateInput"
                  onChange={(e) => setTcNo(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Sürücü Belgesi:</label>
                <input
                  type="text"
                  name="address"
                  value={drivingLicence}
                  placeholder="YOZGAT | TURKEY"
                  className="userUpdateInput"
                  onChange={(e) => setDrivingLicence(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton" onClick={createCustomer}>
                Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCustomer;
