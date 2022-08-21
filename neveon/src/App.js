import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <Header />
      <NavBar />
      <div className="App">{routes}</div>
    </Router>
  );
}

export default App;
