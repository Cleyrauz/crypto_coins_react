import React, { Component } from 'react';
import moment from 'moment';
import './Notes.css';
const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component {
    constructor(){
        super();
        //Save the date when the data is rendered by the first time
        this.state = {
            lastUpdate: moment().format(formatTime).toString()
        }
    }

    componentWillRecieveProps(nextProps) {
        //If the prop of notes has changed...
        if(nextProps.notes !== this.props.notes) {
            this.setState ({
                lastUpdate: moment().format(formatTime).toString()
            });
        }
    }

    render() {
        const { notes } = this.props;

        return (
            <div className='Notes'>
                <h1>Notes:</h1>

                <ul>
                    {notes.map((note, key) => (
                        <li key={key}>{note.title} - {note.content}</li>
                    ))}
                </ul>
                <p>Last Update:<strong>{this.state.lastUpdate}</strong></p>
            </div>
        );
    }
}

export default Notes;