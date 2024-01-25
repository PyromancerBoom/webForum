import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface PostCardProps {
  title: string;
  author: string;
  content: string;
}

function PostCard({ title, author, content }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1">
          {author}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;