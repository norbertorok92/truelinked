import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import PostPage from './pages/PostPage/PostPage';
import AuthorPage from './pages/AuthorPage/AuthorPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const { Content } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Navigation />
        <Content className="AppContent" style={{ padding: '0 50px' }}>
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/post/:postId" component={PostPage} />
            <Route path="/profile/:userId" component={AuthorPage} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
