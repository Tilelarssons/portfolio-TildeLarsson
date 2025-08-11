require('dotenv').config();
console.log("API-nyckel laddad:", process.env.OPENAI_API_KEY);
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express(); 


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  console.log("Meddelande från användare:", userMessage);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();
    console.log("Svar från OpenAI:", data);

    if (data.error) {
      console.error("OpenAI fel:", data.error);
      return res.status(500).json({ reply: "Fel från OpenAI: " + data.error.message });
    }

    res.json({ reply: data.choices[0].message.content });
} catch (error) {
    console.error("Fel vid API-anrop:", error);
    res.status(500).json({ reply: "Oj! Något gick fel: " + error.message });
  }  
});

// Startar servern
app.listen(3000, () => console.log("Servern körs på http://localhost:3000"));
