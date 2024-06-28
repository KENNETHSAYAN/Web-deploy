import React from 'react';
import './ViewTables.css'; // Import custom CSS for styling

const ViewTables = () => {
  const members = [
    { firstName: 'Kenneth Angel', middleInitials: 'M.', lastName: 'Sayan', address: 'Zone 4-Pasil Kauswagan, Cagayan de Oro City' },
    { firstName: 'Xiregi', middleInitials: 'B.', lastName: 'Galangque', address: 'Alubijid, Misamis Oriental' },
    { firstName: 'Kent Christian', middleInitials: ' E.', lastName: 'Cagadas', address: 'Puntod Cagayan de Oro City' },
    { firstName: 'Joe', middleInitials: 'O.', lastName: 'Lejan Saguindan', address: 'Barra, Opol, Misamis Oriental' }
  ];

  return (
    <div className="view-tables-container">
      <h1 className="table-title">Group Member of Learnify</h1>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initials</th>
            <th>Last Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.firstName}</td>
              <td>{member.middleInitials}</td>
              <td>{member.lastName}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTables;
