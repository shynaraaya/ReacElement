import React, { useState, useEffect } from 'react';
import { Post } from '../../types/interfaces'
import { NavLink, useParams } from 'react-router-dom';
import './postDetail.scss';

const PostDetail = () => {
  const [post, setPost] = useState<Post>()
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  return (
    <div className="PostDetail">
      <div className="post-detail">
        {post ?
          <article className="post-detail-body">
            <h2>id: {post.id}</h2>
            <h2>title: {post.title}</h2>
            <h2>price: {post.price}</h2>
            <p className="post-detail-body">{post.description}</p>
          </article>
          : null
        }
      </div>
      <NavLink to="/">
        <button className="PostItem-btn">Back</button>
      </NavLink>
    </div>
  );
}

export default PostDetail;
