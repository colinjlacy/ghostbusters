/**
 * Created by colinlacy on 11/21/14.
 */
Template.admin.events({
    'click .adminNav': function (event, template) {

        // prevent all the things
        event.preventDefault();

        // cache the target element jQuerily, and its name attribute
        var targetEl = template.$(event.currentTarget),
            newPoint = targetEl.attr("name");

        // set the template's reactive var (the inner page template) to the value of the target's name attribute
        template.navPoint.set(newPoint);

        // run a bunch of class changes
        targetEl.parent()
            .addClass("active")
            .siblings(".active")
            .removeClass("active");
    }
});