import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Wallpaper from '../../img/loginWallpaper.jpg';
import { Typography, TextField, Button, CircularProgress, Snackbar, Icon, IconButton } from '@material-ui/core';
import { connectUser, disableError, triggerLoginLoading } from '../../actions';

class LoginComponent extends React.Component {

    state = {
        name: '',
        password: '',
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

    connexionHandler = () => {
        const { connectUser, triggerLoginLoading } = this.props;
        const { name, password } = this.state;

        triggerLoginLoading();
        connectUser(name, password);
    }

    render() {
        const { classes, token, loginLoading, error, disableError } = this.props;
        const { name, password } = this.state;

        if (token)
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
                            onKeyDown={(e) => { if (e.key === 'Enter') this.connexionHandler()}}
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
                            onKeyDown={(e) => { if (e.key === 'Enter') this.connexionHandler()}}
                            type="password"
                            fullWidth
                        />
                    </div>
                    <div className={classes.connexionButtonContainer}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.connexionButton}
                            onClick={this.connexionHandler}
                            disabled={(!name || !password) ? true : false}>
                            {loginLoading ? <CircularProgress /> : <Typography>Se connecter</Typography>}
                        </Button>
                        <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={error}
                        autoHideDuration={6000}
                        onClose={disableError}
                        message={<span>Mauvais identifiant ou mot de passe</span>}
                        color='secondary'
                        ContentProps={{
                            classes: {
                                root: classes.snackbar
                            }
                        }}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={disableError}
                            >
                                <Icon>close</Icon>
                            </IconButton>,
                        ]}
                    />
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
        overflow: 'fixed',
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
        minWidth: 200,
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
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        minWidth: 135,
    },
    snackbar: {
        backgroundColor: theme.palette.error.main,
    }
});

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
        error: state.user.error,
        loginLoading: state.user.loginLoading,
    };
};

export default connect(mapStateToProps, {
    connectUser,
    disableError,
    triggerLoginLoading
})(withStyles(styles)(LoginComponent));