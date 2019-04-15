import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Paper, CircularProgress, Icon, Tab, AppBar, Tabs } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { getLan } from '../../actions/index';

import AddLanComponent from './lanConfig/AddLanComponent';
import OrgLanComponent from './lanConfig/OrgLanComponent';
import GamesComponent from './games/GamesComponent';

class OrganisationComponent extends React.Component {

    componentDidMount() {
        const { getLan } = this.props;

        getLan();
    }

    state = {
        tabIndex: 0,
    }

    tabHandler = (event, value) => {
        this.setState({ tabIndex: value });
    };

    renderOrg() {
        const { lan } = this.props;

        if (lan)
            return <OrgLanComponent />
        return <AddLanComponent />
    }

    renderGetLoading() {
        return (
            <CircularProgress color='primary' />
        )
    }

    renderTab() {
        const { tabIndex } = this.state;
        const { classes, getLoading, lan } = this.props;

        if (tabIndex === 0) {
            return (
                <div className={(getLoading || !lan) ? classes.tabLanCentered : classes.tabContent}>
                    {(getLoading) ? this.renderGetLoading() : this.renderOrg()}
                </div>
            )
        }
        return <div className={classes.tabContent}></div>;
    }

    render() {
        const { classes, getLoading, lan } = this.props;
        const { tabIndex } = this.state;

        return (
            <div className={classes.container}>
                <Paper className={classes.paperContainer}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={tabIndex}
                            onChange={this.tabHandler}
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Lan config" icon={<Icon>settings</Icon>} />
                            <Tab label="Jeux" icon={<Icon>games</Icon>} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={'x'}
                        index={tabIndex}
                    >
                        <div className={(getLoading || !lan) ? classes.tabLanCentered : classes.tabContent}>
                            {(getLoading) ? this.renderGetLoading() : this.renderOrg()}
                        </div>
                        <GamesComponent />
                    </SwipeableViews>
                </Paper>
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paperContainer: {
        display: 'flex',
        width: '90%',
        height: '100%',
        marginTop: 30,
        flexDirection: 'column',
    },
    tabContent: {
        display: 'flex',
        width: '100%',
        minHeight: 700,
    },
    tabLanCentered: {
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight: 700,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = (state) => {
    return {
        lan: state.lan.lan,
        getLoading: state.lan.getLoading
    };
};

export default connect(mapStateToProps, {
    getLan
})(withStyles(styles)(OrganisationComponent));