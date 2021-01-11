// handles the display of Repositories in the form of a list

import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No reviews, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Published Reviews</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.title} </span>
            <span className='repo-description'>{repo.content} </span>
            <span className='repo-rating'>{repo.rating}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;