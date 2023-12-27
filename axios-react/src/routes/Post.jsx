import "./Post.css";

import blogFetch from "../axios/config";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setpost] = useState({});

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);
      const data = response.data

      setpost(data)
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
