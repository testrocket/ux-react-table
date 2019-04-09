import * as tableService from '../table';

describe('Update table model test', () => {

  it ('should add new table row', () => {
    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [ { value: 'aaa', key: 'cell_0' },]
        },
      ]
    };

    const updatedTableModel = tableService.insertTableRow(tableModel, 1);
    expect(updatedTableModel.rows.length).toEqual(2);
  });

  it ('should remove table row', () => {
    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [ { value: 'aaa', key: 'cell_0' },]
        },
        {
          key: 'row_0',
          cells: [ { value: 'aaa', key: 'cell_0' },]
        },
      ]
    };

    const updatedTableModel = tableService.removeTableRow(tableModel, 1);
    expect(updatedTableModel.rows.length).toEqual(1);
  });

  it ('should add table column', () => {
    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [{ value: 'aaa', key: 'cell_0' },]
        },
      ]
    };

    const updatedTableModel = tableService.insertTableColumn(tableModel, 1);
    expect(updatedTableModel.rows[0].cells.length).toEqual(2);
  });

  it ('should remove table column', () => {
    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [
            { value: 'aaa', key: 'cell_0' },
            { value: 'bbb', key: 'cell_1' },
          ]
        },
      ]
    };

    const updatedTableModel = tableService.removeTableColumn(tableModel, 1);
    expect(updatedTableModel.rows[0].cells.length).toEqual(1);
  });

  it('should update table model with new value', () => {

    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [
            { value: 'aaa', key: 'cell_0' },
            { value: 'bbb', key: 'cell_1' },
          ]
        },
      ]
    };

    const expectedTableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [
            { value: 'aaa', key: 'cell_0' },
            { value: 'zzz', key: 'cell_1' },
          ]
        },
      ]
    };

    const updatedTableModel = tableService.updateTableCell(tableModel, 'row_0', 'cell_1', 'zzz');
    expect(updatedTableModel).toEqual(expectedTableModel);
  });
});
