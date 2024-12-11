"use client";
import React, { useState, useEffect } from "react";
import TestResultsList from "@/components/testResultsList";
import TestResultsPieChart from "@/components/testResultsPieChart";
import { AddTestResultButton } from "@/components/AddTestResultButton";
import { API_HOST_BASE_URL } from "../../lib/constants";

const TestResultsPage: React.FC = () => {
  const [testResults, setTestResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const res = await fetch(`${API_HOST_BASE_URL}/test_results/`);
        if (!res.ok) throw new Error("Failed to fetch test results");
        const data = await res.json();
        setTestResults(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative">
      <div className="text-center">
        <AddTestResultButton />
      </div>
      {/* Restrict Pie Chart Size */}
      <div className="flex justify-center">
        <TestResultsPieChart testResults={testResults} />
      </div>

      <TestResultsList testResults={testResults} />
    </div>
  );
};

export default TestResultsPage;
