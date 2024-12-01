"use client";
import React, { useState, useEffect } from 'react';

interface Version {
  version_id: string;
}

interface VersionListProps {
  apiUrl: string;
}

const VersionList: React.FC<VersionListProps> = ({ apiUrl }) => {
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch versions');
        }

        const data = await res.json();
        setVersions(data);  // assuming the API response contains an array of version objects
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchVersions();
  }, [apiUrl]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">Version List</h2>
      <ul className="space-y-4">
        {versions.map((version) => (
          <li
            key={version.version_id}
            className="flex justify-between items-center bg-card shadow-md p-4 rounded-md border border-border"
          >
            <div>
              <p className="text-lg font-medium">Version ID: {version.version_id}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VersionList;
