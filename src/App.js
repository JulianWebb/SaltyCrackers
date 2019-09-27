import React from 'react';
import './App.css';

import FormBase from './components/formBase/formBase';
import DisplayBox from './components/displayBox/displayBox';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transcript: ''
    }
    
    this.updateTranscript = this.updateTranscript.bind(this);
  }

  updateTranscript(trans) {
    this.setState({
      transcript: trans
    })
  }
  render() {
    return (
      <div className="App">
        <FormBase transcript={this.updateTranscript} />
        <DisplayBox value={this.state.transcript} />
      </div>
    );
  };
};

export default App;
