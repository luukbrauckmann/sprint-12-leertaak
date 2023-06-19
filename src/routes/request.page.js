import express from 'express'
import { get } from '../lib/data-access.js'

const requestPage = express.Router()

const options = {
	path: '/aanvragen/**',
	title: 'Aanvraag',
	template: 'request.ejs',
	styles: [],
	scripts: [],
	hostClass: 'request'
}

requestPage.get(options.path, async (request, response) => {
	const id = request.params[0]
	const data = await get(`LicenseRequests/${id}`)
	return response.render('index', { ...options, data: { request: data } })
})

export default requestPage