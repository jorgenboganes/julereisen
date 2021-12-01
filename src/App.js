import './App.css';
import { Toppliste } from './Toppliste';
import { Hjem } from './Hjem';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App" style={{height: "100%"}}>
      <h1 style={{ fontSize: 48 }}>Den magiske Julereisen v.1.0.1</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Hjem/>} />
          <Route path="/julereisen" element={<Hjem/>} />
          <Route path="/toppliste" element={<Toppliste/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
