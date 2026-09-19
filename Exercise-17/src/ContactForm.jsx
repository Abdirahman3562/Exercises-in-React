// ContactForm.jsx
import useForm from "./useForm";

const ContactForm = () => {
  const { value, handleChange } = useForm({
    name: "",
    email: "",
    message: "",
    mother: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>

       <div>
        <label>
          Mother Name:
          <input
            type="text"
            name="mother"
            value={value.mother}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={value.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
