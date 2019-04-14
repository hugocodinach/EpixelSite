import React, { Component } from 'react';
import routes from './routes/routes';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import reducers from './reducers/';
import ReduxThunk from 'redux-thunk';
import theme from './style/theme';
import AppBar from './components/common/appBar'

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => {
                if (route.appBar) {
                    return (
                        <div>
                            <AppBar />
                            <route.component isExact {...props} routes={route.routes} />
                        </div>
                    )
                }
                return (
                    <route.component isExact {...props} routes={route.routes} />
                );
            }}
        />
    );
}

class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <StoreProvider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Switch>
                            {routes.map((route, i) => {
                                return (
                                    <RouteWithSubRoutes key={i} {...route} />
                                );
                            })}
                            <Redirect from={'/'} to={'/login'} />
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </StoreProvider>
        );
    }
}

export default App;