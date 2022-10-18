import {Link, Outlet} from 'react-router-dom';
import './root.css';
export default function Root() {
    return <>
        <header className='root-header'>
            <h1>My awesome website</h1>
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet></Outlet>
        </main>
    </>
}