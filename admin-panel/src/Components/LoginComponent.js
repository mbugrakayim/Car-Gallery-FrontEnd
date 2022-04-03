import React, { useState, useRef } from "react";
import style from "./Login/my-styles.module.css";
import AuthService from "../Services/AuthService";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bu Alan Gereklidir!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.body}></div>
      <div className={style.grand}></div>
      <div className={style.header}>
        <div>
          Car<span>Gallery</span>
        </div>
      </div>
      <br />
      <Form onSubmit={handleLogin} ref={form}>
        <div className={style.login}>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            validations={[required]}
            placeholder="Kullanıcı Adı"
          />
          <br />

          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            validations={[required]}
            placeholder="Şifre"
          />

          <button className="btn btn-primary btn-block" disabled={loading}>
            {loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </div>
      </Form>
    </>
  );
};

export default Login;
