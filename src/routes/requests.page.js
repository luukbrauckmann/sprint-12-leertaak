import express from 'express'
import { get } from '../lib/data-access.js'

const requestsPage = express.Router()

const options = {
	path: '/aanvragen',
	title: 'Aanvragen',
	template: 'requests.ejs',
	styles: [],
	scripts: [],
	hostClass: 'requests'
}

requestsPage.get(options.path, async (request, response) => {
	const dataResponse = get()
	dataResponse.then((data) => {
		console.log(data);
	})

	return response.render('index', options)
})

export default requestsPage