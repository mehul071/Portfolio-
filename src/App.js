import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App mb-8">
      <Nav />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
