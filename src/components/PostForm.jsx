import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="Description"
      />
      <MyButton type="submit" onClick={addNewPost}>
        Create post
      </MyButton>
    </form>
  );
}

export default PostForm;
