import React from 'react';
import './character.css';

import Action from '../action/action';

class Character extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            actions: []
        }

        this.addAction = this.addAction.bind(this);
        this.removeAction = this.removeAction.bind(this);
    }

    addAction(e) {
        this.state.actions.push({
            panel: this.props.panel,
            character: this.props.num,
            num: this.state.actions.length
        });

    }

    removeAction(e) {
        console.log('TODO: This.')

    }

    render() {
        return (
            <fieldset id={`panel${this.props.panel}-character${this.props.num}`}>
                <legend>{"Character ".concat(this.props.num)}</legend>
                <div id={`panel${this.props.panel}-character${this.props.num}-actions`}>
                    {this.state.actions.map(action => {
                        console.log(action)
                        return (<Action panel={action.panel} character={action.character} num={action.num} />);
                    })}
                </div>
                <div id={`panel${this.props.panel}-character${this.props.num}-controls`}>
                    <button onClick={this.addAction} type="button">Add Action</button>
                    <button onClick={this.removeAction} type="button">Remove Action</button>
                </div>
            </fieldset>
        )
    }
}

export default Character;