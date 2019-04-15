import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { createGames, getGames, updateGames, deleteGames } from '../../../actions/index';
import { CircularProgress, Typography, Paper, IconButton, Icon, TextField, Button } from '@material-ui/core';

class GamesComponent extends React.Component {

    state = {
        currentGame: undefined,
        newGame: false,
    };

    componentDidMount() {
        const { getGames } = this.props;

        getGames();
    }

    saveGameHandler = () => {
        const { currentGame, newGame } = this.state;
        const { createGames, updateGames } = this.props;

        if (newGame) {
            createGames({ ...currentGame });
            this.setState({
                currentGame: {
                    name: '',
                    img: '',
                },
            });
        } else {
            updateGames({ ...currentGame });
        }
    }

    deleteHandler = () => {
        const { currentGame } = this.state;
        const { deleteGames } = this.props;

        deleteGames(currentGame._id);
        this.setState({
            currentGame: undefined
        });
    }

    currentGameImgHandler = event => {
        const { currentGame } = this.state;
        let tmp = currentGame;
        tmp.img = event.target.value;

        this.setState({
            currentGame: tmp,
        });
    }

    currentGameNameHandler = event => {
        const { currentGame } = this.state;
        let tmp = currentGame;
        tmp.name = event.target.value;

        this.setState({
            currentGame: tmp,
        });
    };

    gameHandler = (key) => {
        const { games } = this.props;
        let tmp = Object.assign({}, games[key]);

        this.setState({
            currentGame: tmp,
            newGame: false,
        });
    }

    newGameHandler = () => {
        this.setState({
            currentGame: {
                name: '',
                img: '',
            },
            newGame: true,
        });
    }

    renderNewGame() {
        const { classes } = this.props;
        const { currentGame, newGame } = this.state;

        if (!currentGame) {
            return (
                <div
                    className={classes.currentGameEmpty}>
                    <Typography className={classes.noGamesText} variant='h4'>Aucun jeu séléctionné</Typography>
                    <Icon className={classes.noGamesIcon}>videogame_asset</Icon>
                </div>
            );
        }
        return (
            <div className={classes.newGamesContainer}>
                <div className={classes.gamesInputContainer}>
                    <TextField
                        label="Nom du jeu"
                        value={currentGame.name}
                        onChange={this.currentGameNameHandler}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="URL de l'image du jeu"
                        value={currentGame.img}
                        onChange={this.currentGameImgHandler}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className={classes.previewContainer}>
                    <Paper
                        className={classes.gameDivPreview}>
                        <img className={classes.gameImage} alt={currentGame.name} src={currentGame.img} />
                        <Typography variant='h5' className={classes.gameName}>{currentGame.name}</Typography>
                    </Paper>
                </div>
                <div className={classes.gamesButtonContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={(!currentGame.name || !currentGame.img) ? true : false}
                        onClick={this.saveGameHandler}>
                        {newGame ? <Typography>Créer</Typography> : <Typography>Modifier</Typography>}
                    </Button>
                    {!newGame ?
                        <Button
                            variant="contained"
                            color='primary'
                            className={classes.deleteGameButton}
                            onClick={this.deleteHandler}>
                            Supprimer le jeu
                    </Button> : <div></div>}
                </div>
            </div>
        );
    }

    renderGames() {
        const { classes, gamesLoading, games } = this.props;

        if (gamesLoading) {
            return (
                <div className={classes.gamesLoading}>
                    <CircularProgress color="primary" />
                </div>
            );
        }
        return (
            <div className={classes.gamesContainer}>
                {games.map((value, key) => {
                    return (
                        <Paper
                            key={key}
                            className={classes.gameDiv}
                            onClick={() => this.gameHandler(key)}>
                            <img className={classes.gameImage} alt={value.name} src={value.img} />
                            <Typography variant='subtitle2' className={classes.gameName}>{value.name}</Typography>
                        </Paper>
                    );
                })}
                <Paper className={classes.gameDivEmpty}>
                    <div className={classes.gameDivNew}>
                        <IconButton
                            onClick={this.newGameHandler}>
                            <Icon fontSize='large'>add</Icon>
                        </IconButton>
                    </div>
                </Paper>
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                {this.renderGames()}
                {this.renderNewGame()}
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        paddingTop: '2%',
        paddingBottom: '2%',
        height: '98%',
        minHeight: 700,
        maxHeight: 700,
    },
    gamesContainer: {
        display: 'flex',
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxHeight: 700,
        overflow: 'auto',
        borderRight: '1px solid #9e9e9e',
    },
    newGamesContainer: {
        display: 'flex',
        width: '46%',
        height: '100%',
        paddingLeft: '2%',
        paddingRight: '2%',
        flexDirection: 'column',
    },
    gamesInputContainer: {
        display: 'flex',
        width: '100%',
        height: '30%',
        flexDirection: 'column',
    },
    previewContainer: {
        display: 'flex',
        width: '100%',
        height: '65%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    gamesButtonContainer: {
        display: 'flex',
        width: '100%',
        height: '5%',
        flexDirection: 'row-reverse',
    },
    gamesLoading: {
        display: 'flex',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRight: '1px solid #9e9e9e',
    },
    gameDiv: {
        display: 'flex',
        width: '18%',
        minWidth: 138,
        height: 190,
        marginBottom: 20,
        marginLeft: '5.5%',
        flexDirection: 'column',
        cursor: 'pointer',
    },
    gameDivPreview: {
        display: 'flex',
        width: '36%',
        minWidth: 276,
        height: 380,
        flexDirection: 'column',
    },
    gameDivEmpty: {
        display: 'flex',
        width: '18%',
        minWidth: 138,
        height: 190,
        marginBottom: 20,
        marginLeft: '5.5%',
        flexDirection: 'column',
    },
    gameImage: {
        display: 'flex',
        width: '100%',
        height: '90%',
    },
    gameName: {
        display: 'flex',
        width: '100%',
        height: '10%',
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'auto',
    },
    gameDivNew: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentGameEmpty: {
        display: 'flex',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    noGamesText: {
        color: '#9e9e9e',
        textAlign: 'center',
    },
    noGamesIcon: {
        color: '#9e9e9e',
        textAlign: 'center',
        fontSize: 70,
    },
    deleteGameButton: {
        marginRight: 10,
    },
});

const mapStateToProps = (state) => {
    return {
        games: state.games.games,
        gamesLoading: state.games.gamesLoading,
    };
};

export default connect(mapStateToProps, {
    createGames,
    getGames,
    updateGames,
    deleteGames,
})(withStyles(styles)(GamesComponent));