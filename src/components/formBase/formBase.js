import React from 'react';
import './formBase.css';

import Panel from '../panel/panel';

class FormBase extends React.Component {
    constructor(props) {
        super(props);

        this.panelCount = 1;

    }

    handleChange(event) {
        //console.log(event.target)
    }

    render() {
        return (
            <form onChange={this.handleChange}>
                <Panel num="1" />
            </form>
        )
    }
}

export default FormBase;