import { exportToCSV } from '../exporter';

describe('Test exporter function', () => {

  it('should export table model to CSV', () => {

    const tableModel = {
      rows: [
        {
          key: 'row_0',
          cells: [
            { value: 'aaa', key: 'cell_0' },
            { value: 'bbb', key: 'cell_1' },
          ]
        },

        {
          key: 'row_1',
          cells: [
            { value: 'zzz', key: 'cell_2' },
            { value: 'xyz', key: 'cell_3' },
          ]
        },
    };

    

    expect(exportToCSV(tableModel)).toEqual('aaa,bbb\nzzz,xyz');
  });
});
