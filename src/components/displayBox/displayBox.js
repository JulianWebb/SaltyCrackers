import React from 'react';
import './displayBox.css';

class DisplayBox extends React.Component {
    render() {
        return (
            <textarea readonly="" value={this.props.value} />
        );
    }
}


export default DisplayBox;