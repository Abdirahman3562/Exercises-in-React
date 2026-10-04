import { useState } from "react";

const MultipleInputs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


   const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please check the checkbox before submitting.");
      return;
    }
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }

    console.log("Form submitted with values:", {
      isChecked,
      selectedOption,
    });
    console.log("Form Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
      <br /> <br />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleInputs;
