import { exportToCSV } from '../exporter';

describe('Test exporter function', () => {

  it('should export table model to CSV', () => {

    const tableModel = {
      rows: [
        [ {value: 'aaa'}, { value: 'bbb'} ],
        [ {value: 'zzz'}, { value: 'xyz'} ],
      ]
    };

    expect(exportToCSV(tableModel)).toEqual('aaa,bbb\nzzz,xyz');
  });
});
