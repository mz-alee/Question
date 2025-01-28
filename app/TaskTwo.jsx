"use client ";
import React, { useState } from "react";

function WordCount() {
  const [file, setFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.filter((word) => word.length > 0).length;
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result;
        const totalWords = countWords(fileContent);
        setWordCount(totalWords);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="text-center border bg-gray-700 w-full  border-gray-800 p-8 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl mb-6">Question 3</h1>
      <h2>Upload a Text File to Count Words</h2>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {wordCount > 0 && <p>Total words: {wordCount}</p>}
    </div>
  );
}

export default WordCount;
