const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Lädt die Umgebungsvariablen aus der .env-Datei

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpunkt für den Chat mit OpenAI
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Verwende das gewünschte Modell
        messages: [{ role: 'user', content: message }],
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Verwendet den API-Schlüssel aus der .env-Datei
        },
      }
    );

    const aiMessage = response.data.choices[0].message.content;
    res.json({ message: aiMessage });
  } catch (error) {
    console.error('Fehler bei der OpenAI API-Anfrage:', error.message);
    res.status(500).json({ error: 'Fehler bei der Verarbeitung der Anfrage.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
