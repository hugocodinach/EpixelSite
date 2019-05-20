import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    TextField, Select, FormControl, InputLabel, OutlinedInput, Icon, Fab, Button, Typography, CircularProgress
} from '@material-ui/core'

import { updateLan } from '../../../actions/index';

import GamesDialogComponent from './GamesDialogComponent';

class OrgLanComponent extends React.Component {

    state = {
        name: '',
        date: '',
        games: [],
        currentGame: '',
        gameDialogOpen: false,
    }

    componentDidMount() {
        const { lan } = this.props;

        this.setState({
            name: lan.name,
            date: lan.date.toString().slice(0, 10),
            games: lan.games
        });
    }

    handleGameDialog = () => {
        const { gameDialogOpen } = this.state;
        const { lan } = this.props;

        if (gameDialogOpen) {
            this.setState({
                gameDialogOpen: !gameDialogOpen,
                games: lan.games,
                currentGame: '',
            });
            return;
        }
        this.setState({
            gameDialogOpen: !gameDialogOpen,
        })
    }

    handleName = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleDate = event => {
        this.setState({
            date: event.target.value
        });
    }

    handleCurrentGame = event => {
        this.setState({
            currentGame: event.target.value
        });
    }

    handleSave = () => {
        const { updateLan, lan } = this.props;
        const { name, date, games } = this.state;

        updateLan({ ...lan, name: name, date: date, games: games }, () => {
            this.setState({
                name: lan.name,
                date: lan.date.toString().slice(0, 10),
                games: lan.games
            });
        });
    };

    handleTeamSize = event => {
        const { lan } = this.props;
        const { currentGame } = this.state;
        let obj = { ...lan };

        for (let i = 0; i != obj.games.length; i += 1) {
            if (obj.games[i]._id === currentGame) {
                obj.games[i].teamSize = parseInt(event.target.value);
                continue;
            }
        }
        this.setState({
            lan: obj
        });
    }

    getGameById = id => {
        const { games } = this.props;

        for (let i = 0; i < games.length; i += 1)
            if (games[i]._id === id)
                return games[i];
        return {};
    }

    renderGamePart() {
        const { classes, lan } = this.props;
        const { currentGame } = this.state;
        let obj = {};

        for (let i = 0; i != lan.games.length; i += 1) {
            if (lan.games[i]._id === currentGame) {
                obj = { ...lan.games[i] };
                continue;
            }
        }

        return (
            <div className={classes.gamePartContainer}>
                <TextField
                    label="Taille des équipes"
                    value={obj.teamSize}
                    type='number'
                    onChange={this.handleTeamSize}
                    margin="normal"
                    variant="outlined"
                />
            </div>
        );
    }

    renderGamePreview() {
        const { classes } = this.props;
        const { currentGame } = this.state;
        let obj = this.getGameById(currentGame);

        return (
            <div className={classes.gamePreviewContainer}>
                <img className={classes.gameImgPreview}
                    src={obj.img}
                    alt='img' />
                <Typography variant='subtitle2' className={classes.gameName}>{obj.name}</Typography>
            </div>
        )
    };

    renderLanPart() {
        const { classes } = this.props;
        const { name, date, games, currentGame, gameDialogOpen } = this.state;

        return (
            <div className={classes.lanPartContainer}>
                <TextField
                    label="Nom de la Lan"
                    value={name}
                    onChange={this.handleName}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Date"
                    value={date}
                    onChange={this.handleDate}
                    margin="normal"
                    variant="outlined"
                    type='date'
                    InputLabelProps={{ shrink: true }}
                />
                <div className={classes.gameSelectContainer}>
                    <FormControl
                        variant="outlined"
                        className={classes.gameSelect}>
                        <InputLabel
                            ref={ref => {
                                this.InputLabelRef = ref;
                            }}
                            htmlFor="outlined-age-native-simple"
                        >Game</InputLabel>
                        <Select
                            native
                            value={currentGame}
                            onChange={this.handleCurrentGame}
                            input={
                                <OutlinedInput
                                    name="Game"
                                    labelWidth={40}
                                    id="outlined-age-native-simple"
                                />
                            }
                        >
                            <option value=''></option>
                            {games.map((value, key) => {
                                return <option value={value._id} key={key}>{this.getGameById(value._id).name}</option>
                            })}
                        </Select>
                    </FormControl>
                    <Fab
                        color='secondary'
                        size='small'
                        onClick={this.handleGameDialog}>
                        <Icon>add</Icon>
                    </Fab>
                </div>
                {(currentGame) ? this.renderGamePreview() : null}
                {(gameDialogOpen) ? <GamesDialogComponent close={this.handleGameDialog} /> : false}
            </div>
        );
    }

    renderLan() {
        const { classes } = this.props;
        const { currentGame } = this.state;

        return (
            <div className={classes.container}>
                <div className={classes.contentContainer}>
                    {this.renderLanPart()}
                    {(currentGame) ? this.renderGamePart() : null}
                </div>
                <div className={classes.bottomContainer}>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={this.handleSave}>
                        Sauvegarder
                    </Button>
                </div>
            </div>
        );
    }

    renderLoading() {
        const { classes } = this.props;

        return (
            <div className={classes.loadingContainer}>
                <CircularProgress color='secondary' />
            </div>
        )
    }

    render() {
        const { classes, updateLoading } = this.props;

        return (
            <div className={classes.container}>
                {(updateLoading) ? this.renderLoading() : this.renderLan()}
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    contentContainer: {
        display: 'flex',
        width: '100%',
        height: '90%',
        minHeight: 700,
    },
    loadingContainer: {
        display: 'flex',
        width: '100%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 700,
    },
    bottomContainer: {
        display: 'flex',
        width: '96%',
        height: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',
        flexDirection: 'row-reverse',
    },
    lanPartContainer: {
        display: 'flex',
        width: '38%',
        height: '97%',
        flexDirection: 'column',
        paddingLeft: '2%',
        paddingRight: '10%',
        paddingTop: '3%',
    },
    gamePartContainer: {
        display: 'flex',
        width: '38%',
        height: '97%',
        flexDirection: 'column',
        paddingLeft: '2%',
        paddingRight: '10%',
        paddingTop: '3%',
    },
    gameSelectContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginTop: 15,
    },
    gameSelect: {
        display: 'flex',
        width: '80%',
        marginRight: '5%',
    },
    gamePreviewContainer: {
        display: 'flex',
        width: '40%',
        marginLeft: '25%',
        marginTop: 50,
        flexDirection: 'column',
        alignItems: 'center',
    },
    gameImgPreview: {
        display: 'flex',
        width: '100%',
        height: '90%',
    },
});

const mapStateToProps = (state) => {
    return {
        lan: state.lan.lan,
        updateLoading: state.lan.updateLoading,
        games: state.games.games,
    };
};

export default connect(mapStateToProps, {
    updateLan,
})(withStyles(styles)(OrgLanComponent));