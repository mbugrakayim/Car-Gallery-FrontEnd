
import { useState } from "react";
import CustomerService from "../../Services/CustomerService";
import "./Modal.css";

function CustomerLogin({ closeModal }) {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const loginCustomer=(e)=>{
    e.preventDefault();
    const customerLogin ={email,password};
    CustomerService.login(customerLogin).then(()=>{
      alert("Welcome")
    }).catch(error=>{
      alert("Hatalı giriş")
    })
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h4>Oto Galeri'de Oturum Açın</h4>
        </div>
        <div className="body">
          <form>
            <div className="form-group input-group">
              <span className="loginIcon">
                <i className="fa fa-envelope" />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group input-group">
              <span className="loginIcon">
                <i className="fa fa-key" />
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Şifre"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button onClick={(e)=>loginCustomer(e) }>Login</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;
