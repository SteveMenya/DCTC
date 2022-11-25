import { Link, Outlet } from "react-router-dom";
import "./root.css";

export default function Root() {
  return (
    <div>
      <header className="root-header">
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/logIn">Login</Link>
            </li>
            <li>
              <Link to="/newUser">Create Account</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
