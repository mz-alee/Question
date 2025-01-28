"use client";
import React from "react";
import ReverseString from "./Questionone";

import WordCount from "./TaskTwo";
import Sorting from "./Sorting";
const page = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col items-center justify-center gap-12">
      <Sorting />
      <ReverseString />
      <WordCount />
    </div>
  );
};

export default page;
