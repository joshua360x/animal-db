import React from 'react';
import { Link } from 'react-router-dom';
export default function Animal({
  Age,
  Sex,
  ['Looks Like']: looksLike,
  ['At AAC']: locationStillThere,
  ['Animal ID']: id,
  Color,
  Type,
  ['Image Link']: imageLink,
}) {
  // random color
  // function getRandomColor() {
  //   var letters = '0123456789ABCDEF';
  //   var color = '#';
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  // get Light Colors
  function getRandomColor() {
    const color = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    return color;
  }

  // USEFUL Table
  // Age: "3 years"
  // Animal ID: "A850984"
  // At AAC: "Yes (come to the shelter)"
  // Color: "White"
  // Found Location: "1625 ROAD78610"
  // Image Link: "http://www.petharbor.com/pet.asp?uaid=ASTN.A850984"
  // Intake Date: "02/03/2022"
  // Looks Like: "Cairn Terrier Mix"
  // Sex: "Intact Male"
  // Type: "Dog"

  return (
    <Link to={`/animal-details/${id}`}>
      <div className="animal" style={{ backgroundColor: getRandomColor() }}>
        <p>{Age}</p>
        <p>{Color}</p>
        <p>{Sex}</p>
        {/* <p>{imageLink}</p>
      <img src={`${imageLink}`} alt={`${Type}`} /> */}
        <p>
          I am a {Type} and I kind look like a {looksLike}
        </p>
        <p>{locationStillThere}</p>
      </div>
    </Link>
  );
}
