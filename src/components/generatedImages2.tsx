import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

interface GeneratedImagesProps {
  data: { url: string | null }[];
}

const GeneratedImages2: React.FC<GeneratedImagesProps> = ({ data }) => {
  
  const handleDownload = (url: string | null, index: number) => {
    if(url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = `DalleImage_${index + 1}.png`;
      link.dispatchEvent(new MouseEvent('click'));
      link.remove();
    }
  };
  
  return (
    <div className="gallery-container">
      {data.map((item, index) => (
        <div className="gallery-item" key={index}>
          {item.url ? (
            <div className="image-container">
            <img src={item.url} alt={`Image ${index}`} className="image" />
            {/*<div className="download-overlay">
              <button
                className="download-button"
                onClick={() => handleDownload(item.url, index)}
                >
                  <i className="fas fa-download"><FaDownload /></i>
                </button>
          </div>*/}
          </div>
          ) : (
            <p>Error: URL is null</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneratedImages2;
