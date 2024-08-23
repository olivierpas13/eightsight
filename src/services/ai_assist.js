"use client";

import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? `http://localhost:8000`
    : "https://6ih7gzzgrtxgrdouhko46f7lpy0ojasf.lambda-url.us-east-2.on.aws";

export const getCorrectChart = async (message) => {
  const response = await axios.get(
    `${baseUrl}/correct_chart/?message=${message}`
  );
  return response.data;
};

export const getAssistantInfo = async (message) => {
  console.log(message);
  const response = await axios.get(
    `${baseUrl}/assistant/?message=${message}`
  );
  console.log(response);
  return response.data;
};
