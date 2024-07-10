import logo from './logo.svg';
import './App.css';
import Privacy from './Pages/privacy';
import { Router, Routes, Route, Navigate } from "react-router-dom";
import About from './Pages/about';

function App() {
  return (
    <div className="App">
    {/* <div> */}
    <Routes>
    <Route exact path="/" element={<About />} />

      <Route exact path="/privacy" element={<Privacy/>}/>
    </Routes>
    {/* </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
