import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import fontawesome from './lib/fontawesome.js'

import startPage from './routes/start.page.js'
import newRequestPage from './routes/new-request.page.js'
import newRequestFollowUpPage from './routes/new-request-follow-up.page.js'
import requestsPage from './routes/requests.page.js'
import requestPage from './routes/request.page.js'

const server = express()

const port = process.env.PORT || 3000

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

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
server.use(newRequestPage)
server.use(newRequestFollowUpPage)
server.use(requestsPage)
server.use(requestPage)

server.listen(port, () => console.log(`Example app listening on port http://localhost:${port}/`))