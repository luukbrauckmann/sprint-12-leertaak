import express from 'express'

const startPage = express.Router()

const options = {
	path: '/',
	title: 'Start',
	template: 'start.ejs',
	styles: ['/pages/start.css'],
	scripts: ['/pages/start.js'],
	hostClass: 'start'
}

startPage.get(options.path, async (request, response) => response.render('index', options))

export default startPage