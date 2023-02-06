import "./Filter.css";
import {useState} from 'react'

let Filter = (props) => {


    const [selItem, setSelItem] = useState("All");
    const [selTimeItem, setTimeSelItem] = useState(null);


    const handleChange = (item) => {
      item === selItem ? setSelItem(null) : setSelItem(item);
    };

    const handleTimeChange = (item) => {
        item === selTimeItem ? setTimeSelItem(null) : setTimeSelItem(item);
      };

 let filterOptionHandler = (event) => {
    console.log(event.target.name);
    handleChange(event.target.name)
    props.onChangeFilter(event.target.name);
 }

 let timeHandler = (event) => {
    console.log(event.target.name);
    handleTimeChange(event.target.name)
    props.onChangeTimeFilter(event.target.name, selItem);


 }
  return (
    <div className="filter-container">
        <h2>Filter Recipes</h2>
        <ul className="feature-list">
        
            <h3>By category</h3>
            <input type="checkbox" name="All" checked={selItem === "All"}  value="All" onChange={filterOptionHandler} defaultChecked={true}/>
            <label >All Recipes</label>
            <br />

            <input type="checkbox" name="rice" value="rice" checked={selItem === "rice"}  onChange={filterOptionHandler} defaultChecked={false}/>
            <label >Rice/Bread</label>
            <br />

            <input type="checkbox" id="" name="curry" value="curry" checked={selItem === "curry"}  onChange={filterOptionHandler}/>
            <label>Curry</label>
            <br />

            <input type="checkbox" id="" name="desserts" value="desserts" checked={selItem === "desserts"}  onChange={filterOptionHandler}/>
            <label>Desserts</label>
            <br />

            <input type="checkbox" id="" name="snacks" value="snacks" checked={selItem === "snacks"}  onChange={filterOptionHandler}/>
            <label>Snacks</label>
            <br />
        </ul>

        <ul className="feature-list">
          <h3>By Cook time</h3>
          <input type="checkbox" name="short" checked={selTimeItem === "short"}  value="short" onChange={timeHandler} defaultChecked={true}/>
          <label >Under 30 mins</label>
          <br />

          <input type="checkbox" name="medium" value="medium" checked={selTimeItem === "medium"}  onChange={timeHandler} defaultChecked={false}/>
          <label >30 to 60 mins</label>
          <br />

          <input type="checkbox" id="" name="long" value="long" checked={selTimeItem === "long"}  onChange={timeHandler} defaultChecked={false}/>
          <label>More than 1 hr</label>
          <br />

        </ul>

        <ul>
          <h3></h3>
          <div className=""></div>
        </ul>

    </div>
  );
};

export default Filter;
