import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenDashboardPage from '../components/ExpenDashboardPage';
import AddExpenPage from '../components/AddExpenPage';
import EditExpenPage from '../components/EditExpenPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenDashboardPage} exact={true} />
                <Route path="/create" component={AddExpenPage} />
                <Route path="/edit/:id" component={EditExpenPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;