import React from 'react';
import './Animal.css';

const Animal = (props) => {
    return (
    <div className="Animal">
        <h2>{props.animalName}</h2>
        <img className="myPic" src={props.animalPic} alt={props.animalName} />
        <p>My type: {props.animalType}</p>
        <p>My age: {props.animalAge}</p>
        <p>My breed: {props.animalBreed}</p>
    </div>
    )
};

export default Animal;