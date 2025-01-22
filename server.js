const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const API_KEY = "AIzaSyBu5QURIFEKPHpIYKxgr5mT0ZigGXOI0F8";

// 定义 POST 路由
app.post("/generate-message", async (req, res) => {
  const { prompt } = req.body;

  try {
    const modelName = "models/gemini-2.0-flash-exp";
    const url = `${API_URL}/${modelName}:generateMessage`;

    const response = await axios.post(
      url,
      {
        prompt,
        maxTokens: 50,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    res.json(response.data.responses[0].text);
  } catch (error) {
    console.error("Error generating message:", error.message);
    res.status(500).json({ error: "Failed to generate message" });
  }
});

// 监听端口
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
