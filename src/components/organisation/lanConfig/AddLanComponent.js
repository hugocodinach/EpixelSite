import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Button, Icon } from '@material-ui/core';

import { createLan } from '../../../actions/index';

class AddLanComponent extends React.Component {

    handleCreate = () => {
        const { createLan } = this.props;

        createLan();
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={this.handleCreate}>
                    Créer une LAN
                    <Icon className={classes.addIcon}>add_circle</Icon>
                </Button>
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
    addIcon: {
        marginLeft: 10
    }
});

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, {
    createLan
})(withStyles(styles)(AddLanComponent));