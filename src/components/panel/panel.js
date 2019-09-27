import React from 'react';
import './panel.css';

import Character from '../character/character';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: '',
            sublocation: '',
            description: '',
            characters: [{
                panel: this.props.num,
                num: 0
            }]
        }

        this.addCharacter = this.addCharacter.bind(this);
        this.removeCharacter = this.removeCharacter.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    addCharacter(e) {
        this.setState(prev => ({
            characters: [ ...prev.characters , {
                panel: this.props.num,
                num: this.state.characters.length
            }]
        }))
    }

    removeCharacter(e) {
        if (this.state.characters.length > 1) {
            let characters = this.state.characters;
            characters.pop();

            this.setState({
                characters: characters
            })
        }
    }

    handleChange(e) {
        let name = e.target.name
        this.setState({ [name]: e.target.value})
    }

    render() {
        return (
            <fieldset id={"panel".concat(this.props.num)} className="panel">
                <legend>Panel</legend>
                <label>Location: 
                    <input name="location" value={this.state.location} onChange={this.handleChange} type="text" />
                </label>
                <label>Sublocation: 
                    <input name="sublocation" value={this.state.sublocation} onChange={this.handleChange} type="text" />
                    </label>
                <label>Description: 
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <div id={`panel${this.props.num}-chracters`} className="characters">
                    {this.state.characters.map(character => {
                        return (<Character panel={character.panel} num={character.num} />);
                    })}
                </div>
                <div id={`panel${this.props.num}-controls`} className="controls">
                    <button onClick={this.addCharacter} type="button">Add Character</button>
                    <button onClick={this.removeCharacter} type="button">Remove Character</button>
                </div>
            </fieldset>
        );
    };
};

export default Panel;