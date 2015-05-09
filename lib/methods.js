/**
 * Created by colinlacy on 11/17/14.
 */
Meteor.methods({
    addJob: function(jobInput) {
        return Jobs.insert({
             description: jobInput,
             submittedOn: new Date(),
             status: 0 // unassigned
        });
    },
    assignJob: function(jobId, userId) {
        return Jobs.update({_id: jobId}, {$set: {assignedTo: userId}});
    },
    changeJobStatus: function(jobId, status) {
        return Jobs.update({_id: jobId}, {$set: {status: status}});
    }
});