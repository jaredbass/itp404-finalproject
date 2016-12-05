import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		deleteArtist: function(id){
			// console.log(id);
 		// var name = this.get('id');
 		console.log(name);
 		Ember.$.ajax({
 			type: 'delete',
 			url: 'http://finalnode404.herokuapp.com/api/music/'+id,
 			data: {
 				id: id
 			}
 		});
 			this.transitionToRoute('/home');
		}
	}
});
