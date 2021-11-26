import React from 'react';

const Employee = (props) => {

    //Destructuring using
    const { name, Designation, age, salary, country, img } = props.employee || {}

    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center text-dark" style={{ width: "100%", height: "100%", borderRadius: "20px", backgroundColor: "lightskyblue" }}>
                <img style={{ width: "80%", height: "80%", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "12px" }} src={img} className="card-img-top rounded-circle" alt="" />
                <div className="card-body">
                    <h6 className="card-text">Name  :  {name}</h6>
                    <h6 className="card-text">Designation  :  {Designation}</h6>
                    <h6 className="card-text">Age  :  {age}</h6>
                    <h6 className="card-text">Country  :  {country}</h6>
                    <h6 className="card-text">Salary  :  {salary}</h6>

                    <button
                        //Hndler Calling
                        onClick={() => props.handleAddEmployee(props.employee)}
                        className="btn btn-warning"><i className="fa fa-shopping-cart"></i><span>add to cart</span></button>
                </div>
            </div>
        </div>
    );
};

export default Employee;