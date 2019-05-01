
import React, { Component } from 'react';
import styles from '../Pokemon/Pokemon.module.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { CardContent } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';

class Pokemon extends Component {
    state = {
        name: '',
        spritUrl: '',
        pokemonId: '',
        stats: {
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            specialAttack: "",
            specialDefense: ""
        }
    };

    handleBack = () => {
        this.props.history.push("/");
    }

    async componentDidMount() {

        const { pokemonId } = this.props.match.params;
        const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        console.log(pokemonResponse);
        const name = pokemonResponse.data.name;
        const spritUrl = pokemonResponse.data.sprites.front_default;
        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        pokemonResponse.data.stats.map((stat) => {
            switch (stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;

                case 'attack':
                    attack = stat['base_stat'];
                    break;

                case 'defense':
                    defense = stat['base_stat'];
                    break;

                case 'speed':
                    speed = stat['base_stat'];
                    break;

                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;

                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;


                default:
                    break;
            }
        })

        this.setState({
            spritUrl,
            pokemonId,
            name,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense,
            }
        });


    }
    render() {
        const { name, pokemonId, stats } = this.state;
        return (


            <div className={styles.pokemon}>
                <Grid>
                    <Card>
                        <CardContent className={styles.card}>
                            <h1>#{pokemonId}{name}</h1>
                            <div className={styles.image}>
                                <img src={this.state.spritUrl} width="300px" height="300px" alt="ss"></img>
                            </div>
                            <div className={styles.table}>
                                <Table>
                                    <TableHead className={styles.head}>
                                        <TableRow>
                                            <TableCell>HP</TableCell>
                                            <TableCell>ATTACK</TableCell>
                                            <TableCell>DEFENSE</TableCell>
                                            <TableCell>SPEED</TableCell>
                                            <TableCell>SPECIAL ATTACK</TableCell>
                                            <TableCell>SPECIAL DEFENSE</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow>
                                            <TableCell>{stats.hp}</TableCell>
                                            <TableCell > {stats.attack}</TableCell>
                                            <TableCell > {stats.defense}</TableCell>
                                            <TableCell > {stats.speed}</TableCell>
                                            <TableCell > {stats.specialAttack}</TableCell>
                                            <TableCell > {stats.specialDefense}</TableCell>
                                        </TableRow>

                                    </TableBody>


                                </Table>

                            </div>
                            <div className={styles.button}>
                                <Button
                                    variant="text"
                                    onClick={this.handleBack}
                                >
                                    <h2>Back</h2>
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                </Grid>

            </div>
        );
    }
}
Pokemon.propTypes = {
    pokemonId: PropTypes.number
};

export default Pokemon; 