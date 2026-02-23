const http = require('http')
const fs = require('fs')

const PORT = 5000
const FILE_PATH = './data.txt'

const server = http.createServer((req, res) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  // 🔹 WRITE FILE
  if (req.url === '/write' && req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      const { text } = JSON.parse(body)

      fs.writeFile(FILE_PATH, text, err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Write failed' }))
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'File saved successfully ✅' }))
        }
      })
    })
  }

  // 🔹 READ FILE
  else if (req.url === '/read' && req.method === 'GET') {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ text: err ? '' : data }))
    })
  }

  // 🔹 INVALID ROUTE
  else {
    res.writeHead(404)
    res.end('Not Found')
  }
})

server.listen(PORT, () => {
  console.log(`Node server running on http://localhost:${PORT}`)
})