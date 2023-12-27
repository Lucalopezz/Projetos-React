import "./NewPost.css";

import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import blogFetch from "../axios/config";

const NewPost = () => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();

  const createPost = async (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const bodyValue = bodyRef.current.value;

    const post = { titleValue, bodyValue, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });
    navigate('/')
  };

  return (
    <div className="new-post">
      <h2>Insirir novo Post:</h2>

      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            ref={titleRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            ref={bodyRef}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
