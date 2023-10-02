import React, { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';

export default function CreativeBriefList() {
  const selectedImageCount = 0;
  const url: string[] = [];
  const router = useRouter();
  const handleButtonClick = () => {
    router.push('/homepage');
  };

  return (
    <div>
      <Header selectedImageCount={selectedImageCount} selectedImages={url} />
      <div className="app-container">
        <div className="chat-container2">
          <div className="space-padding"></div>
          <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
            CREATIVE BRIEF LIST
          </div>
          <div>
            <div className="space-padding"></div>
            <button className="new-button" onClick={handleButtonClick}>
              <p>New Creative</p>
            </button>
          </div>
          <table className="creative-brief-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Offering Message</th>
                <th>Product Image</th>
                <th>Brand Image</th>
                <th>Creative List</th>
                <th>Assigned To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
