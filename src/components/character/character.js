import React from 'react';
import './character.css';

import Action from '../action/action';

class Character extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '', //name of character
            form: '', //form of character
            description: '', //description of character
            actions: [{
                panel: this.props.panel,
                character: this.props.num,
                num: 0
            }]
        }

        this.actionsData = [];

        this.addAction = this.addAction.bind(this);
        this.removeAction = this.removeAction.bind(this);
        this.hoistData = this.hoistData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addAction(e) {
        this.setState(prev => ({
            actions: [ ...prev.actions , {
                panel: this.props.panel,
                character: this.props.num,
                num: this.state.actions.length
            }]
        }))

    }

    removeAction(e) {
        if (this.state.actions.length > 1) {
            let actions = this.state.actions;
            actions.pop();

            this.setState({
                actions: actions
            })
        }
    }

    hoistData(num, data) {
        this.actionsData[num] = data;
    }

    handleChange(e) {
        let name = e.target.name
        this.setState({ [name]: e.target.value}, () => {
            this.props.hoistData(this.props.num, {
                character: this.state.character,
                form: this.state.form,
                description: this.state.description,
                actions: this.actionsData
            })
        })
    }

    render() {
        return (
            <fieldset id={`panel${this.props.panel}-character${this.props.num}`} className="character">
                <legend>Character</legend>
                <label>Name: 
                    <input name="name" value={this.state.name} onChange={this.handleChange} type="text" />
                </label>
                <label>Form: 
                    <input name="form" value={this.state.form} onChange={this.handleChange} type="text" />
                </label>
                <label>Description: 
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <div id={`panel${this.props.panel}-character${this.props.num}-actions`} className="actions">
                    {this.state.actions.map(action => {
                        return (<Action panel={action.panel} character={action.character} num={action.num} hoistData={this.hoistData} />);
                    })}
                </div>
                <div id={`panel${this.props.panel}-character${this.props.num}-controls`} className="controls">
                    <button onClick={this.addAction} type="button">Add Action</button>
                    <button onClick={this.removeAction} type="button">Remove Action</button>
                </div>
            </fieldset>
        )
    }
}

export default Character;