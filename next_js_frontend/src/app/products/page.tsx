"use client"
import React, { useState, useEffect } from 'react';

interface Product {
  product_id: number;
  product_name: string;
  product_type: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
    	const res = await fetch("/products")
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.product_name} - ${product.product_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
