import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import fontawesome from './lib/fontawesome.js'

import startPage from './routes/start-page.js'

const server = express()

const port = process.env.PORT || 3000

server.set('view engine', 'ejs')
server.set('views', 'src/views')
server.set('trust proxy', true)

server.use(compression())
server.use(helmet())
server.use(express.static('src/public'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(fontawesome())

/**
 * Routes
 * Use seperate route files
 */
server.use(startPage)

server.listen(port, () => console.log(`Example app listening on port http://localhost:${port}/`))