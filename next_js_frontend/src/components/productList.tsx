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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.product_id}
            className="flex justify-between items-center bg-card shadow-md p-4 rounded-md border border-border"
          >
            <div>
              <p className="text-lg font-medium">{product.product_name}</p>
              <p className="text-sm text-muted-foreground">{product.product_type}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
