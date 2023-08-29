
import Link from 'next/link'
import Rating from '@mui/material/Rating';
import React from 'react'
import { toast } from 'react-hot-toast'
import {BiRupee } from 'react-icons/bi'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SendIcon from '@mui/icons-material/Send';
import { addToCart } from '@/utils/page';

function Product({ product }) {
  return (
    <div className="card">
      <div className='header'>
        <Link href={`/product/${product?.id}`}>
          <div className='object-fit-cover'>
            <img src={product.thumbnail} className='card-img-top' width={300} height={230} alt={product.title} />
          </div>
        </Link>
      </div>

      <div className="card_content">
        <Link href={`/product/${product?.id}`} className='text-decoration-none'>
          <h5 className="card_title">{product.title}</h5>
        </Link>

        <div className='deal'>
         <div className="rating">
           <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> <span>{product.rating}</span>
         </div>
          <h6 className="price_section">
            <div className='price'>
              <BiRupee />
              <span >  {product.price}</span>
            </div>
            <span className='discount' >{product.discountPercentage}% off</span>
          </h6>

          <div className='buy_section'>


            <Button onClick={(e) => { addToCart(product, 1)}} className="cart_btn" variant="outlined" startIcon={<ShoppingCartCheckoutIcon />}>
              Cart
            </Button>
            <Button className="cart_btn" variant="contained" endIcon={<SendIcon />}>
              BUY
            </Button>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product