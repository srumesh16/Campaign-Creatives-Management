import React, { useRef } from 'react';

interface FileUploadProps {
  onFileSelected: (file: File) => void;
  fileLocation: string; // Add a fileLocation prop
  onUploadComplete: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelected, fileLocation, onUploadComplete }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async () => {
    if (inputRef.current && inputRef.current.files) {
      const selectedFile = inputRef.current.files[0];
      if (selectedFile) {
        onFileSelected(selectedFile);

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Make a POST request to your API with the fileLocation query parameter
        try {
          const response = await fetch(`/api/upload?fileLocation=${encodeURIComponent(fileLocation)}`, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            onUploadComplete();
          } else {
            console.error('Failed to upload the file.');
          }
        } catch (error) {
          console.error('Error uploading the file:', error);
        }
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".png"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileSelect}
      />
      <button onClick={() => inputRef.current?.click()}>Upload Template</button>
    </div>
  );
};

export default FileUpload;
