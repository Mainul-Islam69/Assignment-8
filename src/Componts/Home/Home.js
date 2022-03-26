import React, { useEffect, useState } from 'react';
import './Home.css';
import allData from '../../fakeData';
import DisplyAllProduct from '../DisplyAllProduct/DisplyAllProduct';
import DisplaySelectProduct from '../DisplaySelectProduct/DisplaySelectProduct';

const Home = () => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    useEffect(() => {

    }, [])
    const handleAddProduct = (data) => {
        if (cart.find(x => x.id === data.id)) {
            alert('this Product is already selected')
        } else if (cart.length < 4) {
            setCart([...cart, data])
        }
        else if (cart.length > 3) {
            alert('Sorry You can not add five Product')
        }
    }
    const handleDeletgeItem = (id) => {
        const deleteItemFiltered = [...cart].filter(x => x.id !== id)
        setCart(deleteItemFiltered)
    }
    const cartStoreReset = () => {
        setCart([])
    }
    const choose1ForMe = () => {
        setCart([cart[Math.floor(Math.random() * 4)]])
    }
    return (
        <div className='home-page-main'>
            <div className="middle-header-txt">
                <div className="section-header">
                    <h1>Patuakhali Food Corner</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nam quae inventore dolores a qui aperiam corporis.</p>
                </div>
            </div>
            <div className="content-section">
                <div className="product-displying">
                    {
                        allData.map(data => <DisplyAllProduct key={data.id} handleAddProduct={handleAddProduct} Products={data}></DisplyAllProduct>)
                    }
                </div>
                <div className="cart-section">
                    <div className="heading-cart">
                        <h2>Select Food</h2>
                    </div>
                    {
                        cart.map(data2 => <DisplaySelectProduct key={data2.id} handleDeletgeItem={handleDeletgeItem} SelectProduct={data2}></DisplaySelectProduct>)
                    }
                    <div className="selection-button-section">
                        <button onClick={choose1ForMe} id="chooseing-btn1">Choose 1 For Me</button>
                        <button onClick={cartStoreReset} id="chooseing-btn2">Choose Again</button>
                    </div>
                </div>
            </div>
            <div className="question-section">
                <div className="how-react-works">
                    <h1>1. How React Works ?</h1>
                    React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.
                </div>
                <div className="how-useState-Works">
                    <h1>2. How useState Works ?</h1>
                    <p>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
                </div>
                <div className="state-vs-props">
                    <h1>3. Difference between state and props ?</h1>
                    <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;