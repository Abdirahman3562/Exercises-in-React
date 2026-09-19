import { useState } from "react";

const useForm = (initialValue) => {

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  return { value: formData, handleChange };
};

export default useForm;