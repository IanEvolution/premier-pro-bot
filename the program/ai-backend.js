require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai'); // npm install openai
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/generate-ideas', async (req, res) => {
  const { transcript } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a creative video editor assistant." },
        { role: "user", content: `Here is a video transcript: ${transcript}\nSuggest 3 interesting points or ideas to highlight in the video.` }
      ]
    });
    res.json({ ideas: completion.choices[0].message.content.split('\n').filter(Boolean) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('AI backend running on port 3000'));
