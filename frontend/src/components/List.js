// handles the display of blogsitories in the form of a list

import React from 'react';
const List = (props) => {
  const { blogs } = props;
  if (!blogs || blogs.length === 0) return <p>No reviews, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Published Reviews</h2>
      {blogs.map((blog) => {
        return (
          <li key={blog.id} className='list'>
            <span className='blog-text'>{blog.title} </span>
            <span className='blog-description'>{blog.content} </span>
            <span className='blog-rating'>{blog.rating}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;