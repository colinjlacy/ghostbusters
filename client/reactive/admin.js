/**
 * Created by colinlacy on 11/21/14.
 */

Template.admin.created = function() {
    this.navPoint = new ReactiveVar;
    this.navPoint.set("dashboard");
};