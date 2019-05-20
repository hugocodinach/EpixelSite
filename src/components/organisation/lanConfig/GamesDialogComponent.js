import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, Button, Paper, Typography } from '@material-ui/core';

import { updateLan } from '../../../actions/index';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class GamesDialogComponent extends React.Component {

    state = {
        gamesSelected: [],
    }

    componentDidMount() {
        const { gamesSelected } = this.state;
        const { games, lan } = this.props;
        let tmp = gamesSelected.slice();
        let pushed = false;

        for (let i = 0; i != games.length; i += 1) {
            pushed = false;
            for (let u = 0; u != lan.games.length; u += 1) {
                if (games[i]._id === lan.games[u]._id) {
                    tmp.push(true);
                    pushed = true;
                    continue;
                }
            }
            if (!pushed)
                tmp.push(false);
        }
        this.setState({
            gamesSelected: tmp,
        });
    }

    handleGameClicked = (key) => {
        const { gamesSelected } = this.state;
        let tmp = gamesSelected.slice();
        tmp[key] = !tmp[key];

        this.setState({
            gamesSelected: tmp
        });
    }

    handleClose = () => {
        const { close, games, lan, updateLan } = this.props;
        const { gamesSelected } = this.state;
        let newGames = [];

        for (let i = 0; i != gamesSelected.length; i += 1) {
            if (gamesSelected[i])
                newGames.push({_id: games[i]._id, teamSize: 1, challongeLink: ''});
        }
        updateLan({...lan, games: newGames}, () => close());
    }

    render() {
        const { classes, games } = this.props;
        const { gamesSelected } = this.state;

        return (
            <Dialog
                open={true}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
            >
                <DialogTitle>
                    Liste des jeux disponibles
                </DialogTitle>
                <div className={classes.contentContainer}>
                    {games.map((value, key) => {
                        return (
                            <Paper
                            key={key}
                            onClick={() => this.handleGameClicked(key)}
                            className={(gamesSelected && gamesSelected[key]) ? classes.paperSelected : classes.paper}>
                                <img className={classes.gameImg} alt={value.name} src={value.img} />
                                <Typography variant='subtitle2' className={classes.gameName}>{value.name}</Typography>
                            </Paper>
                        );
                    })}
                </div>
                <DialogActions>
                </DialogActions>
            </Dialog>
        );
    }
}

const styles = theme => ({
    contentContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 600,
        maxHeight: 600,
        overflow: 'auto',
    },
    paper: {
        display: 'flex',
        width: '18%',
        marginLeft: '1.6%',
        flexDirection: 'column',
        marginBottom: 10,
        cursor: 'pointer',
    },
    paperSelected: {
        display: 'flex',
        width: '17.3%',
        marginLeft: '1.6%',
        flexDirection: 'column',
        marginBottom: 8,
        cursor: 'pointer',
        border: '2px solid #0B1927',
    },
    gameImg: {
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
        overflow: 'hidden',
    },
});

const mapStateToProps = (state) => {
    return {
        games: state.games.games,
        lan: state.lan.lan,
    };
};

export default connect(mapStateToProps, {
    updateLan,
})(withStyles(styles)(GamesDialogComponent));