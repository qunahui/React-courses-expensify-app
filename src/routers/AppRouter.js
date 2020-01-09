import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenDashboardPage from '../components/ExpenDashboardPage';
import AddExpenPage from '../components/AddExpenPage';
import EditExpenPage from '../components/EditExpenPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenDashboardPage} />
                <PrivateRoute path="/create" component={AddExpenPage} />
                <PrivateRoute path="/edit/:id" component={EditExpenPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;