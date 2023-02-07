import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import {articleList} from '../../data'
import "../Filter/Filter.css";
import "../../App.css"


let Articles =() =>{

    return  (
        <><Header></Header>

    <div className='main-container'>
        <div className="filter-container">
            <h2>Filter Articles</h2>
            <ul className="feature-list">
        
                <h3>By category</h3>
                <input type="checkbox" name="All"  value="All"  defaultChecked={true}/>
                <label >All Articles</label>
                <br />
            </ul>
        </div>
            <MainView recipeList={articleList}></MainView>
    </div>
    <footer className='footer-sticky' >
        <p > &copy; Copyright 2023 </p> 
    </footer>
    </>)

}


export default Articles;