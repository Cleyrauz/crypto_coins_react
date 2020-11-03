import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {
    constructor () {
        super();

        //Estado Inicial
        this.state = {
            dollars: 0
        };
    }

    shouldComponentUpdate(props, state) {
        //Solo se actualiza si son multiplo de 10
        return state.dollars % 10 === 0;
    }

    handleOnChange = e => {
        this.state({
            dollars: Number(e.target.value || 0)
        });
    }

    render() {
        return (
        <div className="Coins">
        <h1>Buy Cripto Coins!</h1>

        <div className="questions">
        <p>How much dollars do you have?</p>

        <p>
        <input
        placeholder="0"
        oncChange={this.handleOnChange}
        type="text" /></p>
        </div>

        <div className="answer">
        <p>Crypto Coin price: $10</p>
        <p>You can buy <strong>{this.state.dollars / 10}</strong>coins.</p>
        </div>
        </div>
        );
    }
}

export default Coins;