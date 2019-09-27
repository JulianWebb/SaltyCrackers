import React from 'react';
import './action.css';

class Action extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            order: '', //order of actions in the panel, not the form
            type: '', //type of action, e.g. "talking", "whispering", "running"
            description: '', //description of action
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    /*handleOrderChange(e) {
        this.setState({ order: e.target.value});
    }

    handleTypeChange(e) {
        this.setState({ type: e.target.value});
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value});
    }*/

    handleChange(e) {
        let name = e.target.name
        this.setState({ [name]: e.target.value})
    }

    render () {
        return (
            <fieldset id={`panel${this.props.panel}-character${this.props.character}-action${this.props.num}`}>
                <legend>{"Action ".concat(this.props.num)}</legend>
                <label>Order: <input name="order" value={this.state.order} onChange={this.handleChange} type="text" /></label>
                <label>Type: <input name="type" value={this.state.type} onChange={this.handleChange} type="text" /></label>
                <label>Description: <textarea name="description" value={this.state.description} onChange={this.handleChange} /></label>
            </fieldset>
        );
    }
}

export default Action;
