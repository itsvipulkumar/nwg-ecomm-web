"use client"
import Product from '@/app/components/product/page';
import React, { useEffect, useState } from 'react'



const ProductCategory = ({params}) => {

    const cat=params.slug;
    console.log(cat)



    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${cat}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const productData = await response.json();
                console.log(productData)
                setProducts(productData);
               
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [cat]);
   
  return (
    <div>
     
          <div className='row'>
              {products && products.products.map((item) => {
                  return (
                      <div key={item.id} className='col-md-4'>
                          <div className='mt-4'>
                        {/* <h3>Ok</h3> */}
                            <Product product={item}/>
                          </div>

                      </div>
                  )
              }
              )}
          </div>
    </div>
  )
}

export default ProductCategory
