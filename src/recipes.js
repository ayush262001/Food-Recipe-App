import React from "react";
import './App.css';

const recipes = (props) =>{
    return(
        <div className="card">
               <div className="card-header">
               <h1>{props.title}</h1>
               </div>
               <div className="card-body">
               <div className="row">
                   <div className="col-md-6">
                   <ol>
                   {
                       props.ingredients.map(ingredient =>(
                          <li>{ingredient.text}</li>
                       ))
                   }
               </ol>
               <p> Calories : {props.calories}</p>
               
                   </div>
                   <div className="col-md-6">
                   <img src={props.image} alt="not found"></img>
                   </div>
               </div>
               </div>
               
        </div>
    );
}

export default recipes;