import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteArtist: function() {
			this.sendAction('action', this.get('artist'));
		}
	}
});
