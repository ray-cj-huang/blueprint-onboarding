import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  function addToFirebase() {
    firebase.firestore().collection('posts').add(post);
  }

  return (
    <>
      <div>
        <input placeholder="Title" onChange={(e) => setPost({ ...post, title: e.target.value })} />
      </div>
      <div>
        <input placeholder="Author" onChange={(e) => setPost({ ...post, author: e.target.value })} />
      </div>
      <div>
        <textarea placeholder="Message" onChange={(e) => setPost({ ...post, body: e.target.value })} />
      </div>
      <div>
        <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
      </div>
    </>
  );
}
