// App.js
import React, { useState } from "react";
import "./styles.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <div className="home">
            <h2>Welcome to my Portfolio</h2>
            <p>Feel free to explore my work and get in touch!</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;