import express from 'express'

const newRequestFollowUpPage = express.Router()

const options = {
	path: '/aanvraag-afronden',
	title: 'Aanvraag afronden',
	template: 'new-request-follow-up.ejs',
	styles: [],
	scripts: [],
	hostClass: 'new-request-follow-up'
}

newRequestFollowUpPage.get(options.path, async (request, response) => response.render('index', options))

export default newRequestFollowUpPage