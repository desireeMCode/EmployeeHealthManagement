import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/employees.css"


function ViewEmployees() {
  const [employeeList, setEmployeeList] = useState([]);

  const loadEmployees = async () => {
    const response = await axios.get("http://localhost:3001/viewemployees");
    setEmployeeList(response.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const removeEmployee = (id) => {
    if (window.confirm("Are you sure you want to remove this employee ?")) {
      axios.delete(`http://localhost:3001/removeemp/${id}`);
      toast.success("Employee Record Successfully Removed");
      setTimeout(() => loadEmployees(), 500);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <ToastContainer />
      <Link to="/insertemployee">
        <button className="btn btn-employee">Add New Employee</button>
      </Link>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}></th>
            <th style={{ textAlign: "center" }}>Employee Name</th>
            <th style={{ textAlign: "center" }}>Employee Username</th>
            <th style={{ textAlign: "center" }}>Employee Insurance </th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((item, index) => {
            return (
              <tr key={item.employeeID}>
                <th scope="row">{index + 1}</th>
                <td>{item.employee_name}</td>
                <td>{item.employee_uname}</td>
                <td>{item.employee_plcy}</td>
                <td>
                  <Link to={`/updateemp/${item.employeeID}`}>
                    <button className="btn btn-edit"> Edit Details</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => removeEmployee(item.employeeID)}
                  >
                    {" "}
                    Remove
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
export default ViewEmployees;
