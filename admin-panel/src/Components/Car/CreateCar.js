import React, { useState } from "react";

import CarService from "../../Services/CarService";
import UploadFiles from "../deneme/UploadFiles";
import UploadImages from "../deneme/UploadImages";


import "./createCar.css";

function CreateCar() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [plaka, setPlaka] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [gearBox, setGeatBox] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [image, setImage] = useState([]);
  const [insuranceDate, setInsuranceDate] = useState("");


  const handleChange = (e) => {
    let img = e.target.files[0];
    setImage(img);
  };
  const saveImg = e =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file" , image);
    console.log(formData);
    CarService.createCarImage(formData).then(() => {
      alert("Kayıt Başarılı")
    }).catch(() =>{
      alert("Hatalı Kayıt")
    })
  }

  const saveCar = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("file",image);
    // formData.append("brand",brand);
    // formData.append("model",model);
    // formData.append("plaka",plaka);
    // formData.append("fuelType",fuelType);
    // formData.append("gearBox",gearBox);
    // formData.append("bodyType",bodyType);
    // formData.append("date",insuranceDate);
    const car = {brand ,model , plaka, fuelType , gearBox ,bodyType ,insuranceDate}


    
    console.log(car);
    CarService.createCar(car)
      .then(() => {
        alert("Araç Kaydedildi.");
      })
      .catch((err) => {
        alert("Hatalı Kayıt");
      });
  };
  return (
    <div className="create">
      <div className="carForm">
        <h1 className="cTitle">Araç Ekle</h1>
        <form className="newCar">
          <div className="newCarItem">
            <label>Marka</label>
            <input
              type="text"
              name="brand"
             
             
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Model</label>
            <input
              type="text"
              name="model"
             
             
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Araç Plakası</label>
            <input
              type="text"
              name="plaka"
             
              onChange={(e) => setPlaka(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Yakıt Tipi</label>
            <input
              type="text"
              name="fuelType"
              
              onChange={(e) => setFuelType(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Vites Tipi</label>
            <input
              type="text"
              name="gearBox"
             
              onChange={(e) => setGeatBox(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Araç Sınıfı</label>
            <input
              type="text"
              name="bodyType"
              
              onChange={(e) => setBodyType(e.target.value)}
            />
          </div>
          <div className="newCarItem">
            <label>Sigorta Bitiş</label>
            <input
              type="date"
              name="date"
             
              onChange={(e) => setInsuranceDate(e.target.value)}
            />
          </div>
          <div className="newCarImg">
            <label>Resim Ekle</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              multiple
            />
            <button
              className="newCarButton"
              type="submit"
              onClick={(e) => saveCar(e)}
            >
              Kaydet
            </button>
            <button
              className="newCarButton"
              type="submit"
              onClick={(e) => saveImg(e)}
            >
              Resim
            </button>
          </div>
        </form>
        <br />
        <hr />
        <br />
        <div style={{margin : "20px 0"}}><UploadImages /></div>
        <br />
        <hr />
        <br />
        <div style={{margin : "20px 0"}}><UploadFiles /></div>
      </div>
    </div>
  );
}

export default CreateCar;
