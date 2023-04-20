import React, { useState } from "react";
import axios from "axios";
import "../styles/addInsurance.css";

function AddInsurance() {
  const [insurance_name, set_insurance_name] = useState("");
  const [insurance_premium, set_insurance_premium] = useState("");
  const [insurance_age_limit, set_insurance_age_limit] = useState("");

  const insert_insurance = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/insertinsurance", {
        insurance_name: insurance_name,
        insurance_premium: insurance_premium,
        insurance_age_limit: insurance_age_limit,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="">

        <fieldset>
          <input
            type="text"
            name="insurance_name"
            id="insurance_name"
            onChange={(e) => {
              set_insurance_name(e.target.value);
            }}
            placeholder="Insurance Name"
            required
          />
        </fieldset>

        <fieldset>
          <input
            className="number-input"
            type="number"
            name="insurance_premium"
            id="insurance_premium"
            onChange={(e) => {
              set_insurance_premium(e.target.value);
            }}
            placeholder="Insurance Price"
            required
          />
        </fieldset>

        <fieldset>
          <input
            className="number-input"
            type="Number"
            name="insurance_age_limit"
            id="insurance_age_limit"
            onChange={(e) => {
              set_insurance_age_limit(e.target.value);
            }}
            placeholder="Insurance Age limit"
            required
          />
        </fieldset>

        <button type="submit" className="bttn" onClick={insert_insurance}>
          {" "}
          Add Insurance{" "}
        </button>
        
      </form>
    </div>
  );
}
export default AddInsurance;
