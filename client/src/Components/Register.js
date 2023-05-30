import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({});

  const getInput = (data) => {
    const { name, value } = data.target;
    const input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };

  const submitData = () => {
    console.log(inputs);
    if (!inputs.name || !inputs.email) {
      alert("Fill all field");
    } else {
      axios
        .post("http://localhost:4000/user", {
          name: inputs.name,
          email: inputs.email,
          age: inputs.age,
          mobile: inputs.mobile,
          work: inputs.work,
          address: inputs.address,
        })
        .then(() => {
          setTimeout(() => {
            history("/");
          }, 500);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="leftSide2">
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>

        <hr />
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={getInput}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={getInput}
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                name="age"
                onChange={getInput}
                placeholder="Enter Age"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                onChange={getInput}
                placeholder="Enter Mobile"
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <label htmlFor="work">Work</label>
              <input
                type="text"
                className="form-control"
                name="work"
                onChange={getInput}
                placeholder="Enter Work"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                onChange={getInput}
                placeholder="Enter Address"
                required
              />
            </div>
          </div>
          <br />
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={submitData}
            >
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
