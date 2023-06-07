import express from 'express'

const requestsPage = express.Router()

const options = {
	path: '/aanvragen',
	title: 'Aanvragen',
	template: 'requests.ejs',
	styles: [],
	scripts: [],
	hostClass: 'requests'
}

requestsPage.get(options.path, async (request, response) => response.render('index', options))

export default requestsPage