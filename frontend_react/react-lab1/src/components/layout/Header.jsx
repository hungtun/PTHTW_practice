import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header-logo">
          Content Hub
        </Link>
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "header-nav__item--active" : "header-nav__item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          end
          className={({ isActive }) =>
            isActive ? "header-nav__item--active" : "header-nav__item"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          end
          className={({ isActive }) =>
            isActive ? "header-nav__item--active" : "header-nav__item"
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/me"
          end
          className={({ isActive }) =>
            isActive ? "header-nav__item--active" : "header-nav__item"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/admin/users"
          end
          className={({ isActive }) =>
            isActive ? "header-nav__item--active" : "header-nav__item"
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
