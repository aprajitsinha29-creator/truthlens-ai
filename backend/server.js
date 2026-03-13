require("dotenv").config()
const express = require("express")
const cors = require("cors")
const Groq = require("groq-sdk")

const app = express()

app.use(cors())
app.use(express.json())

// Replace with your Groq API key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

app.post("/analyze", async (req, res) => {

  const text = req.body.text

  try {

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a misinformation detection assistant."
        },
        {
          role: "user",
          content: `
Analyze the following message for misinformation.

Return:
1. Credibility score (0-100)
2. Risk level (Low / Medium / High)
3. Short explanation

Message:
${text}
`
        }
      ]
    })

    const aiText = response.choices[0].message.content

    res.json({
      score: "AI Generated",
      explanation: aiText
    })

  } catch (error) {

    console.error("AI error:", error)

    res.json({
      score: "Error",
      explanation: "AI request failed"
    })

  }

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})