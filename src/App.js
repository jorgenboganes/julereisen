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
      <Router basename={window.location.pathname || ''}>
        <Routes>
          <Route exact path="/" element={<Hjem/>} />
          <Route exact path="/julereisen" element={<Hjem/>} />
          <Route exact path="/toppliste" element={<Toppliste/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
