/**
 * Created by colinlacy on 11/22/14.
 */
Meteor.methods({
    addUser: function(userObj) {
        // first, make sure the current user is an admin
        var user = Meteor.user();
        if (user.profile.role != 1) {
            return user.profile.role;
        }

        // find out what kind of user we're talking about
        var role = userObj.roleName === "ghostbuster" ? 2 : 3;

        // build the user for db entry
        var profile = {
            role: role,
            roleName: userObj.roleName,
            firstName: userObj.firstName,
            lastName: userObj.lastName
        };
        return Accounts.createUser({
            username: userObj.userName,
            email: userObj.email,
            profile: profile
        });
    }
});