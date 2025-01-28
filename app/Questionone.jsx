"use client";
import React, { useState } from "react";

function ReverseString() {
  const [input, setInput] = useState("");
  const [reversed, setReversed] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleReverse = () => {
    let reversedString = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversedString += input[i];
    }
    setReversed(reversedString);
  };

  return (
    <div className="rounded shadow-lg p-8 bg-slate-500 my-10 w-full flex flex-col gap-4">
      <h1 className="text-center text-4xl m-4">Question 2</h1>
      <h1>Reverse String Program</h1>
      <input
        className="p-4 rounded-lg"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter string"
      />
      <button
        className="hover:bg-gray-300 w-fit border shadow-lg rounded-lg p-2"
        onClick={handleReverse}
      >
        Reverse String
      </button>
      {reversed && <p>Reversed String: {reversed}</p>}
    </div>
  );
}

export default ReverseString;
