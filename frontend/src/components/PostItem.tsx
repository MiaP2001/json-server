import { useState } from "react";

interface PostItemProps {
  title: string;
  views: number;
}

const PostItem = ({ title, views }: PostItemProps) => {
  const [viewCount, setViewCount] = useState<number>(views);

  const handleIncreaseViews = () => {
    setViewCount((prev) => prev + 1);
  };

  return (
    <li>
      {title} - {viewCount} views
      <button onClick={handleIncreaseViews} style={{ marginLeft: "10px" }}>
        +1 view
      </button>
    </li>
  );
};

export default PostItem;
