import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contactme";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
