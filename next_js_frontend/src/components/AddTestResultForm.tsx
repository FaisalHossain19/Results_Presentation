// components/AddTestResultForm.tsx
"use client";
import React, { useState } from "react";
import { API_HOST_BASE_URL } from "@/lib/constants";
export const AddTestResultForm: React.FC = () => {
  const [formData, setFormData] = useState({
    requirement_id: 0,
    test_case_id: "",
    test_case_result: "passed",
    execution_date: "",
    version_tested: "",
    test_category_name: "",
    product_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${API_HOST_BASE_URL}/test_results/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Test result created successfully!");
    } else {
      alert("Failed to create test result.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h3 className="text-2xl font-semibold mb-6">Create New Test Result</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Requirement ID</label>
          <input
            type="number"
            name="requirement_id"
            value={formData.requirement_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Test Case ID</label>
          <input
            type="text"
            name="test_case_id"
            value={formData.test_case_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Test Case Result</label>
          <select
            name="test_case_result"
            value={formData.test_case_result}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="passed">Passed</option>
            <option value="fail">Failed</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Execution Date</label>
          <input
            type="date"
            name="execution_date"
            value={formData.execution_date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Version Tested</label>
          <input
            type="text"
            name="version_tested"
            value={formData.version_tested}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Test Category Name</label>
          <input
            type="text"
            name="test_category_name"
            value={formData.test_category_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
