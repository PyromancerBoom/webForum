import React, { useEffect, useState } from 'react';
import PostCard from './components/PostCard';
import PostForm from './components/PostForm';

interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/posts')
      .then(response => response.json())
      .then(setPosts);
  }, []);

  const handleSubmit = (title: string, author: string, content: string) => {
    fetch('http://127.0.0.1:8080/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, content }),
    })
      .then(response => response.json())
      .then((newPost: Post) => setPosts(oldPosts => [...oldPosts, newPost]));
  };

  return (
    <div>
      <PostForm onSubmit={handleSubmit} />
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} author={post.author} content={post.content} />
      ))}
    </div>
  );
}

export default App;