import React, { Component } from 'react';
import Notes from './Notes/Notes';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

//Here the mocked data
import { notes1, notes2 } from './Notes/data';
import './App.css';

class App extends Component {
    constructor() {
        super();

        //Load notes for the first time
        this.state = {
            notes: notes1
        };
    }

    componentDidMount(){
        //After 10 seconds (100000 miliseconds)
        //Concatenate the data with notes2
        setTimeout(() => {
            this.setState({
                notes: [...this.state.notes, ...notes2]
            });
        }, 10000);
    }

    render() {
        return (
            <div className="App">
                <Header title='Notes' />

                <Content>
                    <Notes notes={this.state.notes} />
                </Content>

                <Footer />
            </div>
        );
    }
}

export default App;
