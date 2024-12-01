"use client";
import React from 'react';
import ProductList from '../../components/productList';
import { API_HOST_BASE_URL } from '../../lib/constants';

const ProductsPage = () => {
  const apiUrl = `${API_HOST_BASE_URL}/products/`;

  return (
    <div>
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default ProductsPage;
