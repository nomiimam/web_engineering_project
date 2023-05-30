import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const Edit = () => {
  const [inputs, setInputs] = useState({});
  const getInput = (data) => {
    const { name, value } = data.target;
    const input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  const { id } = useParams();
  const history = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:4000/user/get_User/${id}`).then((response) =>
      setInputs({
        ...response.data,
      })
    );
  }, [id]);

  const submitData = () => {
    if (!inputs.name || !inputs.email) {
      alert("Fill all field");
    } else {
      axios
        .patch(`http://localhost:4000/user/update/${id}`, {
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
                value={inputs.name || ""}
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
                value={inputs.email}
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
                value={inputs.age}
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
                value={inputs.mobile}
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
                value={inputs.work}
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
                value={inputs.address}
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
