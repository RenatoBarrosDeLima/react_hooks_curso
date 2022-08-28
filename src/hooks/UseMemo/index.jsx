import React, { useState, useEffect, useMemo } from 'react';
import P from 'prop-types';

import '../../App.css';

const Post = ({ post }) => {
  console.log('Filho renderizou');

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

const UseMemo = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 2000);
  }, []);

  console.log('Pai renderizou ');

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {/* Aqui o use memo salva a lista enquanto ela não é mudada,
      o input da pesquisa é alterado mas a lista não é redendizada novamente
      porque o useMemo memorizou a lista  */}
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
      }, [posts])}
      {posts.length === 0 && <p> Ainda não exitem posts </p>}
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

export default UseMemo;
