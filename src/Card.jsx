import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardProfile = ({ employee }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt={employee.name} />
            <div className="card-body">
                <h5 className="card-title">{employee.name}</h5>
                <p className="card-text">
                    Position: {employee.position} <br />
                    Department: {employee.department} <br />
                    Yearly Salary: {employee.salary}
                </p>
                <button className="btn btn-primary">More Info</button>
            </div>
        </div>
    );
};

export default CardProfile;
