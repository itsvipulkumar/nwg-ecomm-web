"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import { toast } from 'react-hot-toast';
import { BiRupee } from 'react-icons/bi';
// import ReactStars from 'react-stars';
const NewProduct = ({ params }) => {
    const [product, setProduct] = useState(null);
    const id = params.single_product;
const quantity=0;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {product ? (
                <div className='row g-3 p-3'>
                    {/* <Breadcrumb title='product' /> */}
                    <div className='col-lg-6'>
                        <div className='p-2'>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={product?.images?.[1]} className='card-img-top' height={300} width={400} alt="image1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={product?.images?.[2]} className='card-img-top' height={300} width={400} alt="image2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={product?.images?.[3]} className='card-img-top' height={300} width={400} alt="image3" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='text-secondary'>Brand: {product?.brand}</h2>
                        <h2 className='text-capitalize'>{product?.title}</h2>
                        <div className='d-flex'>
                            <h4 className='card-title d-flex align-items-center'><BiRupee size={24} />{product?.price}</h4>
                            <div className='card-title d-flex align-items-center' style={{ position: 'relative', left: 8, background: '#ff4d4d', color: 'white', borderRadius: 10 }}>-{product.discountPercentage}%</div>
                        </div>
                        <h5 className='mt-2'>Description</h5>
                        <p>{product?.description}</p>
                        <div className='d-flex align-items-center gap-2'><div><b>Rating:</b></div>
                            <div style={{ color: '#ffd700' }}>
                                {/* <ReactStars count={5} value={rate} size={21} edit={false} half={true} /> */}
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <b>Quantity: </b>
                            <div className="input-group mb-3 input-group-sm w-25">
                                <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => checkQuantity(quantity - 1)}>-</button>
                                <input value={quantity} type="tel" className=" input-group-text col-5" onChange={(e) => { checkQuantity(e.target.value) }} />
                                <button className="input-group-text btn btn-sm btn-outline-dark" onClick={() => checkQuantity(quantity + 1)}>+</button>
                            </div>
                        </div>
                        <div className='d-flex mt-4 gap-3'>
                            <button type='button' className='btn btn-warning btn-sm' onClick={(e) => { addToCart(product, quantity); toast.success('Added to cart') }}>Add to Cart</button>
                            <button type='button' className='btn btn-success btn-sm' onClick={(e) => { addToCart(product, 1) }}>Buy now</button>
                        </div>

                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default NewProduct;
