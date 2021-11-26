import React from 'react';


const Cart = (props) => {
    const { cart } = props || {}
    //Reduce loop using
    const totalReducer = (preValue, curreValue) => preValue + curreValue.salary
    const total = cart.reduce(totalReducer, 0)

    return (
        <div>
            <h3><i className="fas fa-address-card"></i>
                <span>Employee Added : </span>{cart.length}
            </h3>
            <h4>Total Salary : $ {total}</h4>
            <ul>
                {
                    cart.map(employee => <li style={{ fontWeight: "bold" }}>{employee.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;