import './App.css';
import Homepage from "./homepage";
import Aboutme from "./contato";
// import Github from "./gitH";
// import Linkedin from "./linkedin"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <img src='placeholder.png' alt='logo' className='headerlogo'/>
      </header>
      <nav className="navbar">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="contato" className="nav-item">Contato</Link>
          <a href="https://github.com/YatoSancto" target="_blank" rel="noopener noreferrer" className="nav-item">GitHub</a>
          <a href="https://www.linkedin.com/in/marliton-gabriel-carvalho-santos-421019272/" target="_blank" rel="noopener noreferrer" className="nav-item">Linkedin</a>

      </nav>
      <div className='meio'>
        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/contato" element={<Aboutme />}></Route>
          {/* <Route path="/gitH" element={<Github />}></Route>
          <Route path="/linkedin" element={<Linkedin />}></Route> */}
        </Routes>
      </div>
      <hr />
      <footer>
        <img src="mecontrata.jpg" alt="me contrata ae" className="footerimg"/>
      </footer>
    </div>
  );
}

export default App;

