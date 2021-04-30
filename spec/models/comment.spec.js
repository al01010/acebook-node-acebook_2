var mongoose = require('mongoose');
require('../mongodb_helper')
var Comment = require('../../models/comment');

describe('Comment Feature', function() {
    beforeEach(function(done) {
        mongoose.connection.collections.comments.drop(function() {
            done();
        });
    });

    it('has a message', function() {
        var comment = new Comment({ comment: "Cool story bro!" });
        expect(comment.comment).toEqual("Cool story bro!")
    });

    it('can list all comments', function(done) {
        Comment.find(function(err, comments) {
            expect(err).toBeNull();
            expect(comments).toEqual([]);
            done();
        })
    });

    it('comments appear in ascending order', function(done) {
        var comment = new Comment({comment: 'cool stuff!!!'});
        var comment2 = new Comment({comment: 'lovely features'});
        comment.save(function(err){
            comment2.save(function(err){
                Comment.find(function(err, comments) {
                    expect(err).toBeNull();
                    expect(comments[0].comment).toEqual('cool stuff!!!')
                    done();
                })
            })
        })
    }); 

    it('can delete a comment', function(done) {
        var comment = new Comment({comment: 'I am exhausted this week!'});
        comment.delete(function (err, comments) {
            expect(err).toBeNull();
            expect(comments).not.toContain('I am exhausted this week!');
            done();
        })
    })
});