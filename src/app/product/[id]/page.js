"use client"
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiRupee } from 'react-icons/bi'
import { MdOutlineReviews } from 'react-icons/md'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SendIcon from '@mui/icons-material/Send';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { addToCart } from '@/utils/page';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const SingleProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const checkQuantity = (value) => {
    if (value <= product?.stock && value >= 1) {
      setQuantity(value)
    }
    else if (value > 0) {
      setQuantity(product?.stock)
    }
  }
  const id = params.id;

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


  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const rand_num = Math.floor(Math.random() * 300) + 100;


  return (
    <div>
      <div>


      </div>

      {product ? (

        <div>
          <div className="card card_single">
            <div className='header'>
              <Link href={`/product/${product?.id}`}>
                <div className='object-fit-cover'>
                  <div className='ProductCarousel'>
                    <Carousel className='carousel' showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
                      <div>
                        <img src={product?.images?.[1]} />
                        {/* <p className="legend">Legend 2</p> */}
                      </div>
                      <div>
                        <img src={product?.images?.[2]} />
                        {/* <p className="legend">Legend 2</p> */}
                      </div>
                      <div>
                        <img src={product?.images?.[3]} />
                        {/* <p className="legend">Legend 3</p> */}
                      </div>
                    </Carousel>
                  </div>


                </div>
              </Link>
            </div>

            <div className="card_content">
              <Link href={`/product/${product?.id}`} className='text-decoration-none'>
                <h6 className="card_title">{product.title}</h6>
              </Link>

              <div className='deal'>
                <div className="rating">
                  <span> Rating <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> {product.rating}</span>

                  <span>Review <MdOutlineReviews /> {rand_num}</span>

                </div>
                <h6 className="price_section">
                  <div className='price'>
                    <BiRupee />
                    <span >  {product.price}</span>
                  </div>
                  <span className='discount' >{product.discountPercentage}% off</span>
                </h6>
                <div className='d-flex gap-3'>
                  <b>Quantity: </b>

                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="web" onClick={() => checkQuantity(quantity - 1)}>-</ToggleButton>
                    <input className='cart_value' value={quantity} onChange={(e) => { checkQuantity(e.target.value) }} />
                    <ToggleButton value="ios" onClick={() => checkQuantity(quantity + 1)}>+</ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <div className='buy_section'>


                  <Button onClick={(e) => { addToCart(product, quantity); toast.success('Added to cart') }} className="cart_btn" variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
                    Cart
                  </Button>
                  <Button onClick={(e) => { addToCart(product, 1) }} className="cart_btn" variant="contained" endIcon={<SendIcon />}>
                    BUY
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <p>loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
