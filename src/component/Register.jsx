import React from "react";
import styles from "./Modules/Register.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.register_container}>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div className="input-group mb-3" style={{ marginTop: "60px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-user fa-lg" aria-hidden="true"></i>
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
          </span>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your address"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-home fa-lg" aria-hidden="true"></i>
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
          </span>
        </div>

        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Repeat password"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
          </span>
        </div>

        <div style={{ marginTop: "30px" }}>
          <button className="btn btn-outline-dark me-4" style={{ width: 150 }}>
            <span>Submit</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
