import React from "react";
import "./car.css";

function Car() {
  return (
    <div className="car">
      <div className="carItem">
        <span className="carTitle">Kiradaki Araç</span>
        <div className="carNumber">
          <span className="number">3</span>
        </div>
      </div>
      <div className="carItem">
        <span className="carTitle">Boş Araç</span>
        <div className="carNumber">
          <span className="number">1</span>
        </div>
      </div>
      <div className="carItem">
        <span className="carTitle">Bugün Teslim</span>
        <div className="carNumber">
          <span className="number">0</span>
        </div>
      </div>
    </div>
  );
}

export default Car;
