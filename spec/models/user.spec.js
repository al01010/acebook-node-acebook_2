var mongoose = require('mongoose');

require('../mongodb_helper')
var User = require('../../models/user');

describe('User model', function() {
  beforeEach(function(done) {
    mongoose.connection.collections.users.drop(function() {
      done();
    });
  });

  it('has an email input', function(){
    var user = new User({ email: 'email@test.co.uk' , password: 'test123', username: 'user1'});
    expect(user.email).toEqual('email@test.co.uk');
    expect(user.username).toEqual('user1');
    expect(user.bio).toEqual("I have not written a bio yet");
  });

  it('does not allow you to sign up with a duplicate email', function(done) {
    var user1 = new User({ email: 'email@test.co.uk', password: 'test123', username: 'user1'})
    var user2 = new User({ email: 'email@test.co.uk', password: 'socool123', username: 'user2'})

    user1.save(() => {
      user2.save(() => {
        User.find(function(err, users) {
          expect(err).toBeNull();
          expect(users).not.toContain(user2);
          done();
        });
      });
    });
  });

})
