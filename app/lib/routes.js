Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

// Router.route('/', {
//     name: 'home',
//     controller: 'HomeController',
//     where: 'client'
// });

Router.route('/chatPage', {
    name: 'ChatPageLayout',
    // controller: 'chatPageController',
    where: 'client'
});

Router.route('/', {
    name: 'UserListLayout',
    // controller: 'userListController',
    where: 'client'
})
