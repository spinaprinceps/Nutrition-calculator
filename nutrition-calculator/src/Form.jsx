import React, { useState } from "react";
import "./form.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    sex: "",
    age: "",
    height: "",
    weight: "",
    activityLevel: "",
    pregnancyStatus: "Not Pregnant or Breastfeeding",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent for calculation
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <h2>Nutrition Calculator</h2>

        {/* Sex */}
        <label>Sex:</label>
        <div>
          <input
            type="radio"
            name="sex"
            value="Male"
            checked={formData.sex === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="sex"
            value="Female"
            checked={formData.sex === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        {/* Age */}
        <label>Age (Years):</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        {/* Height */}
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />

        {/* Weight */}
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />

        {/* Activity Level */}
        <label>Activity Level:</label>
        <select
          name="activityLevel"
          value={formData.activityLevel}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select activity level
          </option>
          <option value="Sedentary">Sedentary</option>
          <option value="Light">Light</option>
          <option value="Moderate">Moderate</option>
          <option value="Active">Active</option>
          <option value="VeryActive">Very Active</option>
        </select>

        {/* Pregnancy Status */}
        <label>Pregnancy/Breastfeeding Status:</label>
        <select
          name="pregnancyStatus"
          value={formData.pregnancyStatus}
          onChange={handleChange}
        >
          <option value="Not Pregnant or Breastfeeding">
            Not Pregnant or Breastfeeding
          </option>
          <option value="Pregnant">Pregnant</option>
          <option value="Breastfeeding">Breastfeeding</option>
        </select>

        <button type="submit" style={{ marginTop: "20px" }}>
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Form;
