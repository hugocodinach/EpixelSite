import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

import Wallpaper from '../../img/loginWallpaper.jpg';
import { Typography, TextField, Button } from '@material-ui/core';

class SignInComponent extends React.Component {

    state = {
        name: '',
        password: '',
        passwordVerif: '',
        isLogged: false,
    };

    nameHandler = event => {
        this.setState({
            name: event.target.value
        });
    };

    passwordHandler = event => {
        this.setState({
            password: event.target.value
        });
    };

    passwordVerifHandler = event => {
        this.setState({
            passwordVerif: event.target.value
        });
    }

    connexionHandler = () => {
        this.setState({
            isLogged: true,
        });
    }

    render() {
        const { classes } = this.props;
        const { name, password, passwordVerif, isLogged } = this.state;

        if (isLogged)
            return <Redirect to='/home' />

        return (
            <div className={classes.container}>
                <div className={classes.wallpaperContainer}>
                </div>
                <div className={classes.boxContainer}>
                    <div className={classes.titleContainer}>
                        <Typography className={classes.title}>
                            Epixel
                    </Typography>
                    </div>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            label="Identifiant"
                            InputLabelProps={{ classes: { root: classes.textField } }}
                            InputProps={{ classes: { input: classes.textField } }}
                            value={name}
                            onChange={this.nameHandler}
                            fullWidth
                        />
                    </div>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            label="Mot de passe"
                            InputLabelProps={{ classes: { root: classes.textField } }}
                            InputProps={{ classes: { input: classes.textField } }}
                            value={password}
                            onChange={this.passwordHandler}
                            type="password"
                            fullWidth
                        />
                    </div>
                    <div className={classes.textFieldContainer}>
                        <TextField
                            label="Confirmer le mot de passe"
                            InputLabelProps={{ classes: { root: classes.textField } }}
                            InputProps={{ classes: { input: classes.textField } }}
                            value={passwordVerif}
                            onChange={this.passwordVerifHandler}
                            type="password"
                            fullWidth
                        />
                    </div>
                    <div className={classes.connexionButtonContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.connexionButton}
                            onClick={this.connexionHandler}
                            disabled={(!name || !password || !passwordVerif) ? true : false}>
                            Se connecter
                        </Button>
                    </div>
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
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
    },
    wallpaperContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundImage: `url(${Wallpaper})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    },
    boxContainer: {
        display: 'flex',
        width: '30%',
        minWidth: 360,
        height: '97vh',
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        backgroundColor: 'white',
        zIndex: 10,
    },
    titleContainer: {
        display: 'flex',
        width: '100%',
        marginBottom: "10%",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    textFieldContainer: {
        display: 'flex',
        width: '100%',
        marginTop: '10%',
    },
    textField: {
        fontSize: 20,
    },
    connexionButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30%',
    },
    connexionButton: {
        width: '30%',
        minWidth: 135,
    },
});

export default withStyles(styles)(SignInComponent);