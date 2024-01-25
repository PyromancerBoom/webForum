import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import PostForm from './components/PostForm';
import PostCard from './components/PostCard';
import { getPosts, createPost } from '../api/posts';
import theme from './theme';

interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (title: string, author: string, content: string) => {
    try {
      const newPost = await createPost({ title, author, content });
      setPosts(oldPosts => [...oldPosts, newPost]);
    } catch (error) {
      console.error('Failed to create post:', error);
    }
  };

  return (
    <div>
       <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostForm onSubmit={handleSubmit} />
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} author={post.author} content={post.content} />
      ))}
      </ThemeProvider>
    </div>
  );
}

export default App;