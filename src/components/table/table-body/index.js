import React from 'react';
import TableRow from '../table-row'

const TableBody = ({ model }) => (
  <div>
    {model.rows.map(row =>
      <TableRow key={row.key} row={row} />
    )}
  </div>
);

export default TableBody;
