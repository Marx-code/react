import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.jpg';



function Nav() {
    return (
      <nav className="navbar bg-body-tertiary  bg-dark-subtle
 shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} width="30" height="24" className="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>
    );
}

export default Nav;