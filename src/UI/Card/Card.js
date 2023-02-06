import "./Card.css";
import { navigate,useNavigate} from "react-router-dom";


let Card = (contentData) => {

  const navigate = useNavigate();

  let recipeDetailsHandler = (event) => {
    console.log(event.target.alt);
    console.log(event.target.src);
    navigate('/recipes',{state:{id:1,title:event.target.alt,img:event.target.src }});

{/* <Route path="/recipes" render={() => <DetailedView title={event.target.alt} img= {event.target.src} />} />  */}

  }
    console.log("Card loaded");
    return (   
        <div className="card" >
        <img src= {process.env.PUBLIC_URL + contentData.img} className="card-image" alt={contentData.title} onClick={recipeDetailsHandler}/>
        <a className=""  >{contentData.title} </a>  
      </div>
    );
  };

  export default Card;
