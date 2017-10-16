import Ember from 'ember';
import Changeset from 'ember-changeset';
import SettingValidations from '../validations/setting';
import lookupValidator from 'ember-changeset-validations';
const {get } = Ember;
export default Ember.Component.extend({
	SettingValidations,

	init() {
		this._super(...arguments);
		let model = get(this, 'model');
		this.changeset = new Changeset(model, lookupValidator(SettingValidations),SettingValidations);
		this.changeset.set('notificationEmail', this.get('email'));
		this.changeset.set('proxyUrl', this.get('proxy'));
		this.changeset.set('maxErrorCount', this.get('error_count'));
		this.changeset.save();
	},
	actions: {
		save(changeset){
			changeset.validate().then(()=>{
				if(changeset.get("isValid")){
					this.attrs.save(changeset._changes);
				}
			})			
		},
		rollback(){
			this.attrs.rollback(this.get('changeset'));
		}
	}
});
