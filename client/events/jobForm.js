/**
 * Created by colinlacy on 11/17/14.
 */
Template.jobForm.events({
    'click input#jobSubmit': function (event) {
        event.preventDefault();
        var description = document.getElementById("jobInput").value;
        Meteor.call('addJob', description, function(error, id) {
            console.log("You added job " + id);
        });
        document.getElementById("jobInput").value = "";
    }
});
