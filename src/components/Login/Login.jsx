import React, { useState } from "react";
import "./login.css";

const Login = ({ login, isLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPasswor] = useState("");

  const params = {
    username: userName,
    password: password,
  };
console.log(params);

  return (
    <>
      <div className=" login">
        <div className="row ">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">ADMIN PANEL</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control"
                  value={password}
                  onChange={(e)=>setPasswor(e.target.value)}
                  />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary" onClick={()=>login(params)}>
                      LOGIN
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
