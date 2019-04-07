import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import sampleModel from './models/SampleModel';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      model: sampleModel
    };
  }

  render() {
    return (
      <div className="App">
        <Table model={this.state.model}/>
      </div>
    );
  }
}

export default App;
