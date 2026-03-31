"use client";
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const LoadingIndicator: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ErrorMessage: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-red-500 text-xl">Unable to load content. Please try again later.</p>
  </div>
);

const HelloWorld: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <h1 className="text-4xl font-bold" aria-label="Hello, World!">Hello, World!</h1>
  </div>
);

const Page: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setError(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return <HelloWorld />;
};

export default Page;