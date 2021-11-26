import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Employee from '../Employee/Employee';

const Company = () => {
    const [employees, setEmployee] = useState([])

    //cart er jonne state declare
    const [cart, setCart] = useState([])
    //cart er jonne event handler
    const handleAddEmployee = (employee) => {
        const newCart = [...cart, employee]
        setCart(newCart)
    }

    useEffect(() => {
        fetch("/company.json")
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {/* employee */}

                    <div className="row">
                        {
                            employees.map(employee =>
                                <Employee
                                    key={employee.key}
                                    employee={employee}
                                    handleAddEmployee={handleAddEmployee}
                                >
                                </Employee>)
                        }

                    </div>
                </div>

                <div className="col-md-4">

                    {/* Employee add cart */}
                    <Cart
                        cart={cart}
                    >
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Company;