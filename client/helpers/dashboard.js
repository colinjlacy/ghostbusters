/**
 * Created by colinlacy on 11/21/14.
 */

Template.dashboard.helpers({
    jobs: function() {
        return Jobs.find({ status: 0 })
    }
});