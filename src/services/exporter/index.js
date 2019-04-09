import * as _ from 'lodash';

export function exportToCSV(model) {
  return _.chain(model.rows)
    .map(row => row.cells.map(cell => cell.value).join(','))
    .flatMap()
    .join('\n')
    .value();
}

export function downloadContent(content) {
  const csvFileName = `download-${new Date().getTime()}.csv`;
  if (navigator.msSaveBlob) {
    const data = new Blob([content], { type: 'application/bpmn20-xml;charset=UTF-8' });
    navigator.msSaveBlob(data, csvFileName);
  } else {
    const link = document.createElement('a');
    link.href = `data:application/bpmn20-xml;charset=UTF-8,${content}`;
    link.target = '_target';
    link.download = csvFileName;
    link.dispatchEvent(new MouseEvent('click'));
  }
}
