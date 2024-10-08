import React from 'react';

const TableProfile = ({ employees }) => {
    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Position</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Department</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Yearly Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{employee.name}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{employee.position}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{employee.department}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableProfile;
