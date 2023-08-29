'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi'
import { TbCategory } from 'react-icons/tb'


const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const url = "https://dummyjson.com/products/categories";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once when the component mounts.

  return (
    <div className='w-80'>
      <ul className='list-group'>
        <li className='list-group-item d-flex align-items-center navbar-top-bg  bg-primary opacity-75'>
          <h5 className='text-white mt-2 text-uppercase'>
           <TbCategory/> Categories
          </h5>
        </li>
        {
          categories.map((category, i) => {
            return (
              <div key={i}>
                <Link href={`/category/${category}`} className="text-decoration-none">
                  <li className='category_list d-flex align-items-center text-capitalize'>
                    <HiArrowRight /><span> {category}</span></li>
                </Link>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Sidebar;
