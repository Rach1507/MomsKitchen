import "./Card.css";


let Card = (contentData) => {
    console.log("Card loaded");
    return (   
        <div className="card">
        <img src= {process.env.PUBLIC_URL + contentData.img} className="card-image" alt="Recipe" />
        <a className="">{contentData.title}</a>  
      </div>
    );
  };

  export default Card;
