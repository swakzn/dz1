import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsList from './pages/PostsList';
import CreatePost from './pages/CreatePost';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Route path="/" component={PostsList} />
                <Route path="/create" component={CreatePost} />
            </Layout>
        </Router>
    );
}

export default App;
