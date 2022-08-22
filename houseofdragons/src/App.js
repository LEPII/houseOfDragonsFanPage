import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="characters">Characters</Link> 
        <Link to="regions">Regions</Link>
        <Link to="organizations">Organizations</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
