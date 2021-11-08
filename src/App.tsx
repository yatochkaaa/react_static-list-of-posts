import React from 'react';
import './App.scss';
import { PostList } from './components/PostList/PostList';

import comments from './api/comments';
import users from './api/users';
import posts from './api/posts';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postsArray={preparedPosts} />
  </div>
);

export default App;
