import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../../Services/CustomerService";
import Customer from "./Customer";
import "./customerList.css"
import NewCustomer from "./NewCustomer";

function CustomerList() {
  const [customerOpenModal , setcustomerOpenModel] = useState(false);
  const [customer , setCustomer] = useState([]);
  
  useEffect(() => {
    getAllCustomer();
  } , [])
  const getAllCustomer = () =>{
    CustomerService.getCustomers().then((res) => {
      setCustomer(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="customerList">
      <div className="cListTitle">
        <form className="form-inline">
          <div className="input-group" style={{ position: "static" }}>
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              placeholder="Ara"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ position: "static" }}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{ zIndex: "0" }}
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
            setcustomerOpenModel(true);
          }}
        >
          Create
        </Link>
        {customerOpenModal && <NewCustomer customerCloseModel={setcustomerOpenModel} />}
      </div>
      <div className="row eContainer">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Müşteri Id</th>
              <th>Müşteri Adı</th>
              <th>Müşteri Soyadı</th>
              <th>Müşteri Email </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    style={{ marginLeft: "10px" }}
                    to={`/customerlist/${customer.id}`} 
                    onClick={() => {
                      setcustomerOpenModel(true);
                    }}
                  >
                    View
                  </Link>

                  {customerOpenModal && <Customer customerCloseModel={setcustomerOpenModel} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
