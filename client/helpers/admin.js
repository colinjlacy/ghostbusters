/**
 * Created by colinlacy on 11/20/14.
 */
Template.admin.helpers({
    user: function() {
        var user = Meteor.user();
        return user.profile;
    },
    navigation: function() {
        return Template.instance().navPoint.get();
    }
});
