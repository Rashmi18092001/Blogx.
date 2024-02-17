import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../data';
import '../css/business.css';

const HomeFood = () => {
  // Filter and display only the first three business blogs
  const businessBlogs = Data.filter((blog) => blog.type === 'Food').slice(0, 3);

  return (
    <>
      <div className="buz-main">
        <div className="upper">
          <p>Food</p>
          <NavLink to='/food'>
                    View all
                </NavLink>
          {/* You can add a View all button here if needed */}
        </div>
      </div>

      <div className="card-container">
        {businessBlogs.map((blog) => (
          <div className="buz-home-card" key={blog.id}>
            <img src={blog.img1} alt="blog thumbnail" className="buz-home-img" />
            <div className="buz-home-content">
              <p className="buz-home-date">{blog.date}</p>
              <p className="buz-home-name">{blog.title}</p>
              
              <div style={{ marginTop: "2rem" }}>
                {/* Navigate to BlogDetail component with the blog ID */}
                <NavLink className='home-card-btn' to={`/blog/${blog.id}`}>
                  Read more
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeFood;
