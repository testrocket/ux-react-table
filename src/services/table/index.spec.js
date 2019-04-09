import { updateTableModel } from '../table';

describe('Update table model test', () => {

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

    const updatedTableModel = updateTableModel(tableModel, 'row_0', 'cell_1', 'zzz');
    expect(updatedTableModel).toEqual(expectedTableModel);
  });
});
