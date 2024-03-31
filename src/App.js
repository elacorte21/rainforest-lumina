import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import Logo from './assets/images/logo-rainforest-lumina.png';
import { Home } from "./pages/home";
import { Faq } from "./pages/faq";
import { NoMatch } from "./pages/nomatch";

import ImgFooterLogoJBP from './assets/images/park-bird-footer.png';
import ImgFooterLogoNS from './assets/images/park-night-safari-footer.png';
import ImgFooterLogoRS from './assets/images/park-river-safari-footer.png';
import ImgFooterLogoSZ from './assets/images/park-singapore-zoo-footer.png';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  let location = useLocation();
  location = location.pathname
  
  return (
    <>
      <nav className="text-center">
        <div className="container">

          {location === '/' ? <a href="#main" className="logo scrollpg"><img src={Logo} alt="rainforest lumina"/></a> : 
            <Link to="/" className="logo"><img src={Logo} alt="rainforest lumina"/></Link>
          }
          
          <button className="nav-mob"><span></span></button>

          <ul className="navbar-mob">
            <li><a className="scrollpg btn-story" href="#story">The Story</a></li>
            <li><a className="scrollpg btn-tickets" href="#tickets">Tickets</a></li>
            <li><a className="scrollpg btn-contact" href="#contact">Visit Us</a></li>
            <li><a className="scrollpg btn-reviews" href="#reviews">Reviews</a></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><button type="submit" className="btn-fb"></button><button className="btn-ig"></button><button 
            className="facebook btn-share" id="fbshare" title="Facebook share"></button></li>
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

      <footer>
        Wildlife Reserves Singapore Group
        <ul className="list-park">
            <li><a href="..." title="Jurong Bird Park"><img src={ImgFooterLogoJBP} alt="Jurong Bird Park" /></a></li>
            <li><a href="..." title="Night Safari"><img src={ImgFooterLogoNS} alt="Night Safari" /></a></li>
            <li><a href="..." title="River Safari"><img src={ImgFooterLogoRS} alt="River Safari" /></a></li>
            <li><a href="..." title="Singapore Zoo"><img src={ImgFooterLogoSZ} alt="Singapore Zoo" /></a></li>
        </ul>
        
        &copy; Copyright 2018. Wildlife Reserves Singapore Group. <span>All rights reserved.</span>
        <div className="contact-links">
            <a href="..." target="_blank">Terms and conditions</a>
            <a href="..." target="_blank">Privacy policy</a>
            <a href="..." target="_blank">Data protection policy</a>
        </div>
      </footer>
    </>
  );
}