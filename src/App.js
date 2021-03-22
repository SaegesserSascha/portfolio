import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.scss';
import Navigation from "./components/navigation/Navigation";
import Content from "./components/content/Content";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Content />
      </div>
    </Router>
  );
}

export default App;