import { useEffect } from "react";
import { useState } from "react";

const DocumentTitle = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("Hello, ");

  useEffect(() => {
    if (name.trim() === "") {
      document.title = "welcome!";
    } else {
      document.title = `${title} "," ${name}`;
    }
  }, [name, title]);

  return (
    <div>
      <h2>Enter Your Name: </h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Choose a Greeting:</h2>
      <input
        type="text"
        placeholder="Greeting"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default DocumentTitle;
