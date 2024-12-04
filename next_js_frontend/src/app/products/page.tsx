"use client";
import React from 'react';
import ProductList from '../../components/productList';
import { API_HOST_BASE_URL } from '../../lib/constants';
import { AddProductButton } from '@/components/AddProductButton';

const ProductsPage = () => {
  const apiUrl = `${API_HOST_BASE_URL}/products/`;

  return (
    <div className="relative">
      <AddProductButton />
      <ProductList apiUrl={apiUrl} />
    </div>
  );
};

export default ProductsPage;
