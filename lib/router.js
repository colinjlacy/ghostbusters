/**
 * Created by colinlacy on 11/17/14.
 * Configures the Iron Router package
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
})
.route('/', {
        layoutTemplate: 'home'
    });