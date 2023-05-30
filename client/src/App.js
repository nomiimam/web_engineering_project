import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Register from "./Components/Register";
import View from "./Components/View";
import Edit from "./Components/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <center>
        <h1 style={{ margin: "10px" }}>CRUD MERN Project</h1>
      </center>

      <hr />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
