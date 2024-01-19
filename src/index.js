import React from 'react';
import ReactDOM from 'react-dom/client';
import cars from './practice';

const [honda, tesla] = cars;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { coloursByPopularity: [hondaTopColour] } = honda;

const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
const { coloursByPopularity: [teslaTopColour] } = tesla;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);

//import animals, {makeAnimals} from './data';
//console.log(animals);
//destructuring an array
//const [cat,dog]= animals;
//console.log(cat);
//const [animal,makeSound]=makeAnimals(cat);
//console.log(animal);
//makeSound();
//destructuring an object
//const{name,sound, feedingRequirements:{food,water}}=cat;
//console.log(food);

