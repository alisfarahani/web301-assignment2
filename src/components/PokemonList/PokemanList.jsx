import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PokemanCell from '../PokemonCell/PokemanCell'


class PokemanList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://pokeapi.co/api/v2/pokemon?limit=151',
            pokemon: null
        };

    }
    async componentDidMount() {
        const response = await axios.get(this.state.url);
        this.setState({ pokemon: response.data['results'] });
        console.log(this.state.pokemon);

    }

    render() {
        const { pokemon } = this.state;

        return (

            <Fragment>
                {pokemon ? (
                    <div>
                        {pokemon.map(pokemon => (
                            <PokemanCell
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}

                    </div>
                ) : (<h4 >Hello..</h4>)}
            </Fragment>
        )
    }

}
export default PokemanList;