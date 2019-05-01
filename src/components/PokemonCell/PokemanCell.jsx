import React, { Component } from 'react';
import styles from '../components/../PokemonCell/PokemanCell.module.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import { PropTypes } from 'prop-types';

class PokemonCell extends Component {
    state = {
        name: '',
        spritUrl: '',
        pokemonId: '',
        spriteLoading: true,

    };
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonId = url.split('/')[url.split('/').length - 2];
        const spritUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png?raw=true`;

        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            this.setState({
                spriteLoading: false,
                name,
                spritUrl,
                pokemonId
            });
        }, 3000);

    }
    render() {
        const { spritUrl, name, spriteLoading, pokemonId } = this.state;

        return (
            <Link to={`pokemon/${pokemonId}`}>
                <div >

                    <Grid container spacing={16} >
                        <Grid item xs={12} className={styles.pokemonCell} >
                            <Card className={styles.card}>
                                <CardContent >
                                    {spriteLoading ? (
                                        <Loading />
                                    ) : (null)}

                                    <img src={spritUrl} alt="pokemon"
                                        onLoad={() => this.setState({ spriteLoading: false })} />
                                    <h1>{name}</h1>

                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>

                </div>
            </Link>
        );
    }
}

PokemonCell.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
};

export default PokemonCell;