"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getCartItems } from '@/utils/page';
import { BiRupee } from 'react-icons/bi'
import Cookies from 'js-cookie'
import swal from 'sweetalert';

// import './Checkout.css'; // Import your custom CSS file

function Checkout({ cartData }) {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        paymentMethod: '',
    });

    // const { register, watch, formState: { errors } } = useForm();
    const [cart, setCart] = useState(getCartItems());
    const [cartItems, setCartItems] = useState(0);
    const [yourCart, setYourCart] = useState({});

    useEffect(() => {
        const tempYourCart = Cookies.get('yourCart');
        if (!tempYourCart) {
            Router.push('/')
        }
        setYourCart(tempYourCart && JSON.parse(Cookies.get('yourCart')))
        setCartItems(cart?.length)
    }, [cart])
    const checkoutHandler = (data) => {
        Router.push({
            pathname: '/thankYou',
            query: {
                cart: JSON.stringify(cart),
                yourCart: JSON.stringify(yourCart),
                shipping: JSON.stringify(data)
            }
        })
        Cookies.remove('yourCart');
        Cookies.remove('cartItems');
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        swal("Good job!", "You Order has been!", "success");

        // Handle form submission here (e.g., place order, validate data)
        console.log("formData submit");
    };

    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a Payment Method</option>
                            <option value="creditCard">COD-Cash On devivery</option>
                            
                            {/* Add more payment methods */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Sub Total</label>
                        <p>
                            <div className="my-0">SubTotal (<BiRupee size={21} /> )</div>
                            <strong>{yourCart?.subTotal}</strong>
                            {/* Calculate the total amount here based on cartData */}
                            {/* Display the total amount here */}
                        </p>
                    </div>
                    <div className="form-group">
                        <label>GST Total</label>
                        <p>
                            <div className="my-0">GST 18% (<BiRupee size={21} /> )</div>
                            <strong>{yourCart?.gstAmount}</strong>
                            {/* Calculate the total amount here based on cartData */}
                            {/* Display the total amount here */}
                        </p>
                    </div>
                    <div className="form-group">
                        <label>Total Payable Amount</label>
                        <p>
                            <div className="my-0">Total amount (<BiRupee size={21} /> )</div>
                            <strong>{yourCart?.grandTotal}</strong>
                            {/* Calculate the subtotal amount here based on cartData */}
                            {/* Display the subtotal amount here */}
                        </p>
                    </div>
                    <button className="submit-button" type="submit">
                        Place Order
                    </button>
                </form>
            </div>
        </>
    );
}

export default Checkout;
