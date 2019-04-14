import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Icon, Card, CardMedia, CardContent, CardActionArea, Paper, Button } from '@material-ui/core';

import Wallpaper from '../../img/homeWallpaper.jpg'
import Camille from '../../img/camilleMonjo.jpg'
import Chris from '../../img/ChrisCarter.jpg'
import Concept from '../../img/conceptImage.jpg'
import Games from '../../img/gamesWallpaper.png'
import Facebook from '../../img/facebook.png'
import Instagram from '../../img/instagram.png'
import Messenger from '../../img/messenger.png'

class HomeComponent extends React.Component {

    state = {
    };

    scrollHandle = () => {
        this.refs.scrollTo.scrollIntoView({behavior: 'smooth'});
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        Bienvenue sur Epixel
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.infoButton}
                    onClick={this.scrollHandle}>
                        Informations
                    </Button>
                </div>
                <div className={classes.bannerContainer}>
                    <div className={classes.iconTitleContainer}>
                        <Icon className={classes.iconTitleFont}>group</Icon>
                        <Typography className={classes.iconTitleFont}>Équipes</Typography>
                    </div>
                    <div className={classes.iconTitleContainer}>
                        <Icon className={classes.iconTitleFont}>assessment</Icon>
                        <Typography className={classes.iconTitleFont}>Tournois</Typography>
                    </div>
                    <div className={classes.iconTitleContainer}>
                        <Icon className={classes.iconTitleFont}>settings_input_hdmi</Icon>
                        <Typography className={classes.iconTitleFont}>Lan</Typography>
                    </div>
                </div>
                <div ref='scrollTo'  className={classes.whoContainer}>
                    <Card className={classes.whoBox}>
                        <CardActionArea onClick={()=> window.open("https://www.facebook.com/camille.monjo", "_blank")}>
                            <CardMedia
                                image={Camille}
                                title="Camille Monjo"
                                className={classes.whoBoxImage}
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography className={classes.colorWhite} gutterBottom variant="h5" component="h2">
                                    Camille MONJO
                            </Typography>
                                <Typography className={classes.colorWhite} component="p">
                                    Responsable - Epixel | Étudiant EPITECH Promo 2022 | Front-End developper - MPL
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.whoBox}>
                        <CardActionArea onClick={()=> window.open("https://www.facebook.com/enthustiastic.it", "_blank")}>
                            <CardMedia
                                image={Chris}
                                title="Chris CARTER"
                                className={classes.whoBoxImage}
                            />
                            <CardContent className={classes.CardContent}>
                                <Typography className={classes.colorWhite} gutterBottom variant="h5" component="h2">
                                    Chris CARTER
                            </Typography>
                                <Typography className={classes.colorWhite} component="p">
                                    Responsable relation - Epixel | Étudiant EPITECH Promo 2021 | SBM - Red Bull
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className={classes.conceptContainer}>
                    <Paper className={classes.conceptPaper}>
                        <div className={classes.conceptTextContainer}>
                            <Typography className={classes.conceptTitle} variant="h3">Le concept</Typography>
                            <div className={classes.conceptParaphContainer}>
                                <Typography className={classes.colorWhite} variant="h4">• Création d’équipes Epitech</Typography>
                                <Typography className={classes.colorWhite} variant="h4">• Tournois inter-scolaire</Typography>
                                <Typography className={classes.colorWhite} variant="h4">• LAN mensuelle</Typography>
                            </div>
                        </div>
                        <img src={Concept} alt='concept' className={classes.conceptImg} />
                    </Paper>
                </div>
                <div className={classes.gamesContainer}>
                    <Paper className={classes.conceptPaper}>
                        <div className={classes.conceptTextContainer}>
                            <Typography className={classes.conceptTitle} variant="h1">Les Jeux</Typography>
                        </div>
                        <img src={Games} alt='games' className={classes.conceptImg} />
                    </Paper>
                </div>
                <div className={classes.socialContainer}>
                    <Button onClick={()=> window.open("https://www.facebook.com/EpixelMontpellier/", "_blank")}>
                        <img alt='Facebook' src={Facebook} />
                    </Button>
                    <Button onClick={()=> window.open("https://www.instagram.com/?hl=fr", "_blank")}>
                        <img alt='Instagram' src={Instagram} />
                    </Button>
                    <Button onClick={()=> window.open("https://www.messenger.com/t/EpixelMontpellier", "_blank")}>
                        <img alt='Messenger' src={Messenger} />
                    </Button>
                </div>
                <div className={classes.epixelContainer}>
                    <Typography className={classes.colorWhite} variant="h3">@EpixelMontpellier</Typography>
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
        backgroundColor: theme.palette.home.primary,
    },
    titleContainer: {
        display: 'flex',
        width: '100%',
        height: 930,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${Wallpaper})`,
        borderBottomWidth: '5px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.home.secondary,
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: '6vw'
    },
    bannerContainer: {
        display: 'flex',
        width: '60%',
        height: '100%',
        marginLeft: '20%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconTitleContainer: {
        display: 'flex',
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    iconTitleFont: {
        color: 'white',
        fontSize: 30,
    },
    whoContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 50,
        cursor: 'default',
    },
    whoBox: {
        display: 'flex',
        width: '30%',
        height: '100%',
    },
    whoBoxImage: {
        height: 400,
    },
    CardContent: {
        background: 'linear-gradient(to bottom, #172938, #104457)',
    },
    colorWhite: {
        color: 'white',
    },
    conceptContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row-reverse',
    },
    conceptPaper: {
        display: 'flex',
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        background: 'linear-gradient(45deg, #172938 30%, #104457 90%)',
        marginTop: 50,
    },
    conceptTextContainer: {
        display: 'flex',
        width: '40%',
        height: '100%',
        flexDirection: 'column',
        paddingTop: 50,
        paddingLeft: 50,
    },
    conceptImg: {
        display: 'flex',
        width: '60%',
        height: '100%',
    },
    conceptTitle: {
        display: 'flex',
        color: 'white',
        fontWeight: 500,
        marginBottom: 100,
    },
    conceptParaphContainer: {
        display: 'flex',
        width: '100%',
        height: 300,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    gamesContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    socialContainer: {
        display: 'flex',
        width: '80%',
        height: '100%',
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 100,
    },
    epixelContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    infoButton: {
        display: 'flex',
        width: '10%',
        height: '5%',
    },
    '@media (max-width: 400px)': {
        title: {
            fontSize: 25,
        }
    }
});

export default withStyles(styles)(HomeComponent);