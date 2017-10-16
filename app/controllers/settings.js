import Ember from 'ember';

export default Ember.Controller.extend({
	newModel: {},
	actions: {
		save(data){
			this.get('store').find('setting', 1).then(function(setting) {
				if(data.notificationEmail){
					setting.set('notificationEmail',data.notificationEmail)
				}

				if(data.proxyUrl){
					setting.set('proxyUrl',data.proxyUrl);
				}

				if(data.maxErrorCount){
					setting.set('maxErrorCount',data.maxErrorCount)
				}
			});
		}
	}
});
