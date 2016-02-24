/**
 * Created by lizongyuan on 16/2/24.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({
            postId: this._id
        });
    }
});