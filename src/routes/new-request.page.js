import express from 'express'
import { create } from "../lib/data-access.js"

const newRequestPage = express.Router()

const options = {
	path: '/demo-aanvragen',
	title: 'Demo aanvragen',
	template: 'new-request.ejs',
	styles: ['/pages/new-request.css', '/components/form.css'],
	scripts: [],
	hostClass: 'new-request'
}

newRequestPage.get(options.path, async (request, response) => response.render('index', options))
newRequestPage.post(options.path, async (request, response) => {
	const { body } = request
	const createResponse = create('', body)
	createResponse.then((result) => console.log(result))
	createResponse.catch((result) => console.log(result))
	// response.render('index', options)
})

export default newRequestPage