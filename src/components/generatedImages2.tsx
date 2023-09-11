import React, { useState } from 'react';

interface GeneratedImagesProps {
  data: { url: string | null }[];
}

const GeneratedImages2: React.FC<GeneratedImagesProps> = ({ data }) => {
  return (
    <div className="gallery-container">
      {data.map((item, index) => (
        <div className="gallery-item" key={index}>
          {item.url ? (
            <img src={item.url} alt={`Image ${index}`} />
          ) : (
            <p>Error: URL is null</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneratedImages2;
