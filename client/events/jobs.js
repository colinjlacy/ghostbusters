/**
 * Created by colinlacy on 11/25/14.
 */
Template.jobs.events({
    'click #jobTable tr': function() {
        console.log(this._id);
    }
});