import "./MainView.css";
import Card from "../../UI/Card/Card";






let MainView = (props) => {

  return (
    <div className="main-view-container">
      {
      props.recipeList.map((recipe) => (
        <Card img={recipe.img} 
        title = {recipe.title}/>
      ))
      }
    </div>
  );
};


export default  MainView;