import "./App.scss";

import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";

function App() {
  const [isDarkModeEnabled, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!isDarkModeEnabled);
  };

  return (
    <div
      className="app"
      style={{
        color: isDarkModeEnabled && "white",
        backgroundColor: isDarkModeEnabled && "black",
      }}
    >
      <Header
        text="React To-Do-List"
        setDarkMode={handleDarkMode}
        isDarkModeEnabled={isDarkModeEnabled}
      />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
