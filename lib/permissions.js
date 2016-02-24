/**
 * Created by lizongyuan on 16/2/24.
 */
// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
};