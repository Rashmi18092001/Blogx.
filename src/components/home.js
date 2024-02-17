import "../css/home.css"
import React from "react";
import { NavLink } from "react-router-dom";
import HomeBusiness from "./home-business";
import Business from "./business";
import { useState } from "react";
import HomeFood from "./home-food";
import HomeTech from "./home-tech";


function Home(){

    const [showBusiness, setShowBusiness] = useState(false);
    const [showFood, setShowFood] = useState(false);
    const [showTech, setShowTech] = useState(false);


    return<>
        <div className="home-main">
            <div className="home-left">
                <div className="left-box">
                    <div className="one">
                        <img src="./images/img2.jpg" alt="" />
                    
                    </div>
                </div>
                <div className="left-box">
                    <div className="two">
                        <img src="./images/img3.jpg" alt="" />
                    
                    </div>
                </div>
                <div className="left-box">
                    <div className="three">
                        <img className="black-opacity" src="./images/img4.jpg" alt="" />
                    
                    </div>
                </div>
                <div className="left-box">
                    <div className="four">
                        <img src="./images/imgg1.jpg" alt="" />
                    
                    </div>
                </div>
            </div>
            <div className="home-right">
                <p className="tagline">Engaging articles that delve deep into the heart of contemporary issues and timeless themes.</p>
                <p className="home-desc">Our blog is more than just a collection of articles, it's a journey through the realms of knowledge, creativity, and human experience. From thought-provoking insights to practical tips, we strive to offer content that enriches your mind and nourishes your soul.</p>
                <div className="library">
                <NavLink to={`/Category`} >
                    Read Now
                  </NavLink>
                </div>
            </div>
            
        </div>
{/* <Business/> */}
<HomeBusiness onButtonClick={() => setShowBusiness(true)} />
<HomeFood onButtonClick={() => setShowFood(true)} />
<HomeTech onButtonClick={() => setShowTech(true)} />
<div className="many">
<NavLink className='home-card-btn up' to={`/Category`} >And many more..</NavLink>
</div>


    </>
}
export default Home;