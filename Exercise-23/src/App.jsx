import { useState } from "react";
import "./App.css";

const skillsList = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "UI Design",
  "API Development",
];

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreeTerms: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));

    setErrors((prev) => ({
      ...prev,
      skills: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (formData.experience === "") {
      newErrors.experience = "Experience is required";
    } else if (
      !Number.isInteger(Number(formData.experience)) ||
      Number(formData.experience) < 0 ||
      Number(formData.experience) > 50
    ) {
      newErrors.experience = "Please enter valid years of experience (0-50)";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h2>Developer Application Form</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={errors.role ? "input-error" : ""}
            >
              <option value="">Select a role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </select>
            {errors.role && <p className="error-message">{errors.role}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="experience">Years of Experience</label>

            <input
              type="number"
              id="experience"
              name="experience"
              min="0"
              max="50"
              step="1"
              value={formData.experience}
              onChange={handleChange}
              className={errors.experience ? "input-error" : ""}
            />

            {errors.experience && (
              <p className="error-message">{errors.experience}</p>
            )}
          </div>

          <div className="form-group">
            <label>Skills</label>
            <div className="skills-grid">
              {skillsList.map((skill) => (
                <label className="checkbox-label" key={skill}>
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                  />
                  {skill}
                </label>
              ))}
            </div>
            {errors.skills && <p className="error-message">{errors.skills}</p>}
          </div>

          <div className="extra-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>

            {errors.agreeTerms && (
              <p className="error-message">{errors.agreeTerms}</p>
            )}

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
              />
              Receive notifications about new opportunities
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
