import express from 'express'

const newRequestPage = express.Router()

const options = {
	path: '/demo-aanvragen',
	title: 'Demo aanvragen',
	template: 'new-request.ejs',
	styles: [],
	scripts: [],
	hostClass: 'new-request'
}

newRequestPage.get(options.path, async (request, response) => response.render('index', options))

export default newRequestPage