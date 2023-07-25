import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai"; 

const Testimonials = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What They Are Saying</h1>

                <p className="primary-text">
                    The glowing testimonials from satisfied customers highlight the exceptional quality and service provided by our company.
                </p>
            </div>

            <div className="testimonial-section-bottom">
                <img src={ ProfilePic } alt="pp" />
                <p>
                    The glowing testimonials from satisfied customers highlight the exceptional quality and service provided by our company.
                </p>

                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Deo</h2>
            </div>
        </div>
    );
}

export default Testimonials;