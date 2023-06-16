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

	await create('LicenseRequests', body)
		.then((res) => console.log(res))

	response.redirect('/demo-aanvragen')
})

export default newRequestPage