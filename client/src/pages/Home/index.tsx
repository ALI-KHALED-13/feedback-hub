import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts= async () => {
      const response = await fetch('/api/products/');
      const json = await response.json() as IProduct[];

      if (response.ok) {
        // console.log(json);
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  return <div>
    {products.map((product) => (
      <Link key={product._id} to={`/product/${product._id}`}>{product.title}</Link>
    ))}
  </div>
};

export default Home;
