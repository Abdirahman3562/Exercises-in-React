import { useState } from "react";
import ThemeLanguagesContext from "./ThemeLanguagesContext";
import Languages from "./Languages";

const App = () => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "Spanish" : "english"));
  };

  return (
    <ThemeLanguagesContext.Provider value={language}>
      <button onClick={toggleLanguage}>
        Swith to {language === "english" ? "Spanish" : "English"}
      </button>
      <Languages />
    </ThemeLanguagesContext.Provider>
  );
};

export default App;
