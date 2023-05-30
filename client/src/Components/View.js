import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/user/getAll");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const deleteData = (id) => {
    console.log(id);
    if (window.confirm("want to delete?")) {
      axios.delete(`http://localhost:4000/user/delete_User/${id}`);
      setTimeout(() => {
        loadData();
      }, 500);
    }
  };
  return (
    <>
      <div className="container">
        <div className="leftSide">
          <Link to="/register" className="btn btn-primary ">
            Add Data
          </Link>
        </div>

        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Work</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.mobile}</td>
                  <td>{item.work}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link to={`/edit/${item._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteData(item._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
