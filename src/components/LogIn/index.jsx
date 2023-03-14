import React, { useState } from "react";
import Header from "../Header/Header";
import Login from "./Login";
import Register from "./Register";

function LogRes(props) {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }


  return (
    <>
    <div className="LogRes">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
      <Header />
      <Login />
      <Register />
    </>
  );
}

export default LogRes;
