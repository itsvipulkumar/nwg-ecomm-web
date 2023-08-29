import React from 'react'

const Home = () => {

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

        </>

    )
}

export default Home
