import { BrowserRouter as Router } from "react-router-dom";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <Header />
      <NavBar />
      <Breadcrumbs />
      <div className="App">{routes}</div>
      <Footer />
    </Router>
  );
}

export default App;
