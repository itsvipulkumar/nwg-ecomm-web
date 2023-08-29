"use client"
import { getCartItems } from '@/utils/page'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { PiShoppingCart } from 'react-icons/pi'
import { VscAccount } from 'react-icons/vsc'
const Header = () => {

  const [cart, setCart] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItems();
      setCart(cartItems.length)
    }, 1000)
  }, [])
  return (
    <>
      <nav>
        <div className='logo'>
          <Link href="/"> <img src="./Images/logo.png" alt="NWG logo" /></Link>
        </div>
        <div>
          <div className='search_area'>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
            />

            <CiSearch className='icon' />
          </div>
        </div>
        <div className='right_links'>
          <Link style={{ textDecoration: 'none' }} href="/cart"> <p><span>{cart} <PiShoppingCart className='icon-size' /></span>Cart</p></Link>
          <Link style={{ textDecoration: 'none' }} href="/login"> <p><span><VscAccount className='icon-size' /></span>My Account</p></Link>

        </div>
      </nav>
      <section className='nav2'>
        <div>

          <Link className='links' href="#">Offers & Discounts</Link>
          <Link className='links' href="#">Orders & Cancel</Link>
          <Link className='links' href="#">Support</Link>
          <Link className='links' href="/about">About us</Link>
          <Link className='links' href="/about">Members</Link>
          <Link className='links' href="/about">Contact</Link>
        </div>
      </section>



    </>
  )
}

export default Header
