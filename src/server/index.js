import express from "express"
import cors from "cors"
import React from 'react'
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server"
import App from '../shared/App'

const app = express()

app.use(cors())

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  const context = { };

  const markup = renderToString(
      <StaticRouter context={ context } location={ req.url }>
        <App />
      </StaticRouter>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>YeSmart</title>
        <link href="//fonts.googleapis.com/css?family=PT+Sans|Yanone+Kaffeesatz:400|Architects+Daughter:400" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app" class="yesm-container">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3001, () => {
  console.log(`Server is listening on port: 3001`)
})
