import "./App.css";
import CurrentTime from "./Pages/CurrentTime";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;