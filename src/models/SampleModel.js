import { uniqueId } from 'lodash';

export default {
  rows: [
    {
      key: uniqueId('row_'),
      cells: [
        { value: 'No', key: uniqueId('cell_') },
        { value: 'Month', key: uniqueId('cell_') },
        { value: 'Expenses', key: uniqueId('cell_') },
        { value: 'Notes', key: uniqueId('cell_') },
      ]
    },
    {
      key: uniqueId('row_'),
      cells: [
        { value: '1', key: uniqueId('cell_'), },
        { value: 'January', key: uniqueId('cell_'), },
        { value: '1000$', key: uniqueId('cell_') },
        { value: 'Lots of bills to pay!', key: uniqueId('cell_') },
      ]
    },
    {
      key: uniqueId('row_'),
      cells: [
        { value: '2', key: uniqueId('cell_') },
        { value: 'February', key: uniqueId('cell_') },
        { value: '2000$', key: uniqueId('cell_') },
        { value: '', key: uniqueId('cell_') },
      ]
    },
    {
      key: uniqueId('row_'),
      cells: [
        { value: '3', key: uniqueId('cell_') },
        { value: 'March', key: uniqueId('cell_') },
        { value: '200$', key: uniqueId('cell_') },
        { value: 'Spring is coming!', key: uniqueId('cell_') },
      ]
    },
  ]
};
