import { Link, Outlet } from "react-router-dom";
import "./root.css";

export default function Root() {
  return (
    <div>
      <header className="root-header">
        {/* <h1>My homework Website root</h1> */}
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
                <Link to='/newUser'>Add User</Link>
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
