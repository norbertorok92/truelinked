import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import PostPage from './pages/PostPage/PostPage';
import SingleAuthorPage from './pages/SingleAuthorPage/SingleAuthorPage';
import AuthorPostsPage from './pages/AuthorPostsPage/AuthorPostsPage';
import AuthorsPage from './pages/AuthorsPage/AuthorsPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const { Content } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Navigation />
        <Content className="AppContent">
          <Switch>
            <Route path="/" exact component={DashboardPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/post/:postId" component={PostPage} />
            <Route
              path="/profile/:userId"
              component={SingleAuthorPage}
            />
            <Route path="/authors" component={AuthorsPage} />
            <Route
              path="/posts/:userName/:userId"
              component={AuthorPostsPage}
            />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
