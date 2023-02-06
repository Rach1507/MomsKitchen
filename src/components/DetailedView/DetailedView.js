
import "./DetailedView.css"
import {useLocation} from 'react-router-dom';
import "../../App.css"

import Header from "../Header/Header"

let DetailedView = (props) =>{
    const location = useLocation();

    return (
        <><Header></Header><div>
            <div className="main-container">
                <div className="detailed-view">
 
                        <img src={location.state.img} alt="Image" width="600" height="750"  />


                    <div>
                        <h1>{location.state.title}</h1><br />
                        <h5>Tradition since 1889</h5>
                        <p>The Catering was founded in blabla by Mr.Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span class="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <hr />
        </div></>
        );
}



export default DetailedView;