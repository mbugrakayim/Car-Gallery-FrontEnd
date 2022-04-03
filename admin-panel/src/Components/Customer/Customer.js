import alertify from "alertifyjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
import "./customer.css";

function Customer(customerCloseModel) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [drivingLicence, setDrivingLicence] = useState("");
  const [tcNo, setTcNo] = useState("");
  const { id } = useParams();

  const close = () => {
    customerCloseModel(false);
  };

  const findByIdCustomer = (e) => {
    CustomerService.getCustomerById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhoneNo(res.data.phoneNo);
        setAddress(res.data.address);
        setAge(res.data.age);
        setDrivingLicence(res.data.drivingLicence);
        setTcNo(res.data.tcNo);
      })
      .catch((err) => {
        console.log(err);
        alertify.danger("Hatalı işlem.");
      });
  };

  useEffect(
    (e) => {
      findByIdCustomer();
    },
    [id]
  );

  return (
    <div className="emp">
      <div className="popup">
        <button onClick={close}>
          <i className="fas fa-window-close fa-2x xIcon" />
        </button>

        <div className="userTitleContainer">
          <h1 className="userTitle">Personel</h1>
          <Link to="/newUser">
            <button className="userAddButton">Sil</button>
          </Link>
        </div>
        <div className="container" style={{ color: "black" }}>
          <div className="userShow">
            <div className="userShowTop">
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {firstName} {lastName}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <br />
              <span className="userShowTitle">İletişim Detayları</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{phoneNo}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{email}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{address}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{age}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{drivingLicence}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">{tcNo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
