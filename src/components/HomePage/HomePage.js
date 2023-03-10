import '../../App.css';
import Header from '../Header/Header';
import MainView from '../MainView/MainView';
import Filter from '../Filter/Filter';
import { useState } from 'react'
import {sample} from 'underscore'
import {curryList, riceList , dessertList, snackList } from '../../data'

function HomePage() {

let recipeList = [ ...curryList ,...dessertList, ...snackList,...riceList ]
let [recipes,setRecipes] = useState(recipeList)


let filterChangeHandler = (name) => {


//   console.log(`Props in filterChangeHandler app.js: ${name}`);

  if(name === "rice")
   { 
    recipeList = [...riceList]
    
  }

  if (name === "desserts")
  {
    recipeList = [...dessertList]

  }

  if (name === "snacks")
  {
    recipeList = [...snackList]

  }

  if (name === "curry")
  {
    recipeList = [...curryList]

  }


  setRecipes(recipeList);
}


const timeFilterChangeHandler = (time,recipes) => {
  console.log("timeFilterChangeHandler");
  console.log(time);
  console.log(recipes);

  if(recipes === "rice" )  recipeList = [...riceList]
  if (recipes === "desserts") recipeList = [...dessertList]
  if (recipes === "snacks") recipeList = [...snackList]
  if (recipes === "curry") recipeList = [...curryList]

 

  if (time === "short") recipeList = sample(recipeList,3);
  if (time === "medium") recipeList = sample(recipeList,5);
  if (time === "long") recipeList = sample(recipeList,3);

  setRecipes(recipeList);
  

}

  return (
    <>
    <Header></Header>
    <div className='main-container'>
      <Filter onChangeFilter={filterChangeHandler} onChangeTimeFilter = {timeFilterChangeHandler}></Filter>
      <MainView recipeList={recipes}></MainView>
    </div>

    <footer className='footer' >
        <p > &copy; Copyright 2023 </p> 
    </footer>
    </>


  );
}



export default HomePage;