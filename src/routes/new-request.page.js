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

const getMessage = (message) => {
	if (!message) return null
	if (message === "success") {
		return {
			title: "Aanvraag succesvol",
			icon: "check-circle",
			text: "Uw aanvraag is succesvol verstuurd. U ontvangt binnenkort een e-mail met meer informatie."
		}
	} else {
		return {
			title: "Aanvraag is mislukt",
			icon: "xmark-circle",
			text: "Er is iets misgegaan bij het versturen van uw aanvraag. Probeer het later opnieuw."
		}
	}
}

newRequestPage.get(options.path, async (request, response) => {
	const { query } = request
	let message = getMessage(query.message)
	return response.render('index', { ...options, data: { ...query }, message })
})

newRequestPage.post(options.path, async (request, response) => {
	const { body } = request
	const data = await create('LicenseRequests', body)
	let message = "error"
	if (data.status === 200) message = "success"
	response.redirect(`/demo-aanvragen?message=${message}`)
})

export default newRequestPage