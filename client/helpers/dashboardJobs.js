/**
 * Created by colinlacy on 11/22/14.
 */
Template.dashboardJobs.helpers({
    ghostbusters: function() {
        return Meteor.users.find({"profile.role" : 2});
    }
});