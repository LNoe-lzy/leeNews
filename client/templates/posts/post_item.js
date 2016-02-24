/**
 * Created by lizongyuan on 16/2/24.
 */
Template.postItem.helpers({
    ownPost: function() {
        return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    upvotedClass: function() {
        var userId = Meteor.userId();
        if (userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvotable';
        } else {
            return 'disabled';
        }
    }
    //commentsCount: function() {
    //    return Comments.find({postId: this._id}).count();
    //}
});

Template.postItem.events({
    'click .upvotable': function(e) {
        e.preventDefault();
        Meteor.call('upvote', this._id);
    }
});