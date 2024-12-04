"use client";
import React from 'react';
import VersionList from '@/components/versionList';
import { API_HOST_BASE_URL } from '../../lib/constants';
import { AddVersionButton } from '@/components/AddVersionButton';

const VersionsPage = () => {
  const apiUrl = `${API_HOST_BASE_URL}/versions/`;

  return (
    <div className="relative">
      <AddVersionButton />
      <VersionList apiUrl={apiUrl} />
    </div>
  );
};

export default VersionsPage;
