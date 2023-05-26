import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesDesc.css'

const HistoryTable = (Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody className='tableBody'>
        {Props.data.map((item) => (
          <tr key={item.id}>
            <Link to="/personalInfo" id='link'><td>{item.column1}</td></Link>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default HistoryTable