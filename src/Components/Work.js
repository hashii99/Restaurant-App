import React from "react";
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';  

const Work = () => {
    const workInfoData =  [
        {
            image: PickMeals,
            title: "Pick Meals",
            text:"Fresh fruits and vegetables provide essential nutrients for a healthy body. Pizza topped with gooey cheese and savory toppings is a crowd-pleaser at any gathering.",
        }, 
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text:"Fresh fruits and vegetables provide essential nutrients for a healthy body. Pizza topped with gooey cheese and savory toppings is a crowd-pleaser at any gathering.",
        }, 
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text:"Fresh fruits and vegetables provide essential nutrients for a healthy body. Pizza topped with gooey cheese and savory toppings is a crowd-pleaser at any gathering.",
        }, 
    ]
    return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Restaurants are vibrant spaces where flavors come alive. 
                From the sizzling sounds of a busy kitchen to the aroma of freshly prepared dishes, every visit is a feast for the senses. 
                Whether you're seeking a casual brunch spot or an upscale dining experience, restaurants offer a diverse range of culinary delights to satisfy every palate and occasion.
            </p>
        </div>

        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="images" />
                    </div>

                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Work;