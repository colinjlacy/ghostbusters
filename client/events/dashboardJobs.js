/**
 * Created by colinlacy on 11/23/14.
 */
Template.dashboardJobs.events({
    'change select': function(event, template) {
        var targetEl = template.$(event.currentTarget),
            jobId = targetEl.attr("name"),
            userId = targetEl.val();
        Meteor.call('assignJob', jobId, userId, function(error, bool) {
            if (error) {
                console.log(error);
                return false;
            }
            if (bool) {
                // find the parent panel
                var panel = template.$(event.currentTarget).parents('.panel');
                // animate a fadeOut effect
                panel.addClass('fadeOutLeft');
                // set a timeout that will wait for the fadeout and then slideup and hide the mofo
                setTimeout(function() {
                    panel.slideUp('fast', function() {
                        // change the job status and remove it from the DOM
                        Meteor.call('changeJobStatus', jobId, 1);
                    });
                }, 800);
            }
        })
    }
});