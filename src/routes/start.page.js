import express from 'express'
import { get } from "../lib/data-access.js"

const startPage = express.Router()

const options = {
	path: '/start',
	title: 'Start',
	template: 'start.ejs',
	styles: ['/pages/start.css'],
	scripts: ['/pages/start.js'],
	hostClass: 'start'
}

startPage.get(options.path, async (request, response) => response.render('index', options))

export default startPage