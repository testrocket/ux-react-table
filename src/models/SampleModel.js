import * as tableService from '../services/table';

export default {
  rows: [
    {
      key: tableService.nextRowKey(),
      cells: [
        { value: 'No', key: tableService.nextCellKey() },
        { value: 'Month', key: tableService.nextCellKey() },
        { value: 'Expenses', key: tableService.nextCellKey() },
        { value: 'Notes', key: tableService.nextCellKey() },
      ]
    },
    {
      key: tableService.nextRowKey(),
      cells: [
        { value: '1', key: tableService.nextCellKey(), },
        { value: 'January', key: tableService.nextCellKey(), },
        { value: '1000$', key: tableService.nextCellKey() },
        { value: 'Lots of bills to pay!', key: tableService.nextCellKey() },
      ]
    },
    {
      key: tableService.nextRowKey(),
      cells: [
        { value: '2', key: tableService.nextCellKey() },
        { value: 'February', key: tableService.nextCellKey() },
        { value: '2000$', key: tableService.nextCellKey() },
        { value: 'Still cold outside!', key: tableService.nextCellKey() },
      ]
    },
    {
      key: tableService.nextRowKey(),
      cells: [
        { value: '3', key: tableService.nextCellKey() },
        { value: 'March', key: tableService.nextCellKey() },
        { value: '200$', key: tableService.nextCellKey() },
        { value: 'Spring is coming!', key: tableService.nextCellKey() },
      ]
    },
  ]
};
