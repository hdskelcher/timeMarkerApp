Router.configure({
    layoutTemplate: 'layout',
    //loadingTemplate: 'loading',
    //notFoundTemplate: 'notFound',

    onAfterAction : function () {
        jQuery(window).scrollTop(0);
    }
});



Router.route('/', {name: 'timerList'});

Router.route('/timerPage', {name: "timerPage"});

Router.route('/timerEdit', {name: "timerEdit"});

Router.route('/addInterval', {name: "addInterval"});