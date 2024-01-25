import React from 'react';

interface PostCardProps {
  title: string;
  author: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, author, content }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <h3 className="post-author">Posted by: {author}</h3>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default PostCard;