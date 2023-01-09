import { Link, Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <header className="root-header">
        <nav>
          <ul>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="/about">Sign Up </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
