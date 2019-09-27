import React from 'react';
import './panel.css';

import Character from '../character/character';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.characterCount = 1;

    }

    render() {
        return (
            <fieldset id={"panel".concat(this.props.num)}>
                <legend>{"Panel ".concat(this.props.num)}</legend>
                <label>Location: <input type="text" /></label>
                <Character panel={this.props.num} num={this.characterCount} />
            </fieldset>
        );
    };
};

export default Panel;