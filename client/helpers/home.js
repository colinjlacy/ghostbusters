/**
 * Created by colinlacy on 11/17/14.
 */
Template.home.helpers({
    template: function() {
        var user = Meteor.user();
        if (user !== null) {
            if (user.profile.role === "1") {
                return "admin";
            } else {
                return "loading";
            }
        } else {
            return "jobForm";
        }
    }
});