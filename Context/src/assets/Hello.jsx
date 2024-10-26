import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Hello = () => {
    const language = useContext(LanguageContext);
    return (
        <div>
        <h2>{language === "ita" ? "Ciao Mondo" : "Hello World"}</h2>
        </div>
    )
}
export default Hello