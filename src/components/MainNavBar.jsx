import {Link} from "react-router-dom";
import '../styles/MainNavBar.css';
import logo from'../assets/logo.png'
import { useAuth } from "../hooks/AuthContext";


function MainNavBar(){
  const {isLoggedIn, logout} = useAuth();
  return (
    <header>
      <nav>
        <section class="contenedor nav">
          <div class="logo">
            <Link to="/">
                <img src={logo} alt="logo"/>
            </Link>
          </div>
          <div class="enlaces-header">
            <Link className="anch" to="/">Home</Link>
            <Link className="anch" to="/about">About</Link>
            <Link className="anch" to="/services">Services</Link>
            <Link className="anch" to="/store">Store</Link>
            <Link className="anch" to="/login">Login</Link>

            {isLoggedIn && <button className="logout" onClick={logout}>LogOut</button>}
          </div>
          <div class="hamburguer">
              <i class="bi bi-three-dots"></i>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default MainNavBar;