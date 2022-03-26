import React from 'react';
import './DisplaySelectProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DisplaySelectProduct = (props) => {
    const { id, Price, Food_name, image_fd, } = props.SelectProduct;
    return (
        <div className='selected-product'>
            <div className="image-sec-for-sizing">
                <img src={image_fd} alt="" />
            </div>
            <h4>{Food_name}</h4>
            <h4>{Price}tk</h4>
            <h4 onClick={() => props.handleDeletgeItem(id)} id='delete-button'><FontAwesomeIcon icon={faTrashAlt} /></h4>
        </div>
    );
};

export default DisplaySelectProduct;