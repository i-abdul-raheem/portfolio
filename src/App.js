import './App.css';
import Profile from "./components/Profile";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Social from "./components/Social";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";
import Services from "./components/Services";
import {useState, useEffect} from "react";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    if(theme === "dark-theme") setTheme("light-theme");
    else setTheme("dark-theme")
  }

  return (
    <>
    <header>
      <div className="site-title">Abdul Raheem</div>
      <div className="switch-wheme">
        <label className="toggle-control">
          <input type="checkbox" onChange={() => changeTheme()} defaultChecked/>
          <span className="control"></span>
        </label>
      </div>
    </header>
    <main>
      <div className="column">
        <Welcome />
        <Profile />
        <Social />
        <About />
      </div>
      <div className="column">
        <Certificates />
        <Projects />
      </div>
      <div className="column">
        <Services />
        <ContactInfo />
      </div>
    </main>
    </>
  );
}

export default App;
