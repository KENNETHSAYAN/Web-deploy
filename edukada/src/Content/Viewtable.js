import React from 'react';
import './ViewTables.css'; // Import custom CSS for styling

const ViewTables = () => {
  const members = [
    { name: 'Kenneth Angel M. Sayan', address: 'Zone 4-Pasil Kauswagan, Cagayan de Oro City' },
    { name: 'Xiregi Galangque', address: ' Alubijid, Misamis Oriental' },
    { name: 'Nathaniel Mari Gucor', address: 'Puntod Cagayan de Oro City' },
    { name: 'Raff Shan Rowenn Ladra', address: ' Barra, Opol, Misamis Oriental' },
    { name: 'Joe Lejan Saguindan', address: 'Barra, Opol, Misamis Oriental' }
  ];

  return (
    <div className="view-tables-container">
      <h1 className="table-title">Group Member of Edukada</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTables;
