import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, Button, Paper, Typography } from '@material-ui/core';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class GamesDialogComponent extends React.Component {

    state = {
        gamesSelected: [this.props.games.length].fill(false),
    }

    handleGameClicked = (key) => {
        const { gamesSelected } = this.state;
        let tmp = gamesSelected.slice();
        tmp[key] = !tmp[key];

        this.setState({
            gamesSelected: tmp
        });
    }

    render() {
        const { classes, close, open, games } = this.props;
        const { gamesSelected } = this.state;

        return (
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={close}
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
                            className={(gamesSelected[key]) ? classes.paperSelected : classes.paper}>
                                <img className={classes.gameImg} alt={value.name} src={value.img} />
                                <Typography variant='subtitle2' className={classes.gameName}>{value.name}</Typography>
                            </Paper>
                        );
                    })}
                </div>
                <DialogActions>
                    <Button variant="contained" onClick={close} color="primary">
                        Annuler
                    </Button>
                    <Button variant="contained" onClick={close} color="secondary">
                        Confirmer
                    </Button>
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
        maxHeight: 300,
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
    };
};

export default connect(mapStateToProps, {
})(withStyles(styles)(GamesDialogComponent));