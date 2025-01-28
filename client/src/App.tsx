import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Outlet />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/programs">Séries</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
