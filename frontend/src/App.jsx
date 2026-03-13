import { useState } from "react"
import "./App.css"

function App() {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const analyzeMessage = async () => {

    if (!text) return

    setLoading(true)

    const response = await fetch("https://truthlens-backend-jo1f.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })

    const data = await response.json()

    setResult(data.explanation)
    setLoading(false)
  }

  return (
    <div className="app">

      <div className="card">

        <h1>TruthLens</h1>
        <p className="subtitle">
          AI-powered misinformation detection
        </p>

        <textarea
          placeholder="Paste suspicious message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={analyzeMessage}>
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="result">
            <h3>AI Analysis</h3>
            <p>{result}</p>
          </div>
        )}

      </div>

    </div>
  )
}

export default App