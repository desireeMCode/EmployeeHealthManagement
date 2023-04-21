import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/addInsurance.css";

const initialState = {
  employee_name: "",
  employee_uname: "",
  employee_password: "",
  employee_plcy: "",
};
function AddEditEmployee() {
  const [state, setState] = useState(initialState);

  const { employee_name, employee_uname, employee_pswrd, employee_plcy } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getemployee/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee_name || !employee_uname || !employee_pswrd || !employee_plcy) {
      toast.error("please provide value into each input field");
    } else {
      if (!id) {
        axios
          .post("http://localhost:3001/insertemployee", {
            employee_name: employee_name,
            employee_uname: employee_uname,
            employee_pswrd:employee_pswrd,
            employee_plcy: employee_plcy,

          })
          .then((res) => console.log(res.data))
          .catch((err) => toast.error(err));
        toast.success("New Employee Added Succesfully");
      } else {
        axios
          .put(`http://localhost:3001/editemployee/${id}`, {
            employee_name: employee_name,
            employee_uname: employee_uname,
            employee_pswrd: employee_pswrd,
            employee_plcy: employee_plcy,
          })
          .then((res) => console.log(res.data))
          .catch((err) => toast.error(err));
        toast.success("Employee Details Succesfully Updated");
      }

      setTimeout(() => {
        navigate("/viewemployees", 1000);
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            name="employee_name"
            id="employee_name"
            value={employee_name || ""}
            placeholder="Employee Name"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        <fieldset>
        <input
            type="text"
            name="employee_uname"
            id="employee_uname"
            value={employee_uname || ""}
            placeholder="Employee Username"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        <fieldset>
        <input
            type="text"
            name="employee_pswrd"
            id="employee_pswrd"
            value={employee_pswrd || ""}
            placeholder="Employee New Password"
            required
            onChange={handleinputChange}
          />
        </fieldset>

        <fieldset>
        <input
            type="text"
            name="employee_plcy"
            id="employee_plcy"
            value={employee_plcy || ""}
            placeholder="Policy Given To Employee..."
            required
            onChange={handleinputChange}
          />
        </fieldset>

        

        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/viewemployees">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
}
export default AddEditEmployee;
