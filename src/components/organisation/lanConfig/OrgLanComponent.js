import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    TextField, Select, FormControl, InputLabel, OutlinedInput, Icon, Fab, Button
} from '@material-ui/core'

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

    renderGamePart() {
        const { classes } = this.props;

        return (
            <div className={classes.gamePartContainer}>

            </div>
        );
    }

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
                            {games.map((value, key) => {
                                return <option value={value} key={key}>{value}</option>
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
                <GamesDialogComponent open={gameDialogOpen} close={this.handleGameDialog}/>
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.contentContainer}>
                    {this.renderLanPart()}
                    {this.renderGamePart()}
                </div>
                <div className={classes.bottomContainer}>
                    <Button variant='contained' color='secondary'>
                        Sauvegarder
                    </Button>
                </div>
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
        width: '50%',
        height: '100%',
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
});

const mapStateToProps = (state) => {
    return {
        lan: state.lan.lan,
    };
};

export default connect(mapStateToProps, {
})(withStyles(styles)(OrgLanComponent));