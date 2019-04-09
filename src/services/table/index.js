import * as _ from 'lodash';

export function updateTableCell(tableModel, rowKey, cellKey, value) {
  const cell = _.chain(tableModel.rows)
    .find(row => row.key === rowKey)
    .get('cells')
    .find(cell => cell.key === cellKey)
    .value();

  cell.value = value;
  return tableModel;
}

export function insertTableRow(tableModel, beforeRowIndex) {

  if (tableModel.rows.length) {
    insertAnotherRow();
  } else {
    insertFirstRow();
  }

  function insertAnotherRow() {
    const index = _.clamp(beforeRowIndex, 0, tableModel.rows.length);
    const cells = _.chain(tableModel.rows)
      .first()
      .cloneDeep()
      .get('cells')
      .forEach(cell => {
        cell.key = _.uniqueId('cell_');
        cell.value = String.fromCharCode(160);
      })
      .value();

    tableModel.rows.splice(index, 0, { key: _.uniqueId('row_'), cells });
  }

  function insertFirstRow() {
    tableModel.rows.push({
      key: _.uniqueId('row_'),
      cells: [newEmptyCell()]
    });
  }

  return tableModel;
}

function newEmptyCell() {
  return {
    key: _.uniqueId('cell_'),
    value: '',
  };
}

export function removeTableRow(tableModel, rowIndexToRemove) {
  if (tableModel.rows.length > 1) {
    const index = _.clamp(rowIndexToRemove, 0, tableModel.rows.length - 1);
    tableModel.rows.splice(index, 1);
  }
  return tableModel;
}


export function insertTableColumn(tableModel, beforeColumnIndex) {
  if (tableModel.rows.length) {
    const index = _.clamp(beforeColumnIndex, 0, tableModel.rows[0].cells.length);

    _.forEach(tableModel.rows, row => {
      row.cells.splice(index, 0, newEmptyCell());
    });
  }

  return tableModel;
}

export function removeTableColumn(tableModel, columnIndexToRemove) {

  if (tableModel.rows.length && tableModel.rows[0].cells.length > 1) {
    const index = _.clamp(columnIndexToRemove, 0, tableModel.rows[0].cells.length - 1);

    _.forEach(tableModel.rows, row => {
      const cell = _.nth(row.cells, index);
      _.remove(row.cells, c => c.key === cell.key);
    });
  }

  return tableModel;
}
