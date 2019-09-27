import React from 'react';
import './formBase.css';

import Panel from '../panel/panel';

class FormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            panels: [{
                num: 0
            }]
        }

        this.addPanel = this.addPanel.bind(this);
        this.removePanel = this.removePanel.bind(this);
        this.updateTranscript = this.updateTranscript.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addPanel(e) {
        this.setState(prev => ({
            panels: [ ...prev.panels , {
                num: this.state.panels.length
            }]
        }))
    }

    removePanel(e) {
        if (this.state.panels.length > 1) {
            let panels = this.state.panels;
            panels.pop();

            this.setState({
                panels: panels
            })
        }
    }

    updateTranscript() {
    }

    handleChange(e) {
        let name = e.target.name
        this.setState({ [name]: e.target.value})
    }

    render() {
        return (
            <form>
                <fieldset id="transcript" className="transcript">
                    <legend>Transcript: </legend>
                    <label>Title: 
                        <input name="title" value={this.state.title} onChange={this.handleChange} type="text" />
                    </label>
                    <label>Date: 
                        <input name="date" value={this.state.date} onChange={this.handleChange} type="date" />
                    </label>
                    <div id={`panels`} className="panels">
                    {this.state.panels.map(panel => {
                        return (<Panel num={panel.num} />);
                    })}
                    </div>
                    <div id={`controls`} className="controls">
                        <button onClick={this.addPanel} type="button">Add Panel</button>
                        <button onClick={this.removePanel} type="button">Remove Panel</button>
                    </div>
                </fieldset>
                <button onClick={this.updateTranscript} type="button">Update</button>
            </form>
        )
    }
}

export default FormBase;