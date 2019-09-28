import React from 'react';
import './App.css';



import FormBase from './components/formBase/formBase';
import DisplayBox from './components/displayBox/displayBox';
import TopBar from './components/topBar/topBar';

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
        <TopBar />
        <div className="content">
          <FormBase updateTranscript={this.updateTranscript} />
          <DisplayBox value={this.state.transcript} />
        </div>
      </div>
    );
  };
};

export default App;
