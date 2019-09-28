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


    handleChange(e) {
        let name = e.target.name
        this.setState({ [name]: e.target.value}, () => {
            this.props.hoistData(this.props.num, {
                order: Number(this.state.order),
                type: this.state.type,
                description: this.state.description
            })
        })
    }

    render () {
        return (
            <fieldset id={`panel${this.props.panel}-character${this.props.character}-action${this.props.num}`} className="action">
                <legend>Action</legend>
                <label>Order: 
                    <input name="order" value={this.state.order} onChange={this.handleChange} type="number" />
                </label>
                <label>Type: 
                    <input name="type" value={this.state.type} onChange={this.handleChange} type="text" />
                </label>
                <label>Description: 
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
            </fieldset>
        );
    }
}

export default Action;
