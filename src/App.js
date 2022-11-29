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
      <Router basename={process.env.PUBLIC_URL}>
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
