// MultiStepForm.jsx

import  { useReducer } from "react";

const initialState = {
  step: 1, // Start at step 1
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};


const  formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value, 
      };
    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'PREV_STEP':
      return {
        ...state,
        step: state.step - 1,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle input changes
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Go to next step after form validation
  const nextStep = (e) => {
    e.preventDefault();

    dispatch({
      type: "NEXT_STEP",
    });
  };

  // Go back
  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  // Reset entire form
  const resetForm = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  // Final submit
  const handleSubmit = () => {
    alert("Form submitted successfully!");

    resetForm();
  };

  return (
    <div>
      <h2>Multi-Step Registration</h2>

      {/* ================= STEP 1 ================= */}

      {state.step === 1 && (
        <form onSubmit={nextStep}>
          <h3>Step 1: Profile</h3>

          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              required
              value={state.firstName}
              onChange={handleChange}
            />
          </label>

          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              required
              value={state.lastName}
              onChange={handleChange}
            />
          </label>

          <br />

          <button type="submit">
            Next
          </button>
        </form>
      )}

      {/* ================= STEP 2 ================= */}

      {state.step === 2 && (
        <form onSubmit={nextStep}>
          <h3>Step 2: Contact</h3>

          <label>
            Email:
            <input
              type="email"
              name="email"
              required
              value={state.email}
              onChange={handleChange}
            />
          </label>

          <br />

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              required
              value={state.phone}
              onChange={handleChange}
            />
          </label>

          <br />

          <button
            type="button"
            onClick={prevStep}
          >
            Back
          </button>

          <button type="submit">
            Next
          </button>
        </form>
      )}

      {/* ================= STEP 3 ================= */}

      {state.step === 3 && (
        <div>
          <h3>Step 3: Review</h3>

          <p>
            <strong>First Name:</strong>{" "}
            {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong>{" "}
            {state.lastName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {state.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {state.phone}
          </p>

          <button onClick={prevStep}>
            Back
          </button>

          <button onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      )}

      {/* ================= COMPLETED ================= */}

      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>

          <button onClick={resetForm}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;