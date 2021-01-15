import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
//import Login from './components/Login';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    blogs: null,
    comments: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:5000/reviews`;
    axios.get(apiUrl).then((blogs) => {
      const allBlogs = blogs.data.data;
      setAppState({ loading: false, blogs: allBlogs });
    });
  }, [setAppState]);
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>Reviews</h1>
      </div>
      <div className='blog-container'>
        <ListLoading isLoading={appState.loading} blogs={appState.blogs} />
      </div>
      <div className='comment-container'>
      </div>
      <footer>
        <div className='footer'>
          Made{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          for Application Programming Course
        </div>
      </footer>
    </div>
  );
}

export default App;