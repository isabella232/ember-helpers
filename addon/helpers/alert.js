import Ember from 'ember';

export default Ember.Helper.extend({

	compute([...params]) {
		return (...passed) => {
			return window.alert( params.concat(passed).join(' ') );
		};
	}

});
