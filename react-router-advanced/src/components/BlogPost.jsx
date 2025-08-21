import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>Content for blog post {postId} goes here.</p>
    </div>
  );
}

export default BlogPost;