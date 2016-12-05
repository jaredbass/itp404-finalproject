import Ember from 'ember';

export default Ember.Route.extend({

	 model: function() {
	 	var promise = Ember.$.ajax({
	 		type: 'get',
	 		url: 'http://finalnode404.herokuapp.com/api/music'
	 	});
	 	return promise;
	 }
	
});
