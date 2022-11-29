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
      <Hjem/>
    </div>
  );
}

export default App;
