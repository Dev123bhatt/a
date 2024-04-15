import Table from "./componets/Table";
import { useNavigate } from "react-router-dom";
import React from "react";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Table />
        <h3 onClick={() => navigate("/weatherDetail")}>weather detail</h3>
      </div>
    </>
  );
};

export default Main;
