import alertify from "alertifyjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../Services/EmployeeService";
import "./employee.css";

function Employee() {
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [prize, setPrize] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [newFile, setNewFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

  const onCloseModal = (e) => {
    navigate(-1);
  };

  const selectFile = (e) => {
    setNewFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const getEmployee = () => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setTitle(res.data.title);
        setSalary(res.data.salary);
        setPrize(res.data.prize);
        setPhoneNo(res.data.phoneNo);
        setAddress(res.data.address);
        setFile(`data:image/*;base64,${res.data.images}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getEmployee();
  }, [id]);

  const updateEmployee = (e) => {
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
      id,
    };
    const formData = new FormData();
    formData.append("file", newFile);
    EmployeeService.updateEmployee(employee, id)
      .then((res) => {
        if (newFile) {
          axios({
            method: "put",
            url: `http://localhost:8080/api/v1/employee/create/${res.data.id}`,
            data: formData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });
        }
      })
      .then(() => {
        alertify.success("Kaydedildi.");
        navigate("/employees");
      })
      .catch((err) => {
        alertify.warning("Hatalı işlem");
      });
  };

  const deleteEmploye = () => {
    EmployeeService.deleteEmploye(id)
      .then((res) => {
        alertify.success("Silindi.");
        navigate("/employees");
      })
      .catch((err) => {
        alertify.warning("Hatalı işlem");
      });
  };

  return (
    <div className="emp">
      <div className="popup">
        <button onClick={onCloseModal}>
          <i className="fas fa-window-close fa-2x xIcon" />
        </button>

        <div className="userTitleContainer">
          <h1 className="userTitle" style={{ color: "black" }}>
            Personel
          </h1>

          <button className="userAddButton" onClick={deleteEmploye}>
            Sil
          </button>
        </div>
        <div className="container" style={{ color: "black" }}>
          <div className="userShow">
            <div className="userShowTop">
              <img src={file} alt="" className="userShowImg" />

              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {firstName} {lastName}
                </span>
                <span className="userShowUserTitle">{title}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <br />
              <span className="userShowTitle">İletişim Detayları</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">
                  Telefon Numarası: {phoneNo}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Mail: {email}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Adres: {address}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Maaş: {salary}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Prim: {prize}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Güncelle</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Adı:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName == null ? "" : firstName}
                    className="userUpdateInput form-control"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Soyadı:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName == null ? "" : lastName}
                    className="userUpdateInput"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email == null ? "" : email}
                    className="userUpdateInput "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Telefon Numarası:</label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={phoneNo == null ? "" : phoneNo}
                    className="userUpdateInput "
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Ünvan</label>
                  <input
                    type="text"
                    name="title"
                    value={title == null ? "" : title}
                    className="userUpdateInput "
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Maaş</label>
                  <input
                    type="text"
                    name="salary"
                    value={salary == null ? "" : salary}
                    className="userUpdateInput "
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Prim</label>
                  <input
                    type="text"
                    name="prize"
                    value={prize == null ? "" : prize}
                    className="userUpdateInput "
                    onChange={(e) => setPrize(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Adres</label>
                  <input
                    type="text"
                    name="address"
                    value={address == null ? "" : address}
                    className="userUpdateInput "
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
                <button className="userUpdateButton" onClick={updateEmployee}>
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
