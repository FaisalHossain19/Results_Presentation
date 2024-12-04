"use client";

import React, { useState, useEffect } from "react";

import { API_HOST_BASE_URL } from "@/lib/constants";

const AddProductForm: React.FC = () => {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [existingProductIds, setExistingProductIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch existing product IDs on component mount
  useEffect(() => {
    const fetchExistingProductIds = async () => {
      try {
        const res = await fetch(`${API_HOST_BASE_URL}/products/`);
        if (!res.ok) throw new Error("Failed to fetch existing product IDs");
        const data = await res.json();
        setExistingProductIds(data.map((product: { product_id: number }) => product.product_id));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    };

    fetchExistingProductIds();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productIdNumber = parseInt(productId, 10);

    if (isNaN(productIdNumber)) {
      setError("Product ID must be a valid number.");
      setSuccess(null);
      return;
    }

    if (existingProductIds.includes(productIdNumber)) {
      setError("This Product ID already exists.");
      setSuccess(null);
      return;
    }

    try {
      const res = await fetch(`${API_HOST_BASE_URL}/products/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: productIdNumber,
          product_name: productName,
          product_type: productType,
        }),
      });

      if (!res.ok) throw new Error("Failed to add product");

      setSuccess("Product added successfully!");
      setError(null);
      setProductId("");
      setProductName("");
      setProductType("");
      setExistingProductIds([...existingProductIds, productIdNumber]); // Update existing product IDs
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setSuccess(null);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 border border-gray-200 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Add New Product</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="product_id" className="block text-sm font-medium">
            Product ID
          </label>
          <input
            type="number"
            id="product_id"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_name" className="block text-sm font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_type" className="block text-sm font-medium">
            Product Type
          </label>
          <input
            type="text"
            id="product_type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
