"use client";
import React from 'react';
import VersionList from '../../components/versionList';
import { API_HOST_BASE_URL } from '../../lib/constants';

const VersionsPage = () => {
  const apiUrl = `${API_HOST_BASE_URL}/versions/`;

  return (
    <div>
      <VersionList apiUrl={apiUrl} />
    </div>
  );
};

export default VersionsPage;
