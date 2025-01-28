import React from "react";
import './Blog.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="Blog">
        
        <div className="Left_section">
        <h1>Lastest Blog</h1>
        <div className="box"></div>
        

        </div>
        <div className="Right_section">
        <h1 className="Heading">What is Lorem Ipsum?</h1>
        <p className="sub-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p className="date">06 Dec, 2024 | 28 min</p>
        <p className="name"><span className="dotbox"></span>Ankit Singh</p>
        <div className="btn-group">
        <button className="btn">Read More</button>
        <div className="btnicon">
            <button className="leftbtn"><FaChevronLeft /></button>
            <button className="rightbtn"><FaChevronRight /></button>
        </div>
        </div>

        </div>
        </div>
    );
    }

    export default Blog;
