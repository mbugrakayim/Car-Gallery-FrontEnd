import { useRef, useState } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import isEmail from "validator/lib/isEmail";
import AuthService from "../Services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role={"alert"}>
        Bu alan gereklidir!
      </div>
    );
  }
};

const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role={"alert"}>
        Lütfen geçerli bir E-posta Adresi giriniz.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role={"alert"}>
        Kullanıcı Adı 3 ila 20 karakter arasında olmalıdır.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role={"alert"}>
        Şifre 6 ila 40 karakter arasında olmalıdır.
      </div>
    );
  }
};
function Register() {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [employeId, setEmployeId] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, employeId, password)
        .then((res) => {
          setMessage("Kayıt Oluşturuldu.");
          setSuccessful(true);
        })
        .catch((error) => {
          setMessage("Kayıt Oluşturulamadı.");
          setSuccessful(false);
        });
    }
  };
  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  validations={[required, vusername]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Posta</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  validations={[required, vemail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Şifre</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeId">Personel Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="employeId"
                  value={employeId}
                  onChange={(e) => setEmployeId(e.target.value)}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">
                  Kaydı Tamamla
                </button>
              </div>
            </div>
          )}
          {message && (
              <div className="form-group">
                  <div className={successful ? "alert alert-succes" :"alert alert-danger"} role="alert">
                      {message}
                  </div>
              </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
}
export default Register;
