import "./Header.css";
import logo from "../../assests/images/logo1.jpeg";
import { navigate,useNavigate} from "react-router-dom";


const Header = () => {


   
    
      const navigate = useNavigate();
    
      let aboutDetailsHandler = (event) => {
  
        navigate('#/about',{state:{id:1,title:"Mom's Kitchen", img: logo }});
    
      }
  return (

    <div>
        <nav className="header-container">
          <div className="brand-logo">
              <img src={logo} className="header-logo" />
              <a className="brand-title" href="#/MomsKitchen">
                  <h1 className="header-title">Mom's Kitchen</h1>
              </a>
          </div>
          <form className="search-bar" >
                <input type="search" className="search-bar" placeholder="Search..." />
                      </form>
          <div>
              
              <ul className="header-menu">
                <li className="nav-item"> <a href="#/MomsKitchen">Recipes</a></li>
                <li className="nav-item"> <a href="#/articles">Articles</a> </li>
                <li className="nav-item"> <a onClick={aboutDetailsHandler}>About</a> </li>
              </ul>
                    
          </div>
          </nav>
        <hr></hr>

    </div>
  );
};

export default Header;
