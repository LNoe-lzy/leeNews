/**
 * Created by lizongyuan on 16/2/24.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});