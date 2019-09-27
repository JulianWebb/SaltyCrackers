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

  updateTranscript(transcript) {
    this.setState({
      transcript: transcript
    })
  }
  
  render() {
    return (
      <div className="App">
        <FormBase updateTranscript={this.updateTranscript} />
        <DisplayBox value={this.state.transcript} />
      </div>
    );
  };
};

export default App;
