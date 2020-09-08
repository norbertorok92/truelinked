import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import PostPage from './pages/PostPage/PostPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/post" component={PostPage} />
      </Switch>
    </Router>
  );
}

export default App;
