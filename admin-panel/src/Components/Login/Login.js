

import style from "./my-styles.module.css";


function Login() {
 
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
      <div className={style.login}>
        <input type="text" placeholder="username" name="user"  />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <input type="button" value="Login" />
      </div>
    </>
  );
}

export default Login;
