import React from 'react';

const WTR = () => {
    
    let person = {
        name: 'Abolarin',
        age : 25,
        location: 'Ontario'
      };
    
      let colors = ["red", "green", "blue"]
    
      let fruitName = 'fruit';
    
      let fruits = [
        {id : 1, name: 'Apple', color: 'green', size: 2},
        {id : 2, name: 'orange', color: 'yellow', size: 5},
        {id : 3, name: 'watermelon', color: 'red', size: 8}
      ]
    
    return (
        <div>
            <h1>Welcome to Reactjs</h1>
   <p>lorem lorem lorem lorem
   </p>
    
   <ul>
    <li>one</li>
    <li>two</li>
    <li>six</li>
    <li>seven</li>
   </ul>
   
   <h1>Person</h1>
   {/* <h3>My name is: {person.name.toUpperCase()}</h3> */}

   <h4>My name is {person.name ? person.name : "Unknown"}</h4>
   <p>I am {person.age} years old.</p>

    {colors.length > 0 && <h2>You have {colors.length} colors</h2>}

    {fruits.length > 0 && <h2>You have {fruits.length} fruits.</h2>}


    {
      fruits.map ((fruit) => (
        <div key={fruits.id}>
          
          <p>{fruit.name} is {fruit.color} and it has {fruit.size} grams</p>

        </div>
      ))
    }

        </div>
    );
}

export default WTR;
