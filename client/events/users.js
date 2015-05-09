/**
 * Created by colinlacy on 11/21/14.
 */
Template.users.events({
    'click input#addUser': function (event, template) {
        // prevent the things
        event.preventDefault();

        // build the awesome user object
        var userObj = {
            userName    : document.getElementById("userName").value,
            firstName   : document.getElementById("firstName").value,
            lastName    : document.getElementById("lastName").value,
            email       : document.getElementById("email").value,
            roleName    : document.getElementById("roleName").value
        };

        // make the user addition happen
        var newUser = Meteor.call('addUser', userObj, function(error, id) {
            // let the people know
            console.log(id);
        });

    }
});