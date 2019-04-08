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

  render() {
    return (
      <div className="App">
        <Table model={this.state.model}/>
        <button className="export-button" onClick={this.exportAsCSVFile}>Export to CSV</button>
      </div>
    );
  }
}

export default App;
