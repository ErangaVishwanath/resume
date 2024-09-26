import { Link } from "react-router-dom";
import "./navBar.css";

const navBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link" data-nav-link>
              About
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/resume" className="navbar-link" data-nav-link>
              Resume
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/project" className="navbar-link" data-nav-link>
              Project
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/technologies" className="navbar-link" data-nav-link>
              Technologies
            </Link>
          </li>

          {/* <li className="navbar-item">
            <Link to="/blog" className="navbar-link" data-nav-link>
              Blog
            </Link>
          </li> */}

          {/* <li className="navbar-item">
            <Link to="/contact" className="navbar-link" data-nav-link>
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default navBar;
