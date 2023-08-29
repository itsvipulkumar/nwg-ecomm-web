'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { BiRupee } from 'react-icons/bi';
import { getCartItems, removeFromCart, updateCartItems } from '@/utils/page';


function Cart() {
    const router=useRouter();
    const [cart, setCart] = useState(getCartItems());
    const [yourCart, setYourCart] = useState({
        subTotal: 0,
        gstAmount: 0,
        grandTotal: 0,
    });

    const incrementQty = (product) => {
        const newQty = product?.qty + 1;
        if (newQty <= 100) {
            const productId = product?.id;
            updateCartItems(productId, newQty);
            setCart(getCartItems());
        }
    };

    const decrementQty = (product) => {
        const newQty = product?.qty - 1;
        if (newQty > 0) {
            const productId = product?.id;
            updateCartItems(productId, newQty);
            setCart(getCartItems());
        }
    };

    const removeHandler = (productId) => {
        removeFromCart(productId);
        setCart(getCartItems());
    };

    useEffect(() => {
        let total = 0;
        let gstAmount = 0;
        cart.map((item) => {
            total += item.price * item.qty;
        });
        gstAmount = (total * 18) / 100;
        setYourCart({
            ...yourCart,
            subTotal: total,
            gstAmount: gstAmount,
            grandTotal: total + gstAmount,
        });
    }, [cart]);

    const checkoutHandler = () => {
        Cookies.set('yourCart', JSON.stringify(yourCart));
        router.push('/checkout');
    };

    return (
        <>
            <Head>
                <title>Your Cart</title>
            </Head>
            <div className="cart-container">
                <h1 className="cart-title">Your Shopping Cart</h1>
                <div className="table-responsive mt-4">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.length > 0 ? (
                                cart?.map((item) => (
                                    <tr key={item.id}>
                                        <td className="product-info">
                                            <div className="product-image">
                                                <img src={item?.image} alt={item?.title} />
                                            </div>
                                            <div className="product-details">
                                                <h3>{item?.title}</h3>
                                            </div>
                                        </td>
                                        <td>
                                            <BiRupee size={21} />
                                            {item?.price}
                                        </td>
                                        <td>
                                            <div className="quantity-control">
                                                <button onClick={() => decrementQty(item)}>-</button>
                                                <span>{item?.qty}</span>
                                                <button onClick={() => incrementQty(item)}>+</button>
                                            </div>
                                        </td>
                                        <td>
                                            <BiRupee size={21} />
                                            {(item?.price * item?.qty).toFixed(2)}
                                        </td>
                                        <td>
                                            <button
                                                className="remove-button"
                                                onClick={() => removeHandler(item?.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="text-center">
                                    <td className="text-danger" colSpan={5}>
                                        Your cart is empty.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {cart?.length > 0 && (
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span className="summary-label">Subtotal:</span>
                            <span className="summary-value">
                                <BiRupee size={18} />
                                {yourCart?.subTotal?.toFixed(2)}
                            </span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">18% GST:</span>
                            <span className="summary-value">
                                <BiRupee size={18} />
                                {yourCart?.gstAmount?.toFixed(2)}
                            </span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Shipping Charges:</span>
                            <span className="summary-value">Free</span>
                        </div>
                        <div className="summary-row total">
                            <span className="summary-label">Total:</span>
                            <span className="summary-value">
                                <BiRupee size={18} />
                                {yourCart?.grandTotal?.toFixed(2)}
                            </span>
                        </div>
                        <button
                            className="checkout-button"
                            onClick={() => checkoutHandler()}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
