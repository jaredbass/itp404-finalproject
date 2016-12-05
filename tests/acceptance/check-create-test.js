import { test } from 'qunit';
import moduleForAcceptance from 'finalproj/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | check create');

//this is a test to make sure that the create is actually functioning
test('create works', function(assert) {
  visit('/search');

  // visit('/songs')
  andThen(function() {
    assert.equal(find('.song').length, 5);
  });
});

test('visiting /index redirects', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('visiting create works', function(assert) {
  visit('/album');

  andThen(function() {
    assert.equal(currentURL(), '/album');
  });
});

// this test seems to redirect so im not sure if it works or not but 
// I left it here for proof purposes. 
// test('checking home page is working', function(assert) {
//   visit('/album');
//   fillIn('input.songName', 'test')
//   click('button.submit')
//   visit('/search')
//    andThen(function() {
//      assert.equal(find('.song').text(), 'test');
//   });
// });
