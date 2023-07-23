import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="file-box">
      <input type="file" onChange={handleFileInput} />
      {selectedFile && (
        <div>
          <img src={URL.createObjectURL(selectedFile)} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
