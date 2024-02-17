import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import catData from '../cat-data'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/category.css'

function Category() {
  const navigate = useNavigate();

  const handleExplore = (category) => {
    if (category === 'Business') {
      navigate('/business');
    } else if (category === 'Food') {
      navigate('/food');
    } else if (category === 'Technology') {
      navigate('/technology');
    }else if (category === 'Travel') {
      navigate('/travel');
    }else if (category === 'Politics') {
      navigate('/politics');
    }else if (category === 'Education') {
      navigate('/education');
    }else if (category === 'Culture') {
      navigate('/culture');
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='cat-container'>
      <Slider {...settings}>
        {catData.map(category => (
          <div className='item' key={category.id}>
            <div className="cat-img">
              <img src={category.image} alt={category.category} />
            </div>
            <div className="cat-name">
              <p>{category.category}</p>
              <button className='cat-btn' onClick={() => handleExplore(category.category)}>Explore</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
