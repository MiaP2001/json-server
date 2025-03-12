import { useEffect, useState } from "react";
import PostItem from "./PostItem";

interface Post {
  id: number;
  title: string;
  views: number;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} title={post.title} views={post.views} />
      ))}
    </ul>
  );
};

export default PostList;
