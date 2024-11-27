"use client";
import React, { useState, useEffect } from 'react';

interface Product {
  product_id: number;
  product_name: string;
  product_type: string;
}

interface ProductListProps {
  apiUrl: string;
}

const ProductList: React.FC<ProductListProps> = ({ apiUrl }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.product_id}>
            {product.product_name} - {product.product_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
