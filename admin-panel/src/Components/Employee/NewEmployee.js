import axios from "axios";
import React, { useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
import "./employee.css";
import alertify from "alertifyjs";

function NewEmployee({ closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [prize, setPrize] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(undefined);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const createEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      title,
      email,
      phoneNo,
      salary,
      prize,
      address,
    };
    const formData = new FormData();
    formData.append("file", file);
    EmployeeService.createEmployee(employee)
      .then((res) => {
        if (file) {
          axios({
            method: "put",
            url: `http://localhost:8080/api/v1/employee/create/${res.data.id}`,
            data: formData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
        }
      })
      .then((res) => {
        alertify.success("Kaydedildi.");
      })
      .catch(() => {
        alertify.danger("Hatalı işlem");
      });
  };
  return (
    <div className="emp">
      <div className="popup">
        <button onClick={() => closeModal(false)}>
          <i className="fas fa-window-close fa-2x xIcon" />
        </button>
        <div className="userUpdate">
          <span className="userUpdateTitle">Personel Ekle</span>
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
                <label>Ünvan</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Bilgisayar Mühendisi"
                  className="userUpdateInput"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Maaş</label>
                <input
                  type="text"
                  name="salary"
                  value={salary}
                  placeholder="6350"
                  className="userUpdateInput"
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Prim</label>
                <input
                  type="text"
                  name="prize"
                  value={prize}
                  placeholder="Gönlünden Ne koparsa"
                  className="userUpdateInput"
                  onChange={(e) => setPrize(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Adres</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  placeholder="YOZGAT | TURKEY"
                  className="userUpdateInput"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={previewImage} alt="" />
                <label htmlFor="file">
                  <i className="fas fa-upload userUpdateIcon" />
                </label>
                <input
                  formEncType="multipart/form-data"
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={selectFile}
                />
              </div>
              <button className="userUpdateButton" onClick={createEmployee}>
                Ekle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewEmployee;
