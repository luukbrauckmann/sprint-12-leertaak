import express from 'express'

const newRequestFollowUpPage = express.Router()

const options = {
	path: '/aanvraag-afronden/**',
	title: 'Aanvraag afronden',
	template: 'new-request-follow-up.ejs',
	styles: [],
	scripts: [],
	hostClass: 'new-request-follow-up'
}

newRequestFollowUpPage.get(options.path, async (request, response) => {
	const id = request.params[0]
	const dataRequest = await get(`LicenseRequests/${id}`)
	return response.render('index', { ...options, data: { request: dataRequest } })
})

export default newRequestFollowUpPage