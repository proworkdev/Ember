import DS from 'ember-data';

export default DS.Model.extend({
	notificationEmail:  DS.attr('string'),
	proxyUrl         :  DS.attr('string'),
	maxErrorCount    :  DS.attr('number'),
	suspendScraping  :  DS.attr('boolean'),
	suspendParsing   :  DS.attr('boolean'),
	suspendUpdating  :  DS.attr('boolean')
});
