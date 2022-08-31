import React from 'react';

function Homefilter({f1}) {
    return (
        <select onChange={e=>f1(e.target.value)}>
        <option className="btn btn-dark p-3 border border-white" value="welcomedrink">Welcomedrink</option>
      <option className="btn btn-dark p-3 border border-white" value="soup">Soup</option>
      <option className="btn btn-dark p-3 border border-white" value="salad">Salad</option>
      <option className="btn btn-dark p-3 border border-white" value="starters">Starters</option>
      <option className="btn btn-dark p-3 border border-white" value="maincourses">Maincourses</option>
      <option className="btn btn-dark p-3 border border-white" value="dessert">dessert</option>
      <option className="btn btn-dark p-3 border border-white" value="Chinese">Chinese</option>
      <option className="btn btn-dark p-3 border border-white" value="mexican">mexican</option>
      <option className="btn btn-dark p-3 border border-white" value="Italian">Italian</option>
        </select>
    );
}

export default Homefilter;