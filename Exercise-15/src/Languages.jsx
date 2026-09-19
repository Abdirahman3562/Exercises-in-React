import { useContext } from "react";
import ThemeLanguagesContext from "./ThemeLanguagesContext";
const ThemeComponent = () => {
  const language = useContext(ThemeLanguagesContext);



  return <div > {language === "english" ? "Hello!" : "Hola"} </div>;
};

export default ThemeComponent;
