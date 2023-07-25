import React from "react";
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src= { AboutBackground } alt="aboutbackground" /> 
            </div>

            <div className="about-section-image-container">
                <img src={ AboutBackgroundImage } alt="aboutbackgroundimage" />
            </div>

            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Restaurants are vibrant spaces where flavors come alive. 
                    From the sizzling sounds of a busy kitchen to the aroma of freshly prepared dishes, every visit is a feast for the senses. 
                    Whether you're seeking a casual brunch spot or an upscale dining experience, restaurants offer a diverse range of culinary delights to satisfy every palate and occasion.
                </p>
                <p className="primary-text">
                    Eating out at a restaurant is more than just a meal – it's an opportunity for connection and enjoyment. 
                    From intimate dinners with loved ones to lively gatherings with friends, restaurants provide a social setting where conversations flow and memories are made. 
                    With their inviting atmospheres and attentive service, restaurants create memorable experiences that leave guests longing to return.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        {" "}
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>

            </div>

        </div>
    )
}

export default About;