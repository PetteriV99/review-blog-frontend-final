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
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:5000/reviews`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
  
  return (
    <div className='App'>
      <div className='container'>
        <h1>Review Blog</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
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