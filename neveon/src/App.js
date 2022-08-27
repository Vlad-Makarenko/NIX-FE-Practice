import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer />
    </Router>
  );
}

export default App;
