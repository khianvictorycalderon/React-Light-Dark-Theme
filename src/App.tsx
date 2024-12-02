// Import the useState and useEffect
import { useState, useEffect } from "react";

export default function App() {
  // Declaring Theme
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light"); // By default, theme is light

  // Text Color Declaration
  const [text1Color, setText1Color] = useState<string>("text-light");
  const [text2Color, setText2Color] = useState<string>("text-light");

  // Changing text and background color
  useEffect(() => {
    document.body.style.backgroundColor = (theme == "light" ? "white" : "black"); // For the background
    setText1Color(theme == "light" ? "text-dark" : "text-light"); // for text 1
    setText2Color(theme == "dark" ? "text-dark" : "text-light"); // for text 1
    localStorage.setItem("theme", theme);
  },[theme]);

  const ChangeTheme = () => {
    // Toggle light and dark using ternary operator
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
     <h1 className={`${text1Color}`}>Sample Light and Dark Theme</h1>
     <div className={`section-${theme} ${text2Color}`}>This is a sample section</div>
     <br/>
     <button onClick={ChangeTheme}>Change Theme</button>
    </>
  )
}