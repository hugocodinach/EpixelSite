import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import { getPhotos } from '../../actions';

class PhotoComponent extends React.Component {

    componentDidMount() {
        const { getPhotos } = this.props;

        getPhotos();
    }

    render() {
        const { classes, photos } = this.props;

        return (
            <div className={classes.container}>
                {photos.map((value, key) => {
                    return (
                        <Paper
                        key={key}
                        className={classes.paper}>
                            <img
                            key={key}
                            src={value}
                            alt='Lan'
                            className={classes.image}/>
                        </Paper>
                    );
                })}
            </div>
        );
    }
}

const styles = theme => ({
    container: {
        display: 'flex',
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginLeft: '10%',
        paddingTop: 10,
    },
    paper: {
        display: 'flex',
        width: '30%',
        marginBottom: 10,
    },
    image: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
});

const mapStateToProps = (state) => {
    return {
        photos: state.photos.photos,
    };
};

export default connect(mapStateToProps, {
    getPhotos,
})(withStyles(styles)(PhotoComponent));