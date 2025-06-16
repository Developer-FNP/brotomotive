import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="form-box">
        <div className="form-section-title">Contact info</div>
        <div className="form-row four-cols">
          <input type="text" placeholder="Full Name*" required />
          <input type="tel" placeholder="Phone No.*" required />
          <input type="email" placeholder="Email*" required />
          <input type="text" placeholder="Zip Code*" required />
        </div>

        <div className="form-section-title">Part Details</div>
        <div className="form-row three-cols">
          <select required>
            <option value="">Year*</option>
            {Array.from({ length: new Date().getFullYear() - 1979 }, (_, i) => {
              const year = 1980 + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            }).reverse()}
          </select>

          <input type="text" placeholder="Make*" required />
          <input type="text" placeholder="Model*" required />
        </div>

        <div className="form-row two-cols">
          <input type="text" placeholder="Choose Part*" required />
          <input type="text" placeholder="VIN Number (Optional)" />
        </div>

        <div className="form-row one-col">
          <input type="text" placeholder="Remarks (Optional)" />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
