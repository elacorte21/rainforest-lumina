import { Routes, Route, Outlet, Link } from "react-router-dom";
import Logo from './assets/images/logo-rainforest-lumina.png';
import { Home } from "./pages/home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav className="text-center">
        <div className="container">
          <Link to="/" className="logo scrollpg"><img src={Logo} alt="rainforest lumina"/></Link>
          
          <button className="nav-mob"><span></span></button>

          <ul className="navbar-mob">
            <li><a className="scrollpg btn-story" href="#story">The Story</a></li>
            <li><a className="scrollpg btn-tickets" href="#tickets">Tickets</a></li>
            <li><a className="scrollpg btn-contact" href="#contact">Visit Us</a></li>
            <li><a className="scrollpg btn-reviews" href="#reviews">Reviews</a></li>
            <li><Link to="/about">FAQ</Link></li>
            <li><button type="submit" className="btn-fb"></button><button className="btn-ig"></button><button 
            className="facebook btn-share" id="fbshare" title="Facebook share"></button></li>
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}