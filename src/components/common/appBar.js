import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar, Typography, AppBar, Button, Icon } from '@material-ui/core';
import { Link } from "react-router-dom";

import routes from '../../routes/routes';

class AppBarComponent extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.titleContainer}>
                        <Typography variant="h6" color="inherit">
                            Epixel
                        </Typography>
                    </div>
                    <div className={classes.tabContainer}>
                        {routes.map((route, key) => {
                            if (route.appBarTab) {
                                return (
                                    <Link
                                    key={key}
                                    to={route.path}
                                    className={classes.tabButton}>
                                        <Button
                                            key={key}
                                            color='secondary'
                                            fullWidth>
                                            {route.name}
                                            <Icon
                                            className={classes.tabIcon}>
                                            {route.icon}
                                            </Icon>
                                        </Button>
                                    </Link>
                                );
                            }
                            return (<div key={key} />);
                        })}
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        display: 'flex',
        width: '20%',
        height: '100%',
    },
    tabContainer: {
        display: 'flex',
        width: '70%',
        minWidth: 347,
        height: '100%',
        justifyContent: 'space-evenly',
    },
    tabButton: {
        textDecoration: 'none',
        marginRight: 10,
        width: '15%',
    },
    tabIcon: {
        marginLeft: 10,
        fontSize: 20,
    },
});

export default withStyles(styles, { withTheme: true })(AppBarComponent);