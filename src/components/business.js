import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 
import Data from '../data'; // Assuming this is the correct path to your data
import '../css/business.css'; // Assuming this is the correct path to your CSS

function Business() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterBlog('Business');
  }, []);

  const filterBlog = (blog) => {
    const updatedList = Data.filter((x) => x.type === blog);
    setFilter(updatedList);
  };

  return (
    <div className="buz-main">        
      <div className="card-container">
        {filter.map((blog_type) => (
          <div className="buz-home-card" key={blog_type.id}>
            <img src={blog_type.img1} alt='blog thumbnail' className="buz-home-img" />
            <div className="buz-home-content">
              <p className="buz-home-date">{blog_type.date}</p>
              <p className="buz-home-name">{blog_type.title.substring(0,24)}</p>
              <div className="home-card-body">
                <p className="buz-home-desc">{blog_type.desc.substring(0,80)}</p>
              </div>
              <div style={{marginTop:"2rem"}}>
                <NavLink className='home-card-btn' to={`/category/${blog_type.id}`} >
                  read more
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Business;
