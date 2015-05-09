/**
 * Created by colinlacy on 11/21/14.
 */
Template.users.helpers({
    ghostbusters: function() {
        return Meteor.users.find({"profile.role" : 2});
    }
});