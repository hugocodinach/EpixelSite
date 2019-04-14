import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

class LanComponent extends React.Component {

    state = {
        games: ["https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-285x380.jpg", "https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-285x380.jpg", "https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019-285x380.jpg", "https://static-cdn.jtvnw.net/ttv-boxart/Rocket%20League-285x380.jpg", "https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-285x380.jpg"],
    };

    render() {
        const { classes } = this.props;
        const { games } = this.state;

        return (
            <div className={classes.container}>
                <div className={classes.lanTitleContainer}>
                    <Typography className={classes.lanTitle} variant="h4">
                        Lan du 17 Avril :
                    </Typography>
                    <Typography className={classes.lanSubtitle} variant="subtitle1">
                        Liste des jeux
                    </Typography>
                </div>
                <div className={classes.gameContainer}>
                    {games.map((value, key) => {
                        return (
                            <Paper
                                key={key}
                                className={classes.paper}>
                                <img
                                    key={key}
                                    src={value}
                                    alt='game'
                                    className={classes.image} />
                            </Paper>
                        );
                    })}
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
    lanTitleContainer: {
        display: 'flex',
        width: '90%',
        flexDirection: 'column',
        marginTop: 20,
        paddingLeft: '10%',
    },
    lanTitle: {
        fontWeight: 500,
        color: theme.typography.blackColor,
        marginBottom: 10,
    },
    lanSubtitle: {
        fontWeight: 500,
        color: theme.typography.blackColor,
    },
    gameContainer: {
        display: 'flex',
        width: '90%',
        marginLeft: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    paper: {
        display: 'flex',
        width: '17%',
        marginTop: 20,
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

export default withStyles(styles)(LanComponent);