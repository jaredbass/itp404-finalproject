import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createThem: function(){
			var name = this.get('songName');
			var album = this.get('albumName');
			var artist = this.get('artistName');

			Ember.$.ajax({
				type: 'post',
				url: 'http://finalnode404.herokuapp.com/api/music',
				data: {
					songName: name,
					artistName: artist,
					albumName: album

				}
			});
			this.transitionToRoute('/home');
		}
	}
});
