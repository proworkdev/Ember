import { validatePresence,validateLength,validateFormat } from 'ember-changeset-validations/validators';

export default {
	proxyUrl: [
	validatePresence(true),
	validateLength({ min: 5 }) 
	],
	notificationEmail:[
	validatePresence(true),
	validateFormat({ type: 'email' }),
	],
	maxErrorCount: validatePresence(true),
}
