import { Link, Outlet } from "react-router-dom";
import "./style/app.css";

function App() {
  return (
    <div className="app_container">
      <nav>
        <Link to="home">Home</Link>
        <Link to="characters">Characters</Link>
        <Link to="regions">Regions</Link>
        <Link to="organizations">Organizations</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
