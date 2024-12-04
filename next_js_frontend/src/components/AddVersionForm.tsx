"use client";
import React, { useState, useEffect } from "react";
import { API_HOST_BASE_URL } from "@/lib/constants";

const AddVersionForm: React.FC = () => {
    const [versionName, setVersionName] = useState("");
    const [existingVersions, setExistingVersions] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Fetch existing versions on component mount
    useEffect(() => {
      const fetchVersions = async () => {
        try {
          const res = await fetch(`${API_HOST_BASE_URL}/versions/`);
          if (!res.ok) throw new Error("Failed to fetch existing versions");
          const data = await res.json();
          setExistingVersions(data.map((version: { version_name: string }) => version.version_name));
        } catch (err) {
          setError(err instanceof Error ? err.message : "An unknown error occurred");
        }
      };

      fetchVersions();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (existingVersions.includes(versionName)) {
        setError("This version already exists.");
        setSuccess(null);
        return;
      }

      try {
        const res = await fetch(`${API_HOST_BASE_URL}/versions/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version_id: versionName }),
        });

        if (!res.ok) throw new Error("Failed to add version");

        setSuccess("Version added successfully!");
        setError(null);
        setVersionName(""); // Clear the input field
        setExistingVersions([...existingVersions, versionName]); // Update the existing versions
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        setSuccess(null);
      }
    };

    return (
      <div className="max-w-sm mx-auto p-4 border border-gray-200 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Add New Version</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="version_name" className="block text-sm font-medium">
              Version Name
            </label>
            <input
              type="text"
              id="version_name"
              value={versionName}
              onChange={(e) => setVersionName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Version
          </button>
        </form>
      </div>
    );
  };

  export default AddVersionForm;
