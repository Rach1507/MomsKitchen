import "./Header.css";
import logo from "../../assests/images/logo1.jpeg";

const Header = () => {
  return (
    <div>
        <nav className="header-container">
          <img src={logo} className="header-logo" />
          <h1 className="header-title">Mom's Kitchen</h1>

          <form className="search-bar" >
            <input type="search" className="search-bar" placeholder="Search..." />
        </form>

          <ul className="header-menu">
            <li className="nav-item"> <a href="#">Recipes</a></li>
            <li className="nav-item"> <a href="#">Articles</a> </li>
            <li className="nav-item"> <a href="#">About</a> </li>
          </ul>
        </nav>
        <hr></hr>

    </div>
  );
};

export default Header;
