/**
 * Created by colinlacy on 11/25/14.
 */
Template.jobs.helpers({
    jobs: function() {
        return Jobs.find();
    },
    assignedFullName: function(id) {
        return Meteor.users.find({_id: id}, {fields: {'profile.firstName': 1}});
    },
    readableStatus: function(status) {
        var readable;
        switch(status) {
            case 0:
                readable = "Unassigned";
                break;
            case 1:
                readable = "Assigned";
                break;
            case 2:
                readable = "In Progress";
                break;
            case 3:
                readable = "Complete";
                break;
        }
        return readable
    }
});