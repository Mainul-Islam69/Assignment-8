import React, { useState } from 'react';
import './DisplyAllProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const DisplyAllProduct = (props) => {

    const { id, Price, Food_name, image_fd, } = props.Products;


    return (
        <div className="display-product-card">
            <div className="card-image-sec">
                <img src={image_fd} alt="" />
            </div>
            <div className='internal-card-dsgn'>
                <h4>{Food_name}</h4>
                <h3>{Price}tk</h3>
            </div>
            <button onClick={()=>props.handleAddProduct({id,Price,Food_name,image_fd})} id='cart-button'>Add To Cart <FontAwesomeIcon icon={faDolly} /></button>
        </div>

    );
};

export default DisplyAllProduct;