import React from 'react'
import cheffy from '../Images/cheffy.jpg';
import './Card.css';

function Card(props) {
  // console.log(props.recipe.recipe.label);
  return (
    <div className="card">
          <div className="card-header">
            <img src={props.recipe ? props.recipe.recipe.image : ''} />
          </div>
          <div className="card-body">
            <h2 className='card-body-header'>{props.recipe ? props.recipe.recipe.label : 'Some Recipe'}</h2>
            <p>sdfbdsjfsdfnlsdf</p>
          </div>
        </div>
  )
}

export default Card;