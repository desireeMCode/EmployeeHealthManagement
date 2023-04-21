import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/insurances.css";

function ViewInsurances() {
  const [insuranceList, setInsuranceList] = useState([]);

  const loadInsurances = async () => {
    const response = await axios.get("http://localhost:3001/viewinsurances");
    setInsuranceList(response.data);
  };

  useEffect(() => {
    loadInsurances();
  }, []);

  const deleteInsurance = (id) => {
    if (window.confirm("Are you sure you want to delete this Insurance ?")) {
      axios.delete(`http://localhost:3001/remove/${id}`);
      toast.success("Insurance Deleted Successfully");
      setTimeout(() => loadInsurances(), 500);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <ToastContainer />
      <Link to="/insertinsurance">
        <button className="btn btn-insurance">Add Insurance</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>Insurance Name</th>
            <th style={{ textAlign: "center" }}>Insurance Premium</th>
            <th style={{ textAlign: "center" }}>Insurance Age Limit </th>
          </tr>
        </thead>
        <tbody>
          {insuranceList.map((item, index) => {
            return (
              <tr key={item.insuranceID}>
                <th scope="row">{index + 1}</th>
                <td>{item.insurance_name}</td>
                <td>{item.insurance_premium}</td>
                <td>{item.insurance_age_limit}</td>
                <td>
                  <Link to={`/update/${item.insuranceID}`}>
                    <button className="btn btn-edit"> Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteInsurance(item.insuranceID)}
                  >
                    {" "}
                    Delete
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ViewInsurances;
