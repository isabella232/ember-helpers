import Ember from 'ember';

export default Ember.Helper.extend({

	compute([obj, key, val]) {
		this.set('val', val);
		return Ember.set(obj, key, val);
	},

	changed: Ember.observer('val', function() {
		this.recompute();
	}),

});
