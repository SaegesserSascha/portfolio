import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.scss';
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
}

export default App;