import React, { useState, useEffect } from "react";
import { Post } from "../../types/interfaces";
import { Link, NavLink } from 'react-router-dom'
import "./posts.css";

const Posts: React.FunctionComponent = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="Posts">
      <div className="posts-list">
        {posts.map((post) => (
          <article className="posts-item">
            <Link to={`../postdetail/${post.id}`}><h3>{post.title}</h3></Link>
            <div className="post-item-body">{post.description}</div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
