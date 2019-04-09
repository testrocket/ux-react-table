import { uniqueId } from 'lodash';

export default {
  rows: [
    {
      key: uniqueId('row_'),
      cells: [
        { value: 'cell 1', key: uniqueId('cell_') },
        { value: 'second cell', key: uniqueId('cell_') },
        { value: 'abc', key: uniqueId('cell_') },
        { value: 'fourth cell', key: uniqueId('cell_') },
      ]
    },
    {
      key: uniqueId('row_'),
      cells: [
        { value: 'cell 2', key: uniqueId('cell_'), },
        { value: 'second cell', key: uniqueId('cell_'), },
        { value: 'xyz', key: uniqueId('cell_') },
        { value: 'fourth cell', key: uniqueId('cell_') },
      ]
    },
    {
      key: uniqueId('row_'),
      cells: [
        { value: 'cell 3', key: uniqueId('cell_') },
        { value: 'second cell', key: uniqueId('cell_') },
        { value: '123', key: uniqueId('cell_') },
        { value: 'fourth cell', key: uniqueId('cell_') },
      ]
    },
  ]
};
