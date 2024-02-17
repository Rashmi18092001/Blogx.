import { useParams } from "react-router-dom"
import { addItem,delItem } from "../redux/action"
import { useDispatch } from "react-redux"
import { useState } from "react";
import Data from "../data";
import '../css/blogdetail.css';
function ProductDetail(){
    const [cartBtn, setCartBtn] = useState("Save to library")

    const{id}=useParams();
    const productss=Data.filter(x=>x.id==id)
    const data=productss[0]
    const dispatch=useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Save to library") {
            dispatch(addItem(product))
            setCartBtn("Remove from library")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Save to library")
        }
    }

   
    return<>
    {/* <div className="detail-container">
        <h1>{data.title}</h1>
        <p className="date">{data.date}</p>
        <img height='300px' width='500px' src={'../'+data.img2} alt={data.title} />
        <p className="desc">{data.desc}</p>
        <p className="date">{data.time} Read</p>
        <button className="add-btn" onClick={()=>handleCart(data)}>{cartBtn}</button>
    </div> */}
<div className="blogdetail">
    <div className="img">
        <img src={'../'+data.img1} alt="" />
    </div>
        <div className="name-date">
            <p className="blog-name">{data.title}</p>
            <p className="date">Published on - {data.date} </p>
        </div>
    
    <div className="content-container">
        <p className="desc">{data.desc}</p>
        <p className="desc">{data.desc}</p>
        <img src={'../'+data.img2} alt="" className="blog-img" />
        <p className="desc">{data.desc}</p>
        <p className="desc">{data.desc}</p>
        <p className="desc">{data.desc}</p>

        <p className="time">{data.time} Read</p>
        <button className="add-btn" onClick={()=>handleCart(data)}>{cartBtn}</button>
    </div>
</div>
    </>
}
export default ProductDetail;