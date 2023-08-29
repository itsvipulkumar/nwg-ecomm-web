'use client'
import { useEffect, useState } from "react";
import Product from "./components/product/page";
import HomeCarousel from "./components/carousel/page";
export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const productList = result.products;
        setProducts(productList);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <main>
      <HomeCarousel/>
        {/* <Banner /> */}
        <div className='product_header'>
         <div className="box box1">
            <h4> Mens</h4>
            <div>
              <img src="./Images/man.png" alt="" />
            </div>
            <button>Explore</button>
          
         </div>
         <div className="box box2">
            <h4>    Women </h4>
            <div>
              <img src="./Images/women.png" alt="" />
            </div>
            <button>Explore</button>
          
         </div>
         <div className="box box3">
            <h4> Kids </h4>
            <div>
              <img src="./Images/kid.png" alt="" />
            </div>
            <button>Explore</button>
          
         </div>
         
        </div>
        <div className='row'>
          {products && products.map((item) => {
            return (
              <div key={item.id} className='col-md-4'>
                <div className='mt-4'>
                  <Product product={item} />
                </div>
              </div>
            )
          }
          )}
        </div>
      </main>
    </>
  )
}
export async function getServerSideProps(context) {
  let products = [];

  try {
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json();
    products = result.products;

  } catch (error) {
    console.log('error', error);
  }
  return {
    props: {
      products
    }
  }
}