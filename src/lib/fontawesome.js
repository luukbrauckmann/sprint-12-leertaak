import { library, dom, icon } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

export default (_options) => (_req, res, next) => {
	library.add(fas)
	res.locals.fas = () => dom.css()
	res.locals.icon = (iconName) => icon({ prefix: 'fas', iconName }).html
	next()
}