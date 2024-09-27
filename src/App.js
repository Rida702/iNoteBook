import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
//We will wrap NoteState around all the components  because we want to wrap all the other
//components with the values inside NoteState

function App() {
  return (
    <>
    <NoteState>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
