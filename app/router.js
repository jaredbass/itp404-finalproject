import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search', function(){
  	
  });
  this.route('artist', function() {
    
  });
  this.route('album', function() {
    this.route('alb', { path: ':id'});
  });
  this.route('home');
  this.route('albums');
  this.route('delete', function() {
    this.route('del', { path: ':id'});
  });
});

export default Router;
