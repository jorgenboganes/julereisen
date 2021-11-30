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
      <h1>Den magiske Julereisen</h1>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Hjem/>} />
          <Route path="/toppliste" element={<Toppliste/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
