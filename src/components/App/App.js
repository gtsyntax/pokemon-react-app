import React, { Component } from 'react';
import Search from '../Search/Search';
import PokeApi from '../PokeApi/PokeApi';

import axios from 'axios';



class App extends Component {
    constructor() {
        super();

        this.state = {
            type: "1",
            pokemonArray: []
        }
    }

    handleOnChangePokeType = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleSearchButtonClick = () => {
        let self = this;
        axios.get(`https://pokeapi.co/api/v2/type/${this.state.type}`)
        .then(function (response) {
            // handle success
            console.log(response.data.pokemon);
            self.setState({
                pokemonArray: response.data.pokemon
            })
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
    }

    render() {
        console.log(this.state.pokemonArray)
        return (
            <div className="container">
                <Search pokemonType={this.handleOnChangePokeType} clicked={this.handleSearchButtonClick}/>
                <PokeApi  pokemons={this.state.pokemonArray} />
            </div>
        );
    }
}


export default App;