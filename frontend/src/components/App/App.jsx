import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import Widgets from '../../containers/Widgets/Widgets';
import {withStyles} from 'material-ui/styles';

const styles = {};

class App extends Component {
    render() {
        const {children} = this.props;
        return <Grid container justify="center" style={{width: "100%", margin: 0}}>
            <Grid style={{paddingBottom: 16}} container justify="center">
                <Hidden smDown>
                    <Grid item sm={12} md={11} lg={9} xl={7}>
                        <Navigation/>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs={12}>
                        <NavigationMobile/>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={12} sm={7} md={8} lg={6} xl={5}>
                    <div className={"app"}>
                        {children}
                    </div>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={6} sm={5} md={3} lg={3} xl={2}>
                        <Widgets/>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>;
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);