import express from 'express'
import cors from 'cors'

const app = express()

// Allow the React app (and others) to call our API from the browser
app.use(cors())
// Parse JSON request bodies: req.body will be an object if client sends JSON
app.use(express.json())

// Simple test route: visit http://localhost:8080/api/health
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'backend', ts: new Date().toISOString() })
})

// Pick the port from env (for cloud) or use 8080 locally
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})
