import express from 'express'

const requestPage = express.Router()

const options = {
	path: '/aanvragen/**',
	title: 'Aanvraag',
	template: 'request.ejs',
	styles: [],
	scripts: [],
	hostClass: 'request'
}

requestPage.get(options.path, async (request, response) => response.render('index', options))

export default requestPage