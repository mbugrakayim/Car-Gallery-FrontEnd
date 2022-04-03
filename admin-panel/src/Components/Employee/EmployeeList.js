import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../Services/EmployeeService";
import Employee from "./Employee";
import "./employeelist.css";
import NewEmployee from "./NewEmployee";

function EmployeeList() {
  const [openModal, setOpenModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [openModal2, setOpenModal2] = useState(false);
  const [search , setSearch] = useState();
  const [searchEmployees, setSearchEmployees] = useState();
  useEffect(() => {
    getAllEmploye();
  }, []);
  const getAllEmploye = () => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const searchEmployee = (e) => {
    e.preventDefault();
   const harf = search.split(" ");
   const firstName = harf[0];
   const lastName = harf[1];
   const phoneNo = parseInt(harf[2]) ;
   axios.get(`http://localhost:8080/api/v1/employee/employees/${firstName}/${lastName}/${phoneNo}`).then(res =>{
    setSearchEmployees(res.data)
     console.log(res);
   }).catch(err => {
     console.log(err);
   })
   console.log(lastName);
   console.log(firstName);
  }

  return (
    <div className="employeeList">
      <div className="eListTitle">
        <form className="form-inline">
          <div className="input-group" style={{ position: "static" }}>
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              placeholder="Adı veya Soyadına göre ara"
              aria-describedby="basic-addon1"
              style={{ position: "static" }}
              onChange={e => { setSearch(e.target.value)}}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ zIndex: "0" }}
              onClick={searchEmployee}
            >
              Ara
            </button>
          </div>
        </form>

        <Link
          to="#"
          className="eAddButton"
          style={{ textDecoration: "none" }}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Ekle
        </Link>
        {openModal && <NewEmployee closeModal={setOpenModal} />}
      </div>
      <div className="row eContainer">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Personel Id</th>
              <th>Personel Adı</th>
              <th>Personel Soyadı</th>
              <th>Personel Email </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                    to={{ pathname: `/employees/${employee.id}` }}
                    onClick={() => {
                      setOpenModal2(true);
                    }}
                  >
                    Detay
                  </Link>
                  {openModal2 && <Employee />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
