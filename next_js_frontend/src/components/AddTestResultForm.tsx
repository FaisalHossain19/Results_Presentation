"use client";
import React, { useState, useEffect } from "react";
import { API_HOST_BASE_URL } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

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

  const [versions, setVersions] = useState<{ value: string; label: string }[]>([]);
  const [categories, setCategories] = useState<{ value: string; label: string }[]>([]);
  const [products, setProducts] = useState<{ value: string; label: string }[]>([]);

  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const [versionsRes, categoriesRes, productsRes] = await Promise.all([
          fetch(`${API_HOST_BASE_URL}/versions/`),
          fetch(`${API_HOST_BASE_URL}/test_categories/`),
          fetch(`${API_HOST_BASE_URL}/products/`),
        ]);

        if (versionsRes.ok && categoriesRes.ok && productsRes.ok) {
          const versionsData = await versionsRes.json();
          const categoriesData = await categoriesRes.json();
          const productsData = await productsRes.json();

          // Map data to { value, label }
          setVersions(versionsData.map((v: { version_id: string }) => ({ value: v.version_id, label: v.version_id })));
          setCategories(categoriesData.map((c: { test_category_id: string }) => ({ value: c.test_category_id, label: c.test_category_id })));
          setProducts(productsData.map((p: { product_name: string }) => ({ value: p.product_name, label: p.product_name })));
        } else {
          console.error("Failed to fetch dropdown data.");
        }
      } catch (err) {
        console.error("Error fetching dropdown data:", err);
      }
    };

    fetchDropdownData();
  }, []);

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${API_HOST_BASE_URL}/test_results/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
        {/* Requirement ID */}
        <div>
          <label className="block text-sm font-medium mb-1">Requirement ID</label>
          <Input
            type="number"
            value={formData.requirement_id}
            onChange={(e) => handleChange("requirement_id", e.target.value)}
            required
          />
        </div>

        {/* Test Case ID */}
        <div>
          <label className="block text-sm font-medium mb-1">Test Case ID</label>
          <Input
            type="text"
            value={formData.test_case_id}
            onChange={(e) => handleChange("test_case_id", e.target.value)}
            required
          />
        </div>

        {/* Execution Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Execution Date</label>
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Input
                value={formData.execution_date ? format(new Date(formData.execution_date), "yyyy-MM-dd") : ""}
                placeholder="Pick a date"
                readOnly
                className="cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent align="start" className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.execution_date ? new Date(formData.execution_date) : undefined}
                onSelect={(date) => {
                  if (date) {
                    handleChange("execution_date", date.toISOString().split("T")[0]);
                    setCalendarOpen(false);
                  }
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Version Tested */}
        <div>
          <label className="block text-sm font-medium mb-1">Version Tested</label>
          <Combobox
            options={versions}
            placeholder="Select or type a version"
            onSelect={(value) => handleChange("version_tested", value)}
          />
        </div>

        {/* Test Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Test Category</label>
          <Combobox
            options={categories}
            placeholder="Select or type a category"
            onSelect={(value) => handleChange("test_category_name", value)}
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <Combobox
            options={products}
            placeholder="Select or type a product"
            onSelect={(value) => handleChange("product_name", value)}
          />
        </div>

        {/* Test Case Result */}
        <div>
          <label className="block text-sm font-medium mb-1">Test Case Result</label>
          <select
            value={formData.test_case_result}
            onChange={(e) => handleChange("test_case_result", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="passed">Passed</option>
            <option value="fail">Failed</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};
