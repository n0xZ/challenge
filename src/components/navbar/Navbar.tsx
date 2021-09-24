import { Link } from "react-router-dom";
const Navbar: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between align-items-center text-dark px-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item active">
              <Link to="/" className="navbar-brand font-weight-bold mb-4">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/search" className="navbar-brand">
                Buscar personaje
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-dark" style={{ height: "100vh" }}>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
