const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/**
 * Get back the Forums posts from the Go backend server.
 * @returns  the list of posts
 */
export async function getPosts() {
  console.log("Reached here: " + SERVER_URL);
  const response = await fetch(`${SERVER_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

/**
 * Create a new post on the Go backend server.
 * @param post    the post to create
 * @returns  the newly created post
 */
export async function createPost(post: { title: string; author: string; content: string }) {
  const response = await fetch(`${SERVER_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  return response.json();
}