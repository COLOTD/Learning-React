import React from 'react';

const Car = ({ make, model, year, color, price}) => {
    return (
        <div className='car-details'>
            <h2>Car information</h2>
            <ul>
                <li>
                    <strong>make:</strong> {make}
                </li>
                <li>
                     <strong>model:</strong> {model}
                </li>
                <li>
                     <strong>year:</strong>  {year}
                </li>
                <li>
                     <strong>color:</strong> {color}
                </li>
                <li>
                     <strong>price:</strong> {price}
                </li>

            </ul>

        </div>
    );
}; 

export default Car;
  