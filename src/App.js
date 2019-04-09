import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import sampleModel from './models/SampleModel';
import { exportToCSV, downloadContent } from './services/exporter';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: sampleModel
    };
  }

  exportAsCSVFile = () => {
    downloadContent(exportToCSV(this.state.model));
  }

  onInsertRow() {
    console.log('app on insert row')
  }

  onInsertColumn() {
    console.log('app on insert column')
  }

  render() {
    return (
      <div className="App">
        <Table model={this.state.model}
          onInsertRow={this.onInsertRow}
          onInsertColumn={this.onInsertColumn} />
        <div className="App-controls">
          <div>
            <div>
              <input type="text" placeholder="Row index..." />
              <button onClick={this.onInsertRow}>Add</button>
            </div>
            <div>
              <input type="text" placeholder="Column index..." />
              <button onClick={this.onInsertColumn}>Add</button>
            </div>
            <div className="export-container">
              <button className="export-button" onClick={this.exportAsCSVFile}>Export to CSV</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
